# Sample Component Library Plugin

This example demonstrates how to create a CrafterCMS extension that exports:

- **Studio UI widgets** (tools panel, dialogs, etc.)
- An **FE2 form control** (NASA APOD)
- An **FE2 data source** (NASA APOD image)

Sources live under `src/`; Rollup builds **three** bundles into `authoring/static-assets/plugins/org/craftercms/examples/`.

## Build

From the repo root:

```bash
yarn
yarn workspace example-component-library build
```

Or from this directory:

```bash
yarn build
```

Outputs (copied for CLI install):

| Bundle      | Path                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------- |
| Widgets     | `authoring/static-assets/plugins/org/craftercms/examples/library/index.js`               |
| Control     | `authoring/static-assets/plugins/org/craftercms/examples/control/apod/index.js`          |
| Data source | `authoring/static-assets/plugins/org/craftercms/examples/datasource/apod-image/index.js` |

## Install

Install from the **repository root** (not this folder) using the CrafterCMS CLI or the `/studio/api/2/marketplace/copy` API:

```json
{
  "siteId": "YOUR_SITE_ID",
  "path": "/Users/your/path/to/this/repo"
}
```

## Widgets

The `viewProjectsPanelButton` & `vanilla` widgets are auto installed when using the `marketplace/copy` API. There are however other widgets in `src` directory you can use for inspiration.
Reviewing your site's `ui.xml` you'll find the widgets below. Review the `installation` section of the root `craftercms-plugin.yaml` to understand where those widgets come from.

```xml
<widget id="org.craftercms.examples.viewProjectsPanelButton">
  <plugin id="org.craftercms"
          type="examples"
          name="library"
          file="index.js"/>
</widget>
<widget id="org.craftercms.examples.vanilla">
  <plugin id="org.craftercms"
          type="examples"
          name="library"
          file="index.js"/>
</widget>
```

To learn more on creating plugins in CrafterCMS, see [CrafterCMS plugins documentation](https://docs.craftercms.org/current/by-role/developer/composable/extensions/plugins.html)
