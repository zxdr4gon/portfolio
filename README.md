# Zain's Portfolio

A responsive personal portfolio built with HTML, Tailwind CSS via CDN, and vanilla JavaScript. It is deployed as a static GitHub Pages site and does not require a build step.

## Files

- `index.html` — page structure and visual design.
- `config.js` — personal information, theme presets, links, and project content.
- `app.js` — applies the theme and renders content from the configuration.
- `images/` — project screenshots and favicon.
- `app_test.js`, `config_test.js`, `test.html` — existing test/experimentation files; the deployed homepage uses `index.html`.

## Update portfolio content

Most personal changes should be made in `config.js`, not in the HTML.

- Edit `name`, `shortName`, `pageTitle`, and `description`.
- Update the hero role, headline, and bio.
- Edit the About and Contact section text.
- Add or remove entries in `socials`.
- Update the `projects` array to add, remove, or reorder cards.
- Place project screenshots in `images/` and use their relative paths, such as `images/vectorboard.png`.

Project entries support a title, description, category, live URL, screenshot path, image alt text, and technology tags. Keep descriptions specific and concise. Only use links that actually point to the intended project.

## Themes

Change `selectedTheme` in `config.js`. Available presets:

- `cyberpunk`
- `sunsetGlow`
- `matchaStudio`
- `espressoBar`
- `editorialPaper`
- `nordicMist`
- `emeraldNight`
- `regalGold` (current default)
- `velvetRose`
- `sakuraBlossom`
- `custom`

Each palette defines seven colors: `canvas`, `surface`, `line`, `muted`, `accent`, `foreground`, and `selection`. To create a custom palette, edit the `custom` object and set `selectedTheme = "custom"`. You can also assign an object with all seven keys to `customTheme`.

## Preview and deployment

For local preview, open `index.html` in a modern browser. If local file restrictions prevent scripts from running, use VS Code's Live Server extension.

To deploy with GitHub Pages:

1. Commit the updated files to `main`.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, then select `main` and `/(root)`.
4. Save and wait for deployment.

The page loads Tailwind CSS and Google Fonts from online CDNs, so those parts of the design need an internet connection.

## Before publishing changes

- [ ] Check the theme on both desktop and mobile.
- [ ] Verify each project and social link.
- [ ] Confirm screenshots load and have accurate alt text.
- [ ] Check text contrast after changing theme colors.
