---
id: concepts-advanced-layout
title: Advanced Layout
description: Geocortex Mobile - Learn about Geocortex Mobile's advanced layout configuration options
---

### Autocomplete Properties

The `layout.xml` that comes with the [Quick Start](quick-start) references a xml schema. This XML schema allows Visual Studio to autocomplete property names and provide linting for types. Two attributes on the layout, `xmlns:xsi`, and `xsi:schemaLocation` allow this to happen. If you move the `layout.xml` files, you will need to adjust the relative reference to the layout schema for autocomplete to still function.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<layout
    xmlns="https://geocortex.com/layout/v1"
    xmlns:gxm="https://geocortex.com/layout/mobile/v1"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">
    ...
</layout>
```

### Implicit Binding

In previous layout examples, layouts were shown where components related to a map, such a a compass, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?

```xml
    <map config="map1" slot="main">
      <stack margin="0.5" slot="bottom-right" halign="end">
        <compass id="compass" margin="0.5"/>
        <geolocate id="geolocator" margin="0.5" config="geolocate" />
      </stack>
    </map>
```

Certain components, such as `<compass/>` or `<geolocate/>`, require a `<map/>` to function properly. To locate a `<map/>`, the component will crawl up the layout tree looking for a `<map/>` element. If none are found, then it will start a breadth first search at the root of the tree for the first `<map/>` component it finds.

Take this more complicated layout for example.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<layout
    xmlns="https://geocortex.com/layout/v1"
    xmlns:gxm="https://geocortex.com/layout/mobile/v1"
    xmlns:ui-test="https://geocortex.com/layout/mobile/v1/ui-test"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../../../../ViewerFramework/layout/layout-mobile.xsd
      https://geocortex.com/layout/v1 ../../../layout-custom.xsd">
  <gxm:taskbar id="taskbar" orientation="vertical">

    <!-- Taskbar main content -->
    <map id="page1-map1" config="map1" slot="main">
      <gxm:geometry-toolbar slot="top-center-visible" id="geometry-toolbar" config="geometry" margin="0.8" style="map-widget" active="false" />
      <search-new-extent config="search" margin="0.8" slot="top-center-visible" active="false" />
      <stack margin="0.8" slot="top-right" halign="end">
        <iwtm config="iwtm" id="IWTM">
          <user slot="bottom"/>
        </iwtm>
      </stack>
      <stack margin="0.5" slot="bottom-right" halign="end">
        <compass id="compass" margin="0.5"/>
        <button config="measureAction" icon="measure" style="map-widget" margin="0.5"/>
        <geolocate id="geolocator" margin="0.5" config="geolocate" />
      </stack>
      <zoom margin="0.8" slot="top-left"/>
      <gxm:version slot="bottom-left" margin="0.8"/>
    </map>

    <!-- Taskbar / search -->
    <panel id="search-panel">
      <stack id="search">
        <search config="search"/>
        <results-list config="results" active="false" />
      </stack>
      <feature-details config="feature-details"/>
      <gxm:update-feature/>
      <gxm:add-related-feature />
    </panel>

    <!-- Taskbar / layers -->
    <panel id="layers">
      <layer-list />
    </panel>

    <!-- Taskbar / add feature -->
    <panel>
      <gxm:add-feature-select-layer config="edit"/>
      <gxm:add-feature/>
    </panel>
</layout>
```

This layout has components such as `<search/>` or `<gxm:add-feature/>` which require the context of a specific map to function. However, these components are **not** nested within the one `<map/>` component in the app. Therefore, they will start a breadth first search to discover a map component and bind to it.

#### Implicit Config Binding

TODO

### Presentation Attributes

Components support a number of presentation attributes to adjust their positioning and styling in the application after slotting. These presentation attributes are all accessible through [Geocortex Mobile Designer](https://apps.geocortex.com/mobileviewer/designer/), but can also be configured through layout.

:::note
Components also support the core attributes [`config`](concepts-app-config#linking-layout-to-app-config) and [`id`](concepts-app-config#targeting-components-with-by-id), as well as any custom attributes the component defines.
:::

Several different presentations attributes are available. All attributes apply to all components unless otherwise stated.

-   Margin
-   Padding
-   Width
-   Height
-   Grow
-   Horizontal alignment
-   Vertical alignment

:::note
All dimensional units are expressed in 'em's, unless specified otherwise, where 1 em is equal to the current font size.
:::

#### Margin

**Attribute name**: "margin".  
**Expected value**: Either 0 or a positive number (integer or floating point).  
**Description**: Sets the size of the white space outside of the component.

**Example**:

```
<map margin="1.5"/> <!-- Sets the margin on a map to be equal to 1.5x the current font size -->
```

#### Padding

**Attribute name**: "padding".  
**Expected value**: Either 0 or a positive number (integer or floating point).  
**Description**: Sets the size of the white space between a component and its content.  
**Applies to**: This attribute will only apply to components with children, due to technical restrictions.

**Example**:

```
<stack padding="0.5"/> <!-- Sets the padding on a stack to be equal to 0.5x the current font size -->
```

#### Width and Height

**Attribute name**: "width".  
**Expected value**: Em units: Either 0 or a positive number (integer or floating point). Example: 12.

**Default value**: If a width is not set, then the width shall be the natural width of the component (however much space it needs).  
**Description**: Sets the width of a component. If em units, then the width is a literal value.

**Attribute name**: "height".  
**Expected value**: Em units: Either 0 or a positive number (integer or floating point). Example: 12.

**Description**: Sets the height of a component. If em units, then the height is a literal value.

**Example**:

```
<!-- Sets the width of a map to 30em, and the height to 20em. -->
<map width="30em" height="20"/>
```

#### Grow

**Attribute name**: "grow".  
**Expected value**: Either 0 or a positive number (integer or floating point).  
**Description**: Sets whether or not a component's width or height will grow over its parents primary axis. Components with a grow of 0 will fill to their natural or requested height. Components with a specified grow will fill up a percentage of the remaining space equal to their grow value divided by the total grow of all sibling components (including the component in question).  
The default value for a component varies by component. For most components, if no grow value is specified, they will default to a grow value of "0". The following components however will have a default grow value of "1":

-   Map
-   Stack
-   Split

**Applies to**: All components may specify this value, but it will only take effect if the component is a child of a split or a stack. For stacks, grow indicates how the child grows along the vertical axis. For splits, grow indicates how the child grows along the horizontal axis.

**Example**:

```
<stack>
    <!-- Heading will take up whatever vertical space it requires, and will occupy its natural width. -->
    <text content="Heading"/>
    <!-- The first map will occupy 1/3 of the remaining vertical space, and will occupy the full width available. -->
    <map grow="1"/>
    <!-- The first map will occupy 2/3 of the remaining vertical space, and will occupy the full width available. -->
    <map grow="2"/>
</stack>
```

#### Alignment

**Attribute name**: "halign".  
**Expected value**: One of: "start", "center", or "end"  
**Description**: Describes how the content of a component is aligned. For stacks and splits, the content is the child components. For a component like text, the content is the text itself.

**Attribute name**: "valign".  
**Expected value**: One of: "start", "center", or "end"  
**Description**: Describes how the content of a component is aligned. For stacks and splits, the content is the child components. For a component like text, the content is the text itself.

##### Effect on cross-axis stretching

All components will stretch across the cross-axis if the corresponding alignment attribute (halign for stacks, valign for splits) is not set on the parent of that componet. But if a cross-axis alignment is set, then they will no longer stretch across the cross axis (otherwise the effect of alignment would not be observed).  
Some components will stretch across the cross-axis even if the cross-axis alignment is set on the parent: map, stack, split.

yes to all

TODO - defining a web map inline vs referencing
