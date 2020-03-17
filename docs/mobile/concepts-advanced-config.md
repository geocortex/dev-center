---
id: concepts-advanced-config
title: Advanced Config
description: Geocortex Mobile - Learn about Geocortex Mobile's advanced configuration options
---

## Autocomplete Properties

The `app.json` that comes with the [Quick Start](quick-start) references a json schema. This json schema allows Visual Studio to autocomplete property names and provide linting for types. Two properties in the app.json, `$schema`, and `schemaVersion` allow this to happen.

```json
{
  "$schema": "..\\..\\ViewerFramework\\app-config\\mobile\\mobile-app-config.schema.json",
  "schemaVersion": "1.0",
  "items": [...]
}
```

## Item URI's and Resource URIs

## Layout resource

## App Items

TODO - add nnote to configuration use case about what creating app config does - create an app item

TODO - tags? Kenny?

TODO - advanced cases?
default app items?

-   The `id` value should be a kebab-cased-name. To increase interoperability between layouts and apps, it is a good idea to mark one of each type of component in a layout as `default`.
