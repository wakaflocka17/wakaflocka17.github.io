# Personal academic website

A minimal, single-page academic template. Light/dark toggle, icon links,
colored News badges, and **all content managed from one file**:
`config/config.yaml`. You normally only edit the YAML and replace a few assets.

## Structure

```
.
├── index.html              # the page (no need to edit it)
├── CNAME                   # custom domain (francescocongiu.com)
├── .nojekyll               # tells GitHub Pages not to run Jekyll
├── .gitignore              # ignored files (OS/editor cruft, node_modules)
├── LICENSE                 # MIT license
├── config/
│   ├── config.yaml         # 👈 edit ALL your content here
│   ├── style.css           # styles (colors, layout)
│   ├── app.js              # logic (loads config, theme, rendering)
│   └── js-yaml.min.js      # bundled YAML parser
└── assets/
    ├── images/
    │   ├── profile.jpg     # your photo (shown round)
    │   └── unica.png       # round logo for a course (replace placeholder)
    └── pdf/
        └── cv.pdf          # your CV
```

## Customizing

1. Open `config/config.yaml` and replace the sample content: name, role, bio,
   supervisor, contact, research areas, links, news, publications, courses.
2. Replace `assets/images/profile.jpg` with your photo.
3. Replace `assets/pdf/cv.pdf` with your CV.
4. Replace `assets/images/unica.png` with the official university logo (any
   square image works — it is shown round). Reference it in a course with
   `logo: "assets/images/unica.png"`.
5. To change the accent color, edit `accent` under `site`.

Under `site` you can also set:
- `title` — the browser-tab / search-result title;
- `description` — the meta description used by search engines and social cards;
- `favicon` — path to the small tab icon (e.g. `assets/images/favicon.png`);
- `url` — your live URL (optional; enables the canonical and social-card image).

Link icons are picked automatically from each link `type` (email, scholar,
orcid, github, linkedin, x, gitlab, website, …). The CV link is added
automatically from `cv.file`. Put your email as a plain address
(`name@example.com`); the `mailto:` link is built for you.

**Custom sections.** Add free-form sections after Teaching via `sections:`
(each with a `label` and a `body`). In a body, a blank line starts a new
paragraph and a line beginning with `- ` becomes a bullet.

In text fields you can use: `**bold**`, `*italic*`, `~~strikethrough~~` and
`[text](https://link)`. News badges are colored by year and can be customized
with `site.news_palette`.

## Local preview

The site loads `config.yaml` via `fetch`, so it does **not** work by
double-clicking `index.html`. Start a small local server from this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publishing on GitHub Pages

This template uses **relative paths**, so it works whether it's served from a
user-site root (`https://username.github.io`) or a project subpath
(`https://username.github.io/repo-name/`).

1. Create a new repository on GitHub and push these files:

   ```bash
   git init
   git add .
   git commit -m "Academic website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

2. **Settings → Pages → Source**: Deploy from a branch, `main`, `/ (root)`.

3. After the build the site is live — at the user-site root if the repo is named
   `username.github.io`, otherwise at `https://username.github.io/REPO/`.

## Custom domain (optional)

Put your domain in the `CNAME` file (one line, e.g. `example.com`). In this copy
it's set to `francescocongiu.com`. Then in **Settings → Pages → Custom domain**
confirm it and enable **Enforce HTTPS**. A given domain can be attached to only
one Pages site at a time.

For an apex domain, create four `A` records pointing to GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

and a `CNAME` DNS record for `www` → `username.github.io`.

## Reusing / forking this template

Make it a **template repository** (Settings → General → "Template repository")
to give people a *Use this template* button; being public, it can also be
forked. If you fork or reuse it:

- replace the content in `config/config.yaml` and the files in `assets/`;
- **delete or change the `CNAME` file** (it points to `francescocongiu.com`) and
  set your own domain, or remove it to use the default `*.github.io` URL.

## A note on Google Scholar

Google Scholar has no public API and can't be read reliably from a static site.
Publications are listed in `config.yaml`. If you later want automation, a GitHub
Action can periodically scrape and rewrite the list.
