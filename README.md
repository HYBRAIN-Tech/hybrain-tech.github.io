# HyBrain website

A static landing page for HyBrain, ready for GitHub Pages. All fonts and assets work offline. There is no installation or build step.

## Local preview

Double-click **Preview.cmd**, or open **index.html** in a browser. After editing a file, refresh the page to see the change. You can use this at any time without an internet connection.

For an optional local web server, run `node preview.cjs` from this folder and open http://127.0.0.1:4173. Stop it with Ctrl+C. If that port is already in use, set the PORT environment variable to another number before starting.

## Presentation branding

The website uses the supplied pitch presentation palette:

| Color | Hex | Role |
| --- | --- | --- |
| Navy | `#04273B` | Main backgrounds and headings |
| Teal | `#0E6073` | Applications section, labels and icons |
| Amber | `#DE923C` | Primary buttons and highlights |
| Terracotta | `#CA5532` | Research progress and detail accents |
| Wine | `#4F2332` | Contact background and science accents |
| Mauve | `#A17895` | Neural illustration and science accents |

The original **assets/logo.svg** appears in the header, footer and browser tab. A white backing keeps the supplied artwork visible on navy. **assets/pitch-wallpaper.png** is the original supplied wallpaper, with a navy overlay behind the opening section so the text remains readable. The neural illustration uses the palette too.

## Editing and publishing

- Edit page content and team details in **index.html**.
- Edit colors and layout in **styles.css**. The presentation colors are defined at the top.
- The current contact address is **hybrain.tech@gmail.com**. Update both **index.html** and **script.js** if it changes.
- The contact panel opens a draft in the visitor’s email app. The site does not send or store messages itself.
- The site has no external fonts, trackers, cookies or third-party scripts.
- Local edits do not publish automatically. Commit and push them when ready using your normal GitHub workflow.
- In GitHub Pages, use the **main** branch and repository root as the publishing source. The **.nojekyll** file keeps this a plain static site.
- All asset paths are relative and work on GitHub Pages and a future custom domain.

Official setup references: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
