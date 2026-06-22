/* =========================================================================
   Academic template — logic
   Loads config/config.yaml and builds a single-column page. You normally
   don't need to edit this file: all content lives in the YAML.
   ========================================================================= */

(() => {
  "use strict";

  const LINK_LABELS = {
    email: "Email", scholar: "Scholar", googlescholar: "Scholar",
    "google-scholar": "Scholar", orcid: "ORCID", github: "GitHub",
    gitlab: "GitLab", linkedin: "LinkedIn", twitter: "X", x: "X",
    bluesky: "Bluesky", mastodon: "Mastodon", researchgate: "ResearchGate",
    arxiv: "arXiv", "semantic-scholar": "Semantic Scholar", dblp: "DBLP",
    inspire: "INSPIRE", youtube: "YouTube", website: "Website", web: "Website",
    cv: "CV",
  };

  const DEFAULT_NEWS_PALETTE = {
    0: "#8ac926", // years …0/5  (green)
    1: "#3b9ae1", // years …1/6  (blue)
    2: "#9b72aa", // years …2/7  (purple)
    3: "#fb6962", // years …3/8  (red)
    4: "#f6c026", // years …4/9  (yellow)
  };

  const SVG = {
    moon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  };

  const ICON_PATHS = {
    "arxiv": "M3.8423 0a1.0037 1.0037 0 0 0-.922.6078c-.1536.3687-.0438.6275.2938 1.1113l6.9185 8.3597-1.0223 1.1058a1.0393 1.0393 0 0 0 .003 1.4229l1.2292 1.3135-5.4391 6.4444c-.2803.299-.4538.823-.2971 1.1986a1.0253 1.0253 0 0 0 .9585.635.9133.9133 0 0 0 .6891-.3405l5.783-6.126 7.4902 8.0051a.8527.8527 0 0 0 .6835.2597.9575.9575 0 0 0 .8777-.6138c.1577-.377-.017-.7502-.306-1.1407l-7.0518-8.3418 1.0632-1.13a.9626.9626 0 0 0 .0089-1.3165L4.6336.4639s-.3733-.4535-.768-.463zm0 .272h.0166c.2179.0052.4874.2715.5644.3639l.005.006.0052.0055 10.169 10.9905a.6915.6915 0 0 1-.0072.945l-1.0666 1.133-1.4982-1.7724-8.5994-10.39c-.3286-.472-.352-.6183-.2592-.841a.7307.7307 0 0 1 .6704-.4401Zm14.341 1.5701a.877.877 0 0 0-.6554.2418l-5.6962 6.1584 1.6944 1.8319 5.3089-6.5138c.3251-.4335.479-.6603.3247-1.0292a1.1205 1.1205 0 0 0-.9763-.689zm-7.6557 12.2823 1.3186 1.4135-5.7864 6.1295a.6494.6494 0 0 1-.4959.26.7516.7516 0 0 1-.706-.4669c-.1119-.2682.0359-.6864.2442-.9083l.0051-.0055.0047-.0055z",
    "bluesky": "M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026",
    "cv": "M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 1.6V8h4.4L12 3.6zM8 12h8v1.6H8V12zm0 3.2h8v1.6H8v-1.6z",
    "dblp": "M3.075.002c-.096.013-.154.092-.094.31L4.97 7.73 3.1 8.6s-.56.26-.4.85l2.45 9.159s.16.59.72.33l6.169-2.869 1.3-.61s.52-.24.42-.79l-.01-.06-1.13-4.22-.658-2.45-.672-2.49v-.04s-.16-.59-.84-1L3.5.141s-.265-.16-.425-.139zM18.324 5.03a.724.724 0 0 0-.193.06l-5.602 2.6.862 3.2 1.09 4.08.01.06c.05.47-.411.79-.411.79l-1.88.87.5 1.89.04.1c.07.17.28.6.81.91l6.95 4.269s.68.41.52-.17l-1.981-7.4 1.861-.86s.56-.26.4-.85L18.85 5.42s-.116-.452-.526-.39z",
    "email": "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.2V18h18V7.2l-9 6-9-6zM4.5 6l7.5 5 7.5-5H4.5z",
    "github": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    "gitlab": "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z",
    "inspire": "M0 0v24h24V0H0zm3.873 3.6875c1.0359-.0008 1.8758.8391 1.875 1.875-.0003 1.035-.8399 1.8738-1.875 1.873C2.8387 7.4352 2.0003 6.5968 2 5.5625c-.0008-1.035.838-1.8747 1.873-1.875zm4.4903.5078h3.5312l6.7344 10.8125h.045V4.1953H22v16.1172h-3.5469l-6.7168-10.791h-.0468v10.791H8.3633V4.1953zm-6.123 4.7871s.013.0041 3.3886 0v11.2754H2.2402V8.9824z",
    "linkedin": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
    "mastodon": "M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z",
    "orcid": "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z",
    "researchgate": "M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z",
    "scholar": "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
    "semantic-scholar": "M24 8.609c-.848.536-1.436.83-2.146 1.245-4.152 2.509-8.15 5.295-11.247 8.981l-1.488 1.817-4.568-7.268c1.021.814 3.564 3.098 4.603 3.599l3.356-2.526c2.336-1.644 8.946-5.226 11.49-5.848ZM8.046 15.201c.346.277.692.537.969.744.761-3.668.121-7.613-1.886-11.039 3.374-.052 6.731-.087 10.105-.139a14.794 14.794 0 0 1 1.298 5.295c.294-.156.588-.294.883-.433-.104-1.868-.641-3.91-1.662-6.263-4.602-.018-9.188-.018-13.79-.018 2.993 3.547 4.36 7.839 4.083 11.853Zm-.623-.484c.087.086.191.155.277.225-.138-3.409-1.419-6.887-3.824-9.881H1.73c3.098 2.855 4.984 6.299 5.693 9.656Zm-.744-.658c.104.087.208.173.329.277-.9-2.526-2.492-5.018-4.741-7.198H0c2.89 2.076 5.122 4.481 6.679 6.921Z",
    "twitter": "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
    "website": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.6 0 3.4 2.5 3.9 6H8.1C8.6 8.5 10.4 6 12 6zm-5.9 6h2.2c-.1 1.3-.1 2.7 0 4H6.1a8 8 0 0 1 0-4zm1.9 6h1.9c.4 2 1 3.4 1.6 4.2A8 8 0 0 1 8 18zm4 4.2c-.6-.8-1.2-2.2-1.6-4.2h3.2c-.4 2-1 3.4-1.6 4.2zM13.9 18h1.9a8 8 0 0 1-3.5 4.2c.6-.8 1.2-2.2 1.6-4.2zm.2-2c.1-1.3.1-2.7 0-4h2.2a8 8 0 0 1 0 4h-2.2zm1.4-6a8 8 0 0 0-3.5-4.2c.6.8 1.2 2.2 1.6 4.2h1.9zM10.1 4.8C9.5 5.6 8.9 7 8.5 9H6.6a8 8 0 0 1 3.5-4.2z",
    "x": "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
    "youtube": "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  };
  ICON_PATHS.web = ICON_PATHS.website;
  ICON_PATHS.googlescholar = ICON_PATHS.scholar;
  function svgIcon(type) {
    const d = ICON_PATHS[type] || ICON_PATHS.website;
    return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;
  }

  const $ = (id) => document.getElementById(id);
  const el = (tag, cls) => { const n = document.createElement(tag); if (cls) n.className = cls; return n; };
  const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* Inline formatting: **bold**, *italic*, ~~strike~~, [text](url|mailto) */
  function inlineFmt(s) {
    let out = esc(s);
    out = out.replace(/\[([^\]]+)\]\(((?:https?|mailto):[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    out = out.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    out = out.replace(/~~([^~]+)~~/g, "<s>$1</s>");
    out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    out = out.replace(/\s*\n\s*/g, " ");
    return out;
  }

  /* ============================================================== THEME */
  const MEM = {}; // overridden in the embedded preview
  function initTheme(preferred) {
    let theme = (typeof localStorage !== "undefined" && localStorage.getItem("theme")) || MEM.theme || preferred || "auto";
    if (theme === "auto") theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(theme);
    $("theme-toggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch (e) {}
      MEM.theme = next;
      applyTheme(next);
    });
  }
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    $("theme-toggle").innerHTML = theme === "dark" ? SVG.sun : SVG.moon;
  }

  /* ============================================================ HELPERS */
  function sectionLabel(cfg, key, fallback) {
    const d = el("div", "section-label");
    d.textContent = (cfg.labels && cfg.labels[key]) || fallback;
    return d;
  }
  function newsColor(year, cfg) {
    const pal = cfg.site && cfg.site.news_palette;
    const idx = ((year % 5) + 5) % 5;
    if (Array.isArray(pal) && pal[idx]) return pal[idx];
    return DEFAULT_NEWS_PALETTE[idx];
  }

  /* ============================================================ RENDER */
  function renderHeader(cfg) {
    const p = cfg.profile || {};
    const h = $("profile-header");

    if (p.photo) {
      const img = el("img", "avatar");
      img.src = p.photo;
      img.alt = p.name ? `Photo of ${p.name}` : "Profile photo";
      h.appendChild(img);
    }

    const id = el("div", "identity");
    const name = el("h1", "name");
    name.textContent = p.name || "Your Name";
    id.appendChild(name);

    if (p.role) {
      const r = el("p", "role");
      r.innerHTML = inlineFmt(p.role);
      id.appendChild(r);
    }

    const links = [];
    if (p.email) links.push({ type: "email", url: `mailto:${p.email}` });
    (Array.isArray(p.links) ? p.links : []).forEach((l) => { if (l && l.url) links.push(l); });
    if (cfg.cv && cfg.cv.file) links.push({ type: "cv", url: cfg.cv.file });

    if (links.length) {
      const box = el("nav", "links");
      box.setAttribute("aria-label", "Profile links");
      links.forEach((l) => {
        const a = el("a");
        a.href = l.url;
        const label = l.label || LINK_LABELS[l.type] || (l.type ? cap(l.type) : "Link");
        a.setAttribute("aria-label", label);
        a.title = label;
        a.innerHTML = svgIcon(l.type);
        if (l.type !== "email") { a.target = "_blank"; a.rel = "noopener"; }
        box.appendChild(a);
      });
      id.appendChild(box);
    }
    h.appendChild(id);

    // research tags
    const tagsBox = $("tags");
    const research = Array.isArray(p.research) ? p.research : [];
    if (research.length) {
      research.forEach((t) => { if (!t) return; const s = el("span", "tag"); s.textContent = t; tagsBox.appendChild(s); });
    } else {
      tagsBox.remove();
    }
  }

  function renderAbout(cfg) {
    const p = cfg.profile || {};
    const box = $("about");
    const blocks = [];
    if (p.bio) blocks.push(p.bio);
    if (p.supervisor) blocks.push(p.supervisor);
    let contact = p.contact;
    if (!contact && p.email) contact = `Feel free to reach out by email at [${p.email}](mailto:${p.email}).`;
    if (contact) blocks.push(contact);

    if (!blocks.length) { box.remove(); return; }
    blocks.forEach((text) => {
      String(text).trim().split(/\n\s*\n/).forEach((para) => {
        const pEl = el("p");
        pEl.innerHTML = inlineFmt(para.replace(/\s*\n\s*/g, " ").trim());
        box.appendChild(pEl);
      });
    });
  }

  function renderNews(cfg) {
    const sec = $("news");
    const items = Array.isArray(cfg.news) ? cfg.news.slice() : [];
    if (!items.length) { sec.remove(); return; }
    sec.appendChild(sectionLabel(cfg, "news", "News"));

    const key = (d) => { const m = String(d || "").match(/(\d{1,2})\s*\/\s*(\d{4})/); return m ? parseInt(m[2], 10) * 12 + parseInt(m[1], 10) : 0; };
    items.sort((a, b) => key(b.date) - key(a.date));

    const list = el("div", "news-list");
    items.forEach((n) => {
      const item = el("div", "news-item");
      const ym = String(n.date || "").match(/(\d{4})/);
      const year = ym ? parseInt(ym[1], 10) : new Date().getFullYear();
      const badge = el("span", "news-date");
      badge.textContent = n.date || "";
      badge.style.setProperty("--news-color", newsColor(year, cfg));
      item.appendChild(badge);
      const txt = el("p", "news-text");
      txt.innerHTML = inlineFmt(n.text || "");
      item.appendChild(txt);
      list.appendChild(item);
    });
    sec.appendChild(list);
  }

  function renderPublications(cfg) {
    const sec = $("publications");
    const pubs = Array.isArray(cfg.publications) ? cfg.publications : [];
    if (!pubs.length) { sec.remove(); return; }
    sec.appendChild(sectionLabel(cfg, "publications", "Publications"));

    const list = el("div", "pub-list");
    pubs.forEach((pub) => {
      const item = el("article", "pub");

      const title = el("h3", "pub-title");
      if (pub.url) {
        const a = el("a"); a.href = pub.url; a.target = "_blank"; a.rel = "noopener";
        a.textContent = pub.title || "Untitled"; title.appendChild(a);
      } else {
        title.textContent = pub.title || "Untitled";
      }
      item.appendChild(title);

      if (pub.authors) { const au = el("p", "pub-authors"); au.innerHTML = inlineFmt(pub.authors); item.appendChild(au); }

      const venueYear = [pub.venue, pub.year].filter(Boolean).join(" ");
      if (venueYear) { const v = el("p", "pub-venue"); v.textContent = venueYear; item.appendChild(v); }

      if (Array.isArray(pub.links) && pub.links.length) {
        const box = el("div", "pub-links");
        pub.links.forEach((l) => {
          if (!l || !l.url) return;
          const a = el("a"); a.href = l.url; a.target = "_blank"; a.rel = "noopener";
          a.textContent = `[${l.label || "link"}]`;
          box.appendChild(a);
        });
        item.appendChild(box);
      }
      list.appendChild(item);
    });
    sec.appendChild(list);
  }

  function renderTeaching(cfg) {
    const sec = $("teaching");
    const courses = Array.isArray(cfg.teaching) ? cfg.teaching : [];
    if (!courses.length) { sec.remove(); return; }
    sec.appendChild(sectionLabel(cfg, "teaching", "Teaching"));

    courses.forEach((c) => {
      const row = el("div", "course");

      if (c.logo) {
        const img = el("img", "course-logo");
        img.src = c.logo;
        img.alt = c.institution ? `${c.institution} logo` : "Logo";
        row.appendChild(img);
      }

      const main = el("div", "course-main");

      const t = el("p", "course-title");
      if (c.url) { const a = el("a"); a.href = c.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = c.course || "Course"; t.appendChild(a); }
      else t.textContent = c.course || "Course";
      main.appendChild(t);

      const sub = [c.role, c.institution].filter(Boolean).join(" · ");
      if (sub) { const s = el("p", "course-sub"); s.textContent = sub; main.appendChild(s); }
      if (c.description) { const d = el("p", "course-sub"); d.style.marginTop = "0.3rem"; d.innerHTML = inlineFmt(c.description); main.appendChild(d); }
      row.appendChild(main);

      if (c.term) { const term = el("div", "course-term"); term.textContent = c.term; row.appendChild(term); }
      sec.appendChild(row);
    });
  }

  function renderFooter(cfg) {
    if (cfg.footer) $("page-foot").innerHTML = esc(cfg.footer).replace(/\n/g, "<br>");
    else $("page-foot").remove();
  }

  /* ============================================================== START */
  async function start() {
    let cfg;
    try {
      const res = await fetch("config/config.yaml", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      cfg = jsyaml.load(await res.text()) || {};
    } catch (err) {
      $("boot").hidden = true;
      const box = $("boot-error");
      box.hidden = false;
      box.innerHTML =
        "<strong>Could not load config/config.yaml.</strong><br>" +
        "Open the site through a web server (GitHub Pages, or locally with " +
        "<code>python3 -m http.server</code>) rather than by double-clicking the file.<br><br>" +
        `<small>Details: ${esc(err.message)}</small>`;
      return;
    }

    document.title = (cfg.site && cfg.site.title) || (cfg.profile && cfg.profile.name) || "Academic website";
    if (cfg.site && cfg.site.accent) document.documentElement.style.setProperty("--accent-base", cfg.site.accent);

    initTheme((cfg.site && cfg.site.default_theme) || "auto");

    renderHeader(cfg);
    renderAbout(cfg);
    renderNews(cfg);
    renderPublications(cfg);
    renderTeaching(cfg);
    renderFooter(cfg);

    $("boot").hidden = true;
    $("app").hidden = false;
  }

  document.addEventListener("DOMContentLoaded", start);
})();
