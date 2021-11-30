---
title: "{{.module|camelcase}}"
bookCollapseSection: true
bookToc: false
weight: 100
---

# {{.pkg.name}}
**{{.pkg.name}}** <small>v{{.pkg.version}}</small>
{{.pkg.description}}

{{"{{"}}% api "_{{.module}}-head.md" %{{"}}"}}

{{"{{"}}% api "_{{.module}}-description.md" %{{"}}"}}

## What is inside
{{"{{"}}% api "_{{.module}}-inside.md" %{{"}}"}}

{{"{{"}}% api "_{{.module}}-footer.md" %{{"}}"}}
