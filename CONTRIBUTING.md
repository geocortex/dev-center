# Contributing Guidelines

You might want to make yourself familiar with [Docusaurus v2](https://v2.docusaurus.io/) to make significant changes to the website. If you only want to make content changes you will find the page source within the `docs` folder.

## Cloning the repository

If you are a member of our organization and have push permissions to this repository, you can simply clone this repository, create a branch, and begin making changes. Otherwise you can follow this guide to forking a repository: https://help.github.com/en/github/getting-started-with-github/fork-a-repo.

Once you're happy with your changes and have committed them to a branch, you can submit a pull request in this project where a maintainer can review and merge your changes.

## Project setup

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

1. Create a new `.mdx` file within the appropriate product. When naming the file, look for existing or similar pages to follow a similar naming convention. The name of the file is important as it will become the name in the URL. For example, `docs/web/overview.mdx` becomes https://developers.vertigisstudio.com/docs/web/overview
2. Add appropriate markdown headers at the top of the file in the following format:

```
---
title: Overview
description: VertiGIS Studio Web - Overview
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

-   Use the appropriate language key in the beginning of the code block (`ts` in the case above). This enables the appropriate syntax highlighting for the given language. Common keys in this project are:
    -   `json`
    -   `xml`
    -   `ts`
    -   `tsx`
    -   `cs`

#### File names

You can add a file name to the code block when appropriate. We only recommend adding a file name when the code block is a _complete_ example - i.e. a user could copy the block into that file and it would run without modification.

For example this is a complete sample (it would actually run):

    ```xml title="app/layout.xml"
    <?xml version="1.0" encoding="utf-8" ?>
    <layout xmlns="https://geocortex.com/layout/v1">
        <map>
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

    ```json {6-7} title="app/app.json"
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

The following guidelines apply to adding screenshots of the products, usually for example or demo purposes. All other images will be treated on a case by case basis, but should still be processed through [Tiny PNG](https://tinypng.com/).

#### VertiGIS Studio Web

VertiGIS Studio Web screenshots should be taken at a certain window size for consistency. This can be easily achieved using the chrome developer tools.

1. Open the VertiGIS Studio Web page you want to screenshot.
2. Open the dev tools.
3. Go to settings / devices
4. [Add a custom device](https://developers.google.com/web/tools/chrome-devtools/device-mode#custom) with the following settings:
5. Add a new custom device with the following settings:
    - Width: 950
    - Height: 550
    - **Pixel Ratio: 1**
    - User Agent: Desktop

![Custom Device Config](https://user-images.githubusercontent.com/8933450/78948237-7e329900-7a7c-11ea-80c9-f5e19ba834e6.png)

6. Open the [Device Toolbar](https://developers.google.com/web/tools/chrome-devtools/device-mode#viewport)
7. Use the chrome screenshot command to take a screenshot. While in the chrome dev tools window...
    - ctrl + shift + p
    - "Capture Screenshot"
8. Rename the downloaded screenshot to something appropriate.
9. **Run the screenshot through [Tiny PNG](https://tinypng.com/)** to compress it.
10. Place the resulting .png in the static/img folder.
11. Add it to the appropriate markdown file(s), using the `useBaseUrl` helper function to generate the qualified image url.

```html
<img src={useBaseUrl("img/layout-multi-component-config.png")}/>
```

#### VertiGIS Studio Mobile

VertiGIS Studio Mobile screenshots should be roughly taken with a certain window size for consistency.

1. Open the VertiGIS Studio Mobile application you want to screenshot.
    - Unless demonstrating theming functionality, all screenshots should be taken with the dark theme.
2. Using the `Windows + Left` then `Windows + Up` shortcuts to move the app window to occupy a corner of the screen.
3. Using Windows [snipping tool](https://support.microsoft.com/en-ca/help/13776/windows-10-use-snipping-tool-to-capture-screenshots), capture a window screenshot of the application.
4. **Run the screenshot through [Tiny PNG](https://tinypng.com/)** to compress it.
5. Place the resulting .png in the static/img folder.
6. Add it to the appropriate markdown file(s), using the `useBaseUrl` helper function to generate the qualified image url.

```html
<img src={useBaseUrl("img/layout-multi-component-config.png")}/>
```

#### Prettier

If you've added a file or made non-trivial changes, run `npm prettier:write` in the root of this directory. This will fix the formatting of the file(s) in case there are any issues. Forgetting to do this could result in your PR build failing the linting check.
