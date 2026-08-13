# UI Authoring Plugin Examples

Examples of CrafterCMS Studio authoring UI plugins.

## Component library (widgets + FE2 control/datasource)

The primary sample lives in [`examples/component-library`](examples/component-library). It builds:

- Studio UI widgets (`library`)
- NASA APOD FE2 form control (`control/apod`)
- NASA APOD FE2 data source (`datasource/apod-image`)

```bash
yarn
yarn workspace example-component-library build
crafter-cli copy-plugin -e local -s YOUR_SITE_ID --path /absolute/path/to/this/repo
```

See [`examples/component-library/README.md`](examples/component-library/README.md) for details.
