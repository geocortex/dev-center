---
id: layout
title: App Layout
---

:::note Before learning about layout...
Check out the [Key Concepts](/docs/mobile/concepts/key-concepts).
:::

A layout consists of declaritive XML that defines an applications visual structure and data sources. Think of it as blueprints on which a Mobile Application is built.

Take this example of a app layout with a map and a compass.

```xml
<layout>
    <map id="map-primary" config="default" >
        <compass padding="0.5" id ="compass"/>
    </map>
</layout>
```

The first thing it does is delcare a map that is linked to "default" configuration that specifies what content to load.
Next, a compass is embedded within the map. This does two things:

1. Visually places the element inside the map
2. Tells the compass to display a value relative to the map it is placed in (more about this later...)

:::tip Want to follow along?
Check out the [Quick Start](/docs/mobile/getting-started/quick-start) and [edit the default app layout](/docs/mobile/getting-started/layout-config).
:::

But what if I want the compass to be in the top right corner? At the bottom center of the map? How does the map know where to place it?

## Slotting

The position of a component within it's parent is controlled by what slot it is placed into.

For example, this configuration will place the compass in the top right of the map.

<!-- TODO - actually test all these layouts.... -->

```xml
<layout>
    <map id="map-primary" config="default" >
        <compass padding="0.5" id ="compass" slot="top-right"/>
    </map>
</layout>
```

TODO - figure out which slots are actually available and list them here
