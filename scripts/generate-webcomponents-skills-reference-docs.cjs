/**
 * Generate markdown documentation from the @furo/ui5 custom-elements.json
 *
 * Usage: npm run skills:update
 *
 * Reads the root custom-elements.json manifest (produced by `npm run analyze:deep`)
 * and generates one markdown file per component in the furo-ui5-components skill's
 * references directory, plus an index grouped by category.
 *
 * The manifest carries enriched metadata for AI retrieval, authored as JSDoc tags on
 * each element class and hoisted onto the declaration by the "deep-cem" plugin in
 * scripts/deep-cem.config.mjs:
 * - summary            (@summary)  Clean 1-2 sentence description
 * - keywords           (@keywords) Search aliases (e.g. "modal" for dialog)
 * - category           (@category) Component category (e.g. "Container", "Form")
 * - useCase            (@usecase)  When to use this component
 * - relatedComponents  (@related)  Related/companion components
 *
 * Everything under references/components/ is generated — do not hand-edit it.
 */

const fs = require('fs');
const path = require('path');

const CUSTOM_ELEMENTS_PATH = path.join(__dirname, '../custom-elements.json');
const PACKAGE_JSON_PATH = path.join(__dirname, '../package.json');
const COMPONENTS_DIR = path.join(__dirname, '../skills/furo-ui5-components/references/components');
const INDEX_PATH = path.join(__dirname, '../skills/furo-ui5-components/references/components-index.md');

const PACKAGE_NAME = '@furo/ui5';
const TAG_PREFIX = 'furo-ui5-';

// Ensure components directory exists
if (!fs.existsSync(COMPONENTS_DIR)) {
  fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
}

// Clean existing generated files to remove stale artifacts
const existingFiles = fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.md'));
if (existingFiles.length > 0) {
  console.log(`Cleaning ${existingFiles.length} existing files...`);
  existingFiles.forEach(file => {
    fs.unlinkSync(path.join(COMPONENTS_DIR, file));
  });
}

// Also clean index file if it exists
if (fs.existsSync(INDEX_PATH)) {
  fs.unlinkSync(INDEX_PATH);
}

// Load custom-elements.json
const data = JSON.parse(fs.readFileSync(CUSTOM_ELEMENTS_PATH, 'utf8'));

/** Every tag this package actually ships — the set of valid @related targets. */
const knownTags = new Set(
  data.modules
    .map(m => m.declarations?.[0]?.tagName)
    .filter(Boolean)
);

/** Dangling @related targets, collected while generating and reported at the end. */
const danglingRelated = [];

/**
 * Map of `dist/elements/<dir>` -> package export subpath, built from package.json
 * `exports`. Used to turn a module path into the import a consumer actually writes.
 */
const exportSubpathByDir = (() => {
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  const map = {};
  for (const [subpath, target] of Object.entries(pkg.exports || {})) {
    const file = typeof target === 'string' ? target : target?.default;
    if (typeof file !== 'string') continue;
    const dir = file.replace(/^\.\//, '').replace(/\/index\.js$/, '');
    map[dir] = subpath;
  }
  return map;
})();

/**
 * Resolve the consumer-facing import specifier for a module.
 *
 * `mod.path` points at the class file (dist/elements/text-input/FuroUi5TextInput.js),
 * but consumers import the side-effect-registering index via the package export
 * (@furo/ui5/text-input). Walk up from the module's directory until an export matches;
 * nested subcomponents without their own export resolve to their parent
 * (furo-ui5-tree-item -> @furo/ui5/tree). Fall back to the raw path.
 */
function resolveImportSpecifier(modPath) {
  let dir = modPath.replace(/\/[^/]+$/, '');

  while (dir && dir !== '.') {
    const subpath = exportSubpathByDir[dir];
    if (subpath) {
      return `${PACKAGE_NAME}${subpath.replace(/^\./, '')}`;
    }
    const parent = dir.replace(/\/[^/]+$/, '');
    if (parent === dir) break;
    dir = parent;
  }

  return `${PACKAGE_NAME}/${modPath}`;
}

/**
 * Resolve the exported class name for a module.
 *
 * `declarations[0].name` is unreliable here: deep-cem resolves inherited UI5 members
 * and leaves the base class name behind (furo-ui5-text-input reports `TextInput`, not
 * `FuroUi5TextInput`). The module's own js export pointing back into src/ is correct.
 */
function resolveClassName(mod, decl) {
  const ownExport = (mod.exports || []).find(
    e => e.kind === 'js' && e.declaration?.module?.startsWith('src/')
  );
  return ownExport?.name || decl.name;
}

/**
 * Per-component description overrides, keyed by tag name.
 *
 * Only needed when a component's JSDoc yields nothing usable as a short description.
 * Empty by default — add entries here rather than writing prose into the manifest.
 */
const FALLBACK_DESCRIPTIONS = {};

/**
 * Convert HTML description to markdown, preserving code examples
 */
function convertDescription(desc) {
  if (!desc) return '';

  let result = desc;

  // Extract and preserve code blocks first (```html, ```js, etc.)
  const codeBlocks = [];
  result = result.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    codeBlocks.push({ lang, code: code.trim() });
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // Convert <pre><code> blocks to markdown code blocks
  result = result.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (match, code) => {
    // Unescape HTML entities
    const decoded = code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .trim();
    codeBlocks.push({ lang: 'html', code: decoded });
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // Convert inline <code> to backticks
  result = result.replace(/<code>([^<]+)<\/code>/gi, '`$1`');

  // Convert <br> to newlines
  result = result.replace(/<br\s*\/?>/gi, '\n');

  // Convert <strong> and <b> to bold
  result = result.replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, '**$2**');

  // Convert <em> and <i> to italic
  result = result.replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, '*$2*');

  // Convert <a href="...">text</a> to [text](...)
  result = result.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/gi, '[$2]($1)');

  // Convert <ul>/<li> to markdown lists
  result = result.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  });

  // Convert <ol>/<li> to markdown numbered lists
  let listNum = 0;
  result = result.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
    listNum = 0;
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (liMatch, item) => {
      listNum++;
      return `${listNum}. ${item}\n`;
    });
  });

  // Remove remaining HTML tags (but not their content)
  result = result.replace(/<[^>]+>/g, '');

  // Unescape HTML entities
  result = result
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');

  // Restore code blocks
  codeBlocks.forEach((block, i) => {
    result = result.replace(`__CODE_BLOCK_${i}__`, `\n\`\`\`${block.lang}\n${block.code}\n\`\`\`\n`);
  });

  // Clean up excessive newlines
  result = result.replace(/\n{3,}/g, '\n\n');

  return result.trim();
}

/**
 * Extract first paragraph/sentence for short description
 * @param {string} desc - The description text
 * @param {string} [tagName] - Optional tag name for fallback generation
 */
function getShortDescription(desc, tagName) {
  // First check for fallback descriptions (only if tagName provided)
  if (tagName && FALLBACK_DESCRIPTIONS[tagName]) {
    return FALLBACK_DESCRIPTIONS[tagName];
  }

  if (!desc) {
    // Generate description from tag name if no description and tagName provided
    return tagName ? generateDescriptionFromTagName(tagName) : '';
  }

  // Remove code blocks and HTML for short desc
  let cleaned = desc
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<pre[\s\S]*?<\/pre>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();

  // Remove markdown headings (### Overview, ## Description, etc.)
  cleaned = cleaned.replace(/^#+\s*\w+\s*/gm, '').trim();

  // Skip empty lines at the start
  cleaned = cleaned.replace(/^\s*\n+/, '').trim();

  // Remove import statements that aren't useful as descriptions
  if (cleaned.startsWith('Module Import') || cleaned.startsWith('import ') || cleaned.startsWith('`import ')) {
    return tagName ? generateDescriptionFromTagName(tagName) : '';
  }

  // If still empty or just the tag name, generate from tag name
  if (tagName && (!cleaned || cleaned === tagName || cleaned.toLowerCase() === tagName.replace(TAG_PREFIX, '').replace(/-/g, ''))) {
    return generateDescriptionFromTagName(tagName);
  }

  if (!cleaned) return '';

  const firstPara = cleaned.split('\n\n')[0].replace(/\n/g, ' ').trim();

  // If first paragraph is still empty or just whitespace, generate from tag name
  if (!firstPara || firstPara.length < 10) {
    return tagName ? generateDescriptionFromTagName(tagName) : '';
  }

  // Get first 200 chars or first sentence
  if (firstPara.length <= 200) return firstPara;
  const firstSentence = firstPara.match(/^[^.!?]+[.!?]/);
  return firstSentence ? firstSentence[0] : firstPara.slice(0, 200) + '...';
}

/**
 * Generate a description from the tag name when none is available
 */
function generateDescriptionFromTagName(tagName) {
  // Remove furo-ui5- prefix and split by hyphens
  const name = tagName.replace(/^furo-ui5-/, '').replace(/^ui5-/, '');
  const words = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `${words} component`;
}

/**
 * Generate front matter tags from component metadata
 * @param {object} decl - Component declaration from custom-elements.json
 */
function generateTags(decl) {
  const tags = [];

  // Add keywords from manifest if available
  if (decl.keywords && Array.isArray(decl.keywords)) {
    tags.push(...decl.keywords);
  }

  // Add tag name parts (e.g. "furo-ui5-date-picker" -> ["date", "picker"])
  const nameParts = decl.tagName.replace(/^furo-ui5-/, '').split('-');
  nameParts.forEach(part => {
    if (part.length > 2 && !tags.includes(part)) {
      tags.push(part);
    }
  });

  return tags;
}

/**
 * Generate markdown for a single component
 */
function generateComponentMarkdown(mod) {
  const decl = mod.declarations[0];
  if (!decl || !decl.tagName) return null;

  const lines = [];

  // Front matter - use the enriched fields from custom-elements.json
  const tags = generateTags(decl);
  // Prefer summary over description for short descriptions
  const shortDesc = decl.summary || getShortDescription(decl.description, decl.tagName);

  lines.push('---');
  lines.push(`title: ${decl.tagName}`);
  lines.push(`tags: [${tags.join(', ')}]`);
  if (decl.category) {
    lines.push(`category: ${decl.category}`);
  }
  if (decl.useCase) {
    lines.push(`use-when: ${decl.useCase}`);
  } else if (shortDesc) {
    lines.push(`use-when: ${shortDesc}`);
  }
  lines.push('---');
  lines.push('');

  // Header
  lines.push(`# ${decl.tagName}`);
  lines.push('');

  // Summary - show prominently if available
  if (decl.summary) {
    lines.push(`> ${decl.summary}`);
    lines.push('');
  }

  lines.push(`**Class:** \`${resolveClassName(mod, decl)}\``);
  // The subpath serves both roles: a bare import registers the tag, and the same module
  // re-exports the class, so the type is reachable without going through the root barrel.
  lines.push(`**Import:** \`import "${resolveImportSpecifier(mod.path)}"\``);
  lines.push(
    `**Import type:** \`import type { ${resolveClassName(mod, decl)} } from "${resolveImportSpecifier(mod.path)}"\``
  );
  if (decl.superclass) {
    lines.push(`**Extends:** \`${decl.superclass.name}\``);
  }
  if (decl.category) {
    lines.push(`**Category:** ${decl.category}`);
  }
  lines.push('');

  // Related Components. Only link tags this package actually ships — a link to a
  // non-existent component invites exactly the hallucination the skill warns against.
  // Dangling targets are dropped here and reported at the end so the @related JSDoc
  // can be corrected at the source.
  const related = (decl.relatedComponents || []).filter(c => {
    if (knownTags.has(c)) return true;
    danglingRelated.push({ from: decl.tagName, to: c });
    return false;
  });
  if (related.length > 0) {
    lines.push(`**Related:** ${related.map(c => `[\`${c}\`](${c}.md)`).join(', ')}`);
    lines.push('');
  }

  // Description
  if (decl.description) {
    lines.push('## Overview');
    lines.push('');
    lines.push(convertDescription(decl.description));
    lines.push('');
  }

  // Attributes
  const attrs = (decl.attributes || []).filter(a =>
    !['effective-dir', 'is-ui5-element'].includes(a.name)
  );
  if (attrs.length > 0) {
    lines.push('## Attributes');
    lines.push('');
    lines.push('| Attribute | Type | Default | Description |');
    lines.push('|-----------|------|---------|-------------|');
    attrs.forEach(attr => {
      const type = (attr.type?.text || 'unknown').replace(/\|/g, '\\|').replace(/\n/g, ' ');
      const def = attr.default || '-';
      const desc = getShortDescription(attr.description).replace(/\|/g, '\\|').replace(/\n/g, ' ');
      lines.push(`| \`${attr.name}\` | \`${type}\` | ${def} | ${desc} |`);
    });
    lines.push('');
  }

  // Properties (non-attribute public fields)
  const props = (decl.members || []).filter(m =>
    m.kind === 'field' &&
    m.privacy === 'public' &&
    !m.attribute &&
    !m.static &&
    !['effectiveDir', 'isUI5Element'].includes(m.name)
  );
  if (props.length > 0) {
    lines.push('## Properties');
    lines.push('');
    lines.push('| Property | Type | Description |');
    lines.push('|----------|------|-------------|');
    props.forEach(prop => {
      const type = (prop.type?.text || 'unknown').replace(/\|/g, '\\|').replace(/\n/g, ' ');
      const desc = getShortDescription(prop.description).replace(/\|/g, '\\|').replace(/\n/g, ' ');
      lines.push(`| \`${prop.name}\` | \`${type}\` | ${desc} |`);
    });
    lines.push('');
  }

  // Slots
  const slots = (decl.slots || []).filter(s => s.name !== '');
  if (slots.length > 0) {
    lines.push('## Slots');
    lines.push('');
    slots.forEach(slot => {
      const isDefault = !slot.name || slot.name === 'default';
      const displayName = isDefault ? 'Default Slot (unnamed)' : slot.name;
      const desc = convertDescription(slot.description);

      if (isDefault) {
        lines.push(`### Default Slot (unnamed)`);
        lines.push('');
        lines.push('> **Usage:** Place content directly inside the component without a `slot` attribute.');
      } else {
        lines.push(`### \`${displayName}\``);
      }

      if (slot.type?.text) {
        lines.push(`**Type:** \`${slot.type.text}\``);
      }
      if (desc) {
        lines.push('');
        lines.push(desc);
      }
      lines.push('');
    });
  }

  // Events
  const events = decl.events || [];
  if (events.length > 0) {
    lines.push('## Events');
    lines.push('');
    lines.push('| Event | Detail Type | Description |');
    lines.push('|-------|-------------|-------------|');
    events.forEach(event => {
      const detail = event.type?.text || '-';
      const desc = getShortDescription(event.description).replace(/\|/g, '\\|').replace(/\n/g, ' ');
      lines.push(`| \`${event.name}\` | \`${detail}\` | ${desc} |`);
    });
    lines.push('');
  }

  // Methods
  const ui5InheritedMethods = ['focus', 'getDomRef', 'getFocusDomRef', 'getFocusDomRefAsync'];
  const hasUi5Methods = (decl.members || []).some(m =>
    m.kind === 'method' &&
    m.privacy === 'public' &&
    m.inheritedFrom?.name === 'UI5Element' &&
    ui5InheritedMethods.includes(m.name)
  );

  const methods = (decl.members || []).filter(m => {
    if (m.kind !== 'method' || m.privacy !== 'public') return false;
    // Exclude UI5Element inherited methods - they're documented separately
    if (m.inheritedFrom?.name === 'UI5Element') return false;
    return true;
  });

  if (methods.length > 0 || hasUi5Methods) {
    lines.push('## Methods');
    lines.push('');

    if (hasUi5Methods) {
      lines.push('**Inherited:** See [UI5Element Inherited Methods](../ui5-inherited-methods.md) for `focus()`, `getDomRef()`, `getFocusDomRef()`, `getFocusDomRefAsync()`');
      lines.push('');
    }

    methods.forEach(method => {
      const params = (method.parameters || [])
        .map(p => `${p.name}${p.optional ? '?' : ''}: ${p.type?.text || 'any'}`)
        .join(', ');
      const returnType = method.return?.type?.text || 'void';
      lines.push(`### \`${method.name}(${params}): ${returnType}\``);
      if (method.description) {
        lines.push('');
        lines.push(convertDescription(method.description));
      }
      lines.push('');
    });
  }

  // CSS Parts
  const cssParts = decl.cssParts || [];
  if (cssParts.length > 0) {
    lines.push('## CSS Parts');
    lines.push('');
    cssParts.forEach(part => {
      lines.push(`- \`${part.name}\`: ${part.description || ''}`);
    });
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Generate index file with all components - optimized for AI retrieval
 * Grouped by the category field from custom-elements.json
 */
function generateIndex(components) {
  const lines = [];
  lines.push('# Furo UI5 Components Reference');
  lines.push('');
  lines.push('> **For AI assistants:** Each component entry includes keywords in parentheses and use-case descriptions to help match user requests.');
  lines.push('');
  lines.push('## Components');
  lines.push('');

  // Group by category from manifest
  const byCategory = {};

  components.forEach(c => {
    const cat = c.category || 'Other';
    if (!byCategory[cat]) {
      byCategory[cat] = [];
    }
    byCategory[cat].push(c);
  });

  // Define category order (most common/important first)
  const categoryOrder = [
    'Layout',
    'PageStructure',
    'Navigation',
    'Form',
    'FormLayout',
    'Table',
    'List',
    'Container',
    'Display',
    'Feedback',
    'TypeRenderers',
    'Button',
    'Other'
  ];

  // Sort categories with defined order first, then alphabetically
  const sortedCategories = Object.keys(byCategory).sort((a, b) => {
    const aIdx = categoryOrder.indexOf(a);
    const bIdx = categoryOrder.indexOf(b);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return a.localeCompare(b);
  });

  // Generate output with keywords and use-case from manifest
  sortedCategories.forEach(category => {
    const items = byCategory[category];
    if (items.length === 0) return;

    lines.push(`### ${category}`);
    lines.push('');

    items.sort((a, b) => a.tagName.localeCompare(b.tagName)).forEach(c => {
      let entry = `- [\`${c.tagName}\`](components/${c.tagName}.md)`;

      // Add keywords if available
      if (c.keywords && c.keywords.length > 0) {
        entry += ` *(${c.keywords.join(', ')})*`;
      }

      // Add use-case or summary
      if (c.useCase) {
        entry += ` — ${c.useCase}`;
      } else if (c.summary) {
        entry += ` — ${c.summary}`;
      } else if (c.shortDesc) {
        entry += ` — ${c.shortDesc}`;
      }

      lines.push(entry);
    });
    lines.push('');
  });

  return lines.join('\n');
}

// Main execution
console.log('Generating component documentation...');

const components = [];

data.modules.forEach(mod => {
  if (!mod.declarations || !mod.declarations[0]) return;
  const decl = mod.declarations[0];
  if (!decl.tagName) return;

  const markdown = generateComponentMarkdown(mod);
  if (!markdown) return;

  const filename = `${decl.tagName}.md`;
  const filepath = path.join(COMPONENTS_DIR, filename);

  fs.writeFileSync(filepath, markdown);
  console.log(`  Generated: ${filename}`);

  // Pass all metadata fields for index generation
  components.push({
    tagName: decl.tagName,
    name: resolveClassName(mod, decl),
    summary: decl.summary || null,
    keywords: decl.keywords || [],
    category: decl.category || 'Other',
    useCase: decl.useCase || null,
    relatedComponents: decl.relatedComponents || [],
    shortDesc: decl.summary || getShortDescription(decl.description, decl.tagName)
  });
});

// Generate index
const indexContent = generateIndex(components);
fs.writeFileSync(INDEX_PATH, indexContent);
console.log('  Generated: references/components-index.md');

console.log(`\nDone! Generated ${components.length} component files.`);

if (danglingRelated.length > 0) {
  console.log(
    `\n⚠️  ${danglingRelated.length} @related target(s) name a component this package does not ship.`
  );
  console.log('   They were omitted from the generated docs. Fix the @related JSDoc tags:');
  for (const { from, to } of danglingRelated) {
    console.log(`   - ${from}: "${to}"`);
  }
}
