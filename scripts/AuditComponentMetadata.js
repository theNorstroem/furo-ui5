#!/usr/bin/env node

/**
 * Audit script for checking component metadata completeness in custom-elements.json
 *
 * Checks that all components with tagNames have the required metadata fields:
 * - summary: Concise description for AI/documentation
 * - keywords: Search terms for discoverability
 * - category: Component category for organization
 * - useCase: Guidance on when to use the component
 * - relatedComponents: Links to related components
 *
 * These are authored as JSDoc tags on the element class
 * (@summary, @keywords, @category, @usecase, @related) and hoisted onto the
 * declaration by the "deep-cem" plugin in scripts/deep-cem.config.mjs.
 * Run `npm run analyze:deep` before auditing.
 *
 * Usage:
 *   node scripts/AuditComponentMetadata.js [--strict] [--json]
 *
 * Options:
 *   --strict  Exit with error code if any components are missing metadata
 *             or use an unknown category
 *   --json    Output results as JSON instead of human-readable format
 */

import fs from "fs";

const args = process.argv.slice(2);
const strictMode = args.includes("--strict");
const jsonOutput = args.includes("--json");

const REQUIRED_FIELDS = [
  "summary",
  "keywords",
  "category",
  "useCase",
  "relatedComponents",
];

const VALID_CATEGORIES = [
  "Form",
  "FormLayout",
  "Button",
  "Table",
  "List",
  "Navigation",
  "Container",
  "Layout",
  "PageStructure",
  "Display",
  "Feedback",
  "TypeRenderers",
];

function loadManifest() {
  try {
    const rawdata = fs.readFileSync("./custom-elements.json", "utf-8");
    return JSON.parse(rawdata);
  } catch (e) {
    console.error("❌ Error reading custom-elements.json:", e.message);
    process.exit(1);
  }
}

function auditComponents(manifest) {
  const results = {
    total: 0,
    complete: 0,
    incomplete: [],
    invalidCategories: [],
    fieldStats: {},
  };

  // Initialize field stats
  REQUIRED_FIELDS.forEach(field => {
    results.fieldStats[field] = { present: 0, missing: 0 };
  });

  for (const module of manifest.modules) {
    const decl = module.declarations?.[0];

    // Only audit components with tagNames (actual web components)
    if (!decl?.tagName) continue;

    results.total++;

    const missingFields = [];
    const componentInfo = {
      tagName: decl.tagName,
      name: decl.name,
      path: module.path,
      missingFields: [],
      invalidCategory: null,
    };

    // Check each required field
    for (const field of REQUIRED_FIELDS) {
      const value = decl[field];
      const isEmpty =
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0);

      if (isEmpty) {
        missingFields.push(field);
        results.fieldStats[field].missing++;
      } else {
        results.fieldStats[field].present++;
      }
    }

    // Validate category value
    if (decl.category && !VALID_CATEGORIES.includes(decl.category)) {
      componentInfo.invalidCategory = decl.category;
      results.invalidCategories.push({
        tagName: decl.tagName,
        category: decl.category,
      });
    }

    if (missingFields.length > 0) {
      componentInfo.missingFields = missingFields;
      results.incomplete.push(componentInfo);
    } else {
      results.complete++;
    }
  }

  return results;
}

function printHumanReadable(results) {
  console.log("\n📊 Component Metadata Audit Report");
  console.log("=".repeat(50));

  // Summary
  const completionRate = ((results.complete / results.total) * 100).toFixed(1);
  console.log(`\n📈 Summary:`);
  console.log(`   Total components: ${results.total}`);
  console.log(`   Complete:         ${results.complete} (${completionRate}%)`);
  console.log(`   Incomplete:       ${results.incomplete.length}`);

  // Field statistics
  console.log(`\n📋 Field Coverage:`);
  for (const [field, stats] of Object.entries(results.fieldStats)) {
    const coverage = ((stats.present / results.total) * 100).toFixed(1);
    const icon = stats.missing === 0 ? "✅" : "⚠️";
    console.log(
      `   ${icon} ${field.padEnd(20)} ${stats.present}/${results.total} (${coverage}%)`,
    );
  }

  // Invalid categories
  if (results.invalidCategories.length > 0) {
    console.log(
      `\n⚠️  Invalid Categories (${results.invalidCategories.length}):`,
    );
    console.log(`   Valid categories: ${VALID_CATEGORIES.join(", ")}`);
    for (const item of results.invalidCategories) {
      console.log(`   - ${item.tagName}: "${item.category}"`);
    }
  }

  // Incomplete components
  if (results.incomplete.length > 0) {
    console.log(
      `\n❌ Components Missing Metadata (${results.incomplete.length}):`,
    );

    // Group by missing field count for readability
    const grouped = {};
    for (const comp of results.incomplete) {
      const count = comp.missingFields.length;
      if (!grouped[count]) grouped[count] = [];
      grouped[count].push(comp);
    }

    for (const count of Object.keys(grouped).sort((a, b) => b - a)) {
      console.log(`\n   Missing ${count} field(s):`);
      for (const comp of grouped[count]) {
        console.log(`   - ${comp.tagName}`);
        console.log(`     Missing: ${comp.missingFields.join(", ")}`);
      }
    }
  } else {
    console.log(`\n✅ All components have complete metadata!`);
  }

  console.log("\n" + "=".repeat(50));
}

function printJson(results) {
  console.log(
    JSON.stringify(
      {
        summary: {
          total: results.total,
          complete: results.complete,
          incomplete: results.incomplete.length,
          completionRate:
            ((results.complete / results.total) * 100).toFixed(1) + "%",
        },
        fieldCoverage: Object.fromEntries(
          Object.entries(results.fieldStats).map(([field, stats]) => [
            field,
            {
              present: stats.present,
              missing: stats.missing,
              coverage:
                ((stats.present / results.total) * 100).toFixed(1) + "%",
            },
          ]),
        ),
        invalidCategories: results.invalidCategories,
        incompleteComponents: results.incomplete,
      },
      null,
      2,
    ),
  );
}

// Main
const manifest = loadManifest();
const results = auditComponents(manifest);

if (jsonOutput) {
  printJson(results);
} else {
  printHumanReadable(results);
}

// Exit with error in strict mode if there are incomplete components or
// components using a category outside VALID_CATEGORIES.
if (
  strictMode &&
  (results.incomplete.length > 0 || results.invalidCategories.length > 0)
) {
  process.exit(1);
}
