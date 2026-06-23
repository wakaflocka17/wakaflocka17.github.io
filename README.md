<div align="center">

# WK Academic Website

A clean, fast, **single-page** academic website driven entirely by one
`config/config.yaml`. No build step and no framework: just static HTML, CSS and a
little JavaScript, ready for GitHub Pages.

**🌐 Live:** <https://francescocongiu.com>

[![License: MIT](https://img.shields.io/github/license/wakaflocka17/wakaflocka17.github.io?style=flat-square&color=4f46e5)](LICENSE)
[![Stars](https://img.shields.io/github/stars/wakaflocka17/wakaflocka17.github.io?style=flat-square&color=success)](https://github.com/wakaflocka17/wakaflocka17.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/wakaflocka17/wakaflocka17.github.io?style=flat-square&color=9b72aa)](https://github.com/wakaflocka17/wakaflocka17.github.io/network/members)
[![Last commit](https://img.shields.io/github/last-commit/wakaflocka17/wakaflocka17.github.io?style=flat-square)](https://github.com/wakaflocka17/wakaflocka17.github.io/commits)
[![Repo size](https://img.shields.io/github/repo-size/wakaflocka17/wakaflocka17.github.io?style=flat-square)](https://github.com/wakaflocka17/wakaflocka17.github.io)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffrancescocongiu.com&style=flat-square&up_message=online&down_message=offline&label=francescocongiu.com)](https://francescocongiu.com)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

</div>

---

## Table of contents

- [Community](#community)
- [Features](#features)
- [Project structure](#project-structure)
- [Customizing](#customizing)
- [Supervision status (FILLED / OPEN)](#supervision-status-filled--open)
- [Local preview](#local-preview)
- [Publishing on GitHub Pages](#publishing-on-github-pages)
- [Custom domain](#custom-domain)
- [Reusing / forking this template](#reusing--forking-this-template)
- [A note on Google Scholar](#a-note-on-google-scholar)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Community

Sites built with this template. Feel free to add yours by opening a pull request
that adds a `★` link to the table below!

<table>
<tr>
<td>Sites</td>
<td>
<a href="https://francescocongiu.com" target="_blank">★</a>
</td>
</tr>
</table>

## Features

- **One file to edit**: all content lives in `config/config.yaml`.
- **Light / dark mode** with a system-aware toggle.
- **Single-column, responsive** layout (Inter + JetBrains Mono).
- **Icon links** auto-selected from each link `type`; automatic `mailto:`.
- **News** with year-colored badges, auto-sorted newest-first.
- **Publications** with monospace venues and `[PDF]` / `[Code]` links.
- **Teaching** entries with round institution logos.
- **Custom sections** with a colored **status badge** (OPEN / FILLED),
  **copy-to-clipboard** boxes, and an optional **slide-in side panel**.
- **SEO ready**: meta description, Open Graph & Twitter cards, favicon.

## Project structure

```
.
├── index.html                  # the page (no need to edit it)
├── CNAME                       # custom domain (francescocongiu.com)
├── .nojekyll                   # tells GitHub Pages not to run Jekyll
├── .gitignore
├── LICENSE                     # MIT
├── README.md
├── config/
│   ├── config.yaml             # edit ALL your content here
│   ├── style.css               # styles (colors, layout, components)
│   ├── app.js                  # logic (config loading, theme, rendering)
│   └── js-yaml.min.js          # bundled YAML parser
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # your photo (shown round)
│   │   ├── unica.png           # round logo used by a course
│   │   └── favicon.png         # browser-tab icon
│   └── pdf/
│       └── cv.pdf              # your CV (path set in config.cv.file)
└── notes/
    └── prospective-students.md # ready-to-swap FILLED / OPEN blocks
```

## Customizing

1. Open `config/config.yaml` and replace the sample content: name, role, bio,
   supervisor, contact, research areas, links, news, publications, courses.
2. Replace `assets/images/profile.jpg` with your photo.
3. Replace the CV under `assets/pdf/` and point `cv.file` to it.
4. Replace `assets/images/unica.png` with the official university logo (any
   square image works — it is shown round). Reference it in a course with
   `logo: "assets/images/unica.png"`.
5. Replace `assets/images/favicon.png` with your own tab icon.

Under `site` you can set:
- `title`: the browser-tab / search-result title;
- `description`: the meta description for search engines and social cards;
- `favicon`: path to the tab icon;
- `accent`: the accent color (any hex code);
- `url`: your live URL (optional; enables the canonical and social-card image).

Link icons are picked automatically from each link `type` (email, scholar,
orcid, github, linkedin, x, gitlab, website, …). The CV link is added
automatically from `cv.file`. Put your email as a **plain address**
(`name@example.com`); the `mailto:` link is built for you.

In text fields you can use `**bold**`, `*italic*`, `~~strikethrough~~` and
`[text](https://link)`. News badges are colored by year and can be customized
with `site.news_palette`.

**Custom sections.** Add free-form sections after Teaching via `sections:`
(each with a `label` and a `body`). In a body, a blank line starts a new
paragraph, `- ` / `1.` start bullet / numbered lists, and a fenced
```` ``` ```` code block becomes a one-click **copy box**. A section may also
declare a `status:` (rendered as a colored badge) and `drawer: true` (shown via
a side tab that slides open a panel).

## Supervision status (FILLED / OPEN)

The "Prospective Students" section has two ready-made variants saved in
[`notes/prospective-students.md`](notes/prospective-students.md): one for when
you are **FILLED** (amber badge) and one for when a slot is **OPEN** (green
badge, with a copy-paste application subject line). To switch, copy the relevant
block over the `sections:` block in `config/config.yaml`, then commit.

## Local preview

The site loads `config.yaml` via `fetch`, so it does **not** work by
double-clicking `index.html`. Start a small local server from this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

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

## Custom domain

Put your domain in the `CNAME` file (one line, e.g. `example.com`). In this copy
it is set to `francescocongiu.com`. Then in **Settings → Pages → Custom domain**
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

Google Scholar has no public API and can't be read reliably from a static site,
so publications are listed in `config.yaml`. If you later want automation, a
GitHub Action can periodically scrape and rewrite the list.

## Acknowledgments

This site is hand-built, but it relies on great open-source work and takes
inspiration from the academic homepage community:

- **[js-yaml](https://github.com/nodeca/js-yaml)** — bundled YAML parser.
- **[Inter](https://rsms.me/inter/)** & **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** — typefaces, served via Google Fonts.
- **[Simple Icons](https://simpleicons.org/)** — source of the brand icon paths.
- **[Shields.io](https://shields.io/)** — the status/stats badges above.
- Design and structure inspired by several academic homepages, in particular:
  the colored **News** badges from **[Timothy Gebhard's site](https://timothygebhard.de/)**,
  **[al-folio](https://alshedivat.github.io/al-folio/)**, and
  **[Alessandro Soccol's homepage](https://github.com/alessandrosocc/alessandrosocc.github.io)**.

## License

Released under the **[MIT License](LICENSE)** — © 2026 Francesco Congiu.
You are free to use, modify and share it; please keep the copyright notice.
