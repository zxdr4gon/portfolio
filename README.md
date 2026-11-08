# Zain's Portfolio

A responsive personal portfolio built with plain HTML, CSS, and vanilla JavaScript. It is deployed as a static GitHub Pages site, does not require a build step, and can be installed on a phone or desktop as an app (PWA) that also works offline.

## Files

- `index.html` — page structure.
- `styles.css` — visual design.
- `config.js` — personal information, theme presets, links, and project content.
- `theme.js` — applies the theme colors before the page paints and powers the light/dark toggle.
- `app.js` — renders content from the configuration, plus filters, toasts, install button, and other interactions.
- `sw.js` — service worker for offline support.
- `manifest.webmanifest` — app name, icons, and colors used when the site is installed.
- `icons/` — app icons, favicon, and the link-preview image.
- `images/` — project screenshots (`.webp` files are the ones the site loads; the `.png` files are the originals).
- `app_test.js`, `config_test.js`, `test.html` — existing test/experimentation files; the deployed homepage uses `index.html`.

## Update portfolio content

Most personal changes should be made in `config.js`, not in the HTML.

- Edit `name`, `shortName`, `pageTitle`, and `description`.
- Update the hero role, headline, and bio.
- Edit the About and Contact section text.
- Add or remove entries in `socials`.
- Update the `projects` array to add, remove, or reorder cards.
- Place project screenshots in `images/` and use their relative paths, such as `images/vectorboard.webp`. WebP files around 1200px wide (plus an optional ~640px `imageSmall` copy) keep the page fast; PNG and JPG also work.

Project entries support a title, description, category, live URL, optional source-code URL, screenshot path, optional smaller phone-sized screenshot, image alt text, and technology tags. Tags automatically become filter buttons above the project grid. Keep descriptions specific and concise. Only use links that actually point to the intended project.

## Themes

Change `selectedTheme` in `config.js`. Available presets:

- `cyberpunk`
- `sunsetGlow`
- `matchaStudio`
- `espressoBar`
- `editorialPaper`
- `nordicMist` (current default)
- `nordicNight` (current dark-mode theme)
- `emeraldNight`
- `regalGold`
- `velvetRose`
- `sakuraBlossom`
- `custom`

Each palette defines seven colors: `canvas`, `surface`, `line`, `muted`, `accent`, `foreground`, and `selection`. `selectedDarkTheme` sets a second palette for dark mode. Visitors get a sun/moon toggle in the header, and the site follows their device's light/dark setting until they pick one. Set it to `null` to always use `selectedTheme`.

To create a custom palette, edit the `custom` object and set `selectedTheme = "custom"`. You can also assign an object with all seven keys to `customTheme`.

## Preview and deployment

For local preview, run a local server from this folder, such as VS Code's Live Server extension or `python -m http.server`, then open the address it prints. Opening `index.html` directly also works, but offline support and installing need a server.

To deploy with GitHub Pages:

1. Commit the updated files to `main`.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, then select `main` and `/(root)`.
4. Save and wait for deployment.

The fonts come from Google Fonts. After the first visit, the service worker caches them along with the rest of the site, so it keeps working offline.

## Installing as an app

Once the site is live on GitHub Pages (HTTPS is required):

- **Android / Chrome / Edge:** tap the small **Install app** link in the footer, or use the browser menu → *Install app*.
- **iPhone / iPad (Safari):** tap **Share → Add to Home Screen**. Tapping the footer link on iPhone shows this tip.

The installed app opens full-screen with a bottom tab bar. Long-pressing its icon on Android shows shortcuts to Projects and Contact.

Notes for updates:

- Edits to `config.js`, `index.html`, `styles.css`, and the scripts appear on the next visit; the service worker always checks the network first.
- Images are cached once. If you replace a screenshot with a new version but keep the same filename, change `VERSION` in `sw.js` (for example `"v2"`) so returning visitors get the new one.
- The installed app's splash colors live in `manifest.webmanifest` (`background_color`, `theme_color`). Update them if you change `selectedTheme`.
- Link previews use `icons/og-image.jpg` and the `og:` tags in `index.html`. Those tags have the site's address and title written in directly, so update them if the URL or title changes.

## Before publishing changes

- [ ] Check both the light and dark theme on desktop and mobile.
- [ ] Verify each project and social link.
- [ ] Confirm screenshots load and have accurate alt text.
- [ ] Check text contrast after changing theme colors.
