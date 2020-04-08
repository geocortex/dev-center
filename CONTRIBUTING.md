# Contributing Guidelines

You might want to make yourself familiar with [Docusaurus v2](https://v2.docusaurus.io/) to make significant changes to the website. If you only want to make content changes you will find the page source within the `docs` folder.

## Setup

### Prerequisites

Install the latest LTS version of [node](https://nodejs.org/).

### Install dependencies

Run `npm install` in the root of this repository.

### Start development server

Run `npm start` in the root of this repository.

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

The website is automatically built and deployed on commit to master.

## Docs pages

### Adding new pages

New pages can be added under each product within the `docs` folder (`docs/web`, `docs/mobile`, etc.). To add a new page:

1. Create a new `.mdx` file within the appropriate product. When naming the file, look for existing or similar pages to follow a similar naming convention. The name of the file is important as it will become the name in the URL. For example, `docs/web/overview.mdx` becomes https://developers.geocortex.com/docs/web/overview
2. Add appropriate markdown headers at the top of the file in the following format:

```
---
title: Overview
description: Geocortex Web - Overview
---
```

-   `title` becomes the prefix of the window title. For example `Overview | Developer Center`
-   `description` is injected into the document's `head` as a `meta` element for SEO purposes to describe the page

3. Add to the `/sidebars.js` file in the appropriate place to make it visible in the sidebar menu.

### Adding hyperlinks

Traditional markdown hyperlink syntax is used to link to other pages in the docs or elsewhere. For example:

```md
See [Key Concepts](key-concepts.mdx) for more information.
```

```md
You can learn more in the [ArcGIS API for JavaScript documentation](https://developers.arcgis.com/javascript/)
```

-   Note the use of `.mdx` file extension when linking to relative pages within these docs. This is important for two reasons:
    -   The link works correctly when browsing the source in GitHub
    -   The `remark-validate-links` plugin uses this link to check for validity

### Adding code blocks

To add a code block, use the markdown syntax like follows:

    ```ts
    import foo from "bar";
    ```

-   Use the appropriate language key in the beginning of the code block (`ts` in the case above). This enables the approriate syntax highlighting for the given language. Common keys in this project are:
    -   `json`
    -   `xml`
    -   `ts`
    -   `tsx`
    -   `csharp`

#### File names

You can add a file name to the code block when appropriate. We only recommend adding a file name when the code block is a _complete_ example - i.e. a user could copy the block into that file and it would run without modification.

For example this is a complete sample (it would actually run):

    ```xml title="layout.xml"
    <?xml version="1.0" encoding="utf-8" ?>
    <layout xmlns="https://geocortex.com/layout/v1">
        <map id="myMap">
            <compass padding="0.5"/>
        </map>
    </layout>
    ```

While this is not complete, and therefore doesn't have a filename:

    ```xml
    <stack>
        <text text="item1"/>
        <text text="item2"/>
        <text text="item3"/>
    </stack>
    ```

#### Line highlighting

You can bring emphasis to certain lines of code by specifying line ranges after the language meta string (leave a space after the language).

    ```json {6-7} title="app.json"
    {
        "schemaVersion": "1.0",
        "items": [
            {
                "$type": "layout",
                "id": "desktop-layout",
                "url": "resource://layout-large.xml",
                "tags": [ "mobile", "large" ]
            },
        ]
    }
    ```

### Adding images

-   Todo. See https://v2.docusaurus.io/docs/using-plugins#docusaurusplugin-ideal-image for consideration.
