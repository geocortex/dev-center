---
id: concepts-advanced-config
title: Advanced Config
description: Geocortex Mobile - Learn about Geocortex Mobile's advanced configuration options
---

### Autocomplete Properties

The two properties `$schema` and `schemaVersion` are almost always present in an `app.json` file. They power the Visual Studio autocomplete linting and intellisense in the `app.json` file for the various properties that each **app item** has. The `app.json` included with the [quick start](quick-start) references a schema at the root of the project. If you move an `app.json` file, you will need to fix the relative path to the schema file. For more information on json schemas, see [json-schema.org](https://json-schema.org/).

```json
{
  "$schema": "..\\..\\ViewerFramework\\app-config\\mobile\\mobile-app-config.schema.json",

  "schemaVersion": "1.0",

  "items": [...]
}
```

## Item URI's and Resource URIs

**Item URI's** are a commonly used pattern in the `app.json` to uniquely identify and reference app items. They take the format

`item://<item-type>/<item-id>`

For example, the item URI for the following item is `item://menu-item/measureAction`

```json
{
  "$type": "menu",
  "id": "feature-actions",
  "items": [...]
}
```

These item URI's can be used by app items to include other app items as property values, allowing reuse.

```json
{
    "$type": "feature-details",
    "id": "feature-details",
    "featureActions": "item://menu/feature-actions"
}
```

## Layout resource

## App Items

TODO - add note to configuration use case about what creating app config does - create an app item

TODO - tags? Kenny?

TODO - advanced cases?
default app items?

-   The `id` value should be a kebab-cased-name. To increase interoperability between layouts and apps, it is a good idea to mark one of each type of component in a layout as `default`.
