(() => {
  const data = window.PORTFOLIO;
  if (!data) return;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = value;
  };

  const setHref = (id, href) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute("href", href);
  };

  const setTitle = () => {
    const base = data.name ? `${data.name} — Portfolio` : "Portfolio";
    document.title = base;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", base);

    const desc = (data.about?.summary || "").trim();
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const metaDesc = document.querySelector('meta[name="description"]');

    const fallback = "Personal portfolio website";
    const summary = desc.length ? desc : fallback;

    if (ogDesc) ogDesc.setAttribute("content", summary);
    if (metaDesc) metaDesc.setAttribute("content", summary);
  };

  const initialsFromName = (name) => {
    const parts = (name || "")
      .split(/\s+/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (!parts.length) return "YN";
    const first = parts[0][0] || "Y";
    const last = (parts.length > 1 ? parts[parts.length - 1][0] : "N") || "N";
    return (first + last).toUpperCase();
  };

  const makeLinkChip = ({ label, url }) => {
    const a = document.createElement("a");
    a.className = "linkchip";

    let resolvedUrl = url;
    if (typeof url === "string" && url.startsWith("gh:")) {
      const suffix = url.slice("gh:".length);
      const base = (data.repoBaseUrl || "")
        .trim()
        .replace(/\.git$/, "")
        .replace(/\/+$/, "");
      if (base) {
        resolvedUrl = `${base}${suffix.startsWith("/") ? "" : "/"}${suffix}`;
      } else {
        resolvedUrl = "#";
        a.classList.add("is-disabled");
        a.setAttribute("aria-disabled", "true");
        a.title = "Set PORTFOLIO.repoBaseUrl in content.js to enable this link.";
      }
    }

    a.href = resolvedUrl;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = label;
    return a;
  };

  const makeTag = (text) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = text;
    return span;
  };

  const renderMetaPills = () => {
    const holder = document.getElementById("heroMeta");
    if (!holder) return;
    holder.innerHTML = "";

    const items = data.about?.metaPills || [];
    for (const item of items) {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = item;
      holder.appendChild(pill);
    }
  };

  const renderSocials = () => {
    const profileLinks = document.getElementById("profileLinks");
    const contactLinks = document.getElementById("contactLinks");
    if (profileLinks) profileLinks.innerHTML = "";
    if (contactLinks) contactLinks.innerHTML = "";

    const socials = data.socials || [];
    for (const s of socials) {
      const chip = makeLinkChip(s);
      if (profileLinks) profileLinks.appendChild(chip.cloneNode(true));
      if (contactLinks) contactLinks.appendChild(chip);
    }
  };

  const renderProjects = () => {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    for (const project of data.projects || []) {
      const card = document.createElement("article");
      card.className = "card reveal";
      card.setAttribute("role", "listitem");

      const inner = document.createElement("div");
      inner.className = "card__inner";

      const title = document.createElement("h3");
      title.className = "card__title";
      title.textContent = project.name;

      const desc = document.createElement("p");
      desc.className = "card__desc";
      desc.textContent = project.description;

      const meta = document.createElement("div");
      meta.className = "card__meta";
      for (const t of project.tech || []) meta.appendChild(makeTag(t));

      const role = document.createElement("p");
      role.className = "card__role";
      role.textContent = project.role || "";

      const links = document.createElement("div");
      links.className = "card__links";
      for (const l of project.links || []) links.appendChild(makeLinkChip(l));

      inner.appendChild(title);
      inner.appendChild(desc);
      inner.appendChild(meta);
      if (project.role) inner.appendChild(role);
      inner.appendChild(links);
      card.appendChild(inner);
      grid.appendChild(card);
    }
  };

  const renderSkills = () => {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const entries = Object.entries(data.skills || {});
    for (const [group, items] of entries) {
      const box = document.createElement("div");
      box.className = "skillbox reveal";

      const title = document.createElement("h3");
      title.className = "skillbox__title";
      title.textContent = group;

      const list = document.createElement("div");
      list.className = "skillbox__items";
      for (const item of items || []) list.appendChild(makeTag(item));

      box.appendChild(title);
      box.appendChild(list);
      grid.appendChild(box);
    }
  };

  const renderActivities = () => {
    const timeline = document.getElementById("activitiesTimeline");
    if (!timeline) return;
    timeline.innerHTML = "";

    for (const a of data.activities || []) {
      const event = document.createElement("div");
      event.className = "event reveal";

      const top = document.createElement("div");
      top.className = "event__top";

      const title = document.createElement("h3");
      title.className = "event__title";
      title.textContent = a.title;

      const dates = document.createElement("div");
      dates.className = "event__date";
      dates.textContent = a.dates || "";

      top.appendChild(title);
      top.appendChild(dates);

      const org = document.createElement("div");
      org.className = "event__org";
      org.textContent = a.org;

      const ul = document.createElement("ul");
      ul.className = "event__bullets";
      for (const b of a.bullets || []) {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
      }

      event.appendChild(top);
      event.appendChild(org);
      if ((a.bullets || []).length) event.appendChild(ul);
      timeline.appendChild(event);
    }
  };

  const wireEmail = () => {
    const email = data.email || "";
    setText("contactEmail", email);
    setHref("contactEmail", `mailto:${email}`);
    setHref("contactPrimary", `mailto:${email}`);
  };

  const wireCvButtons = () => {
    const path = data.cv?.path || "assets/cv.pdf";
    const label = data.cv?.label || "Download CV";

    const absolute = (() => {
      try {
        return new URL(path, document.baseURI).toString();
      } catch {
        return path;
      }
    })();

    const ids = ["cvBtnTop", "cvBtnHero", "cvBtnBottom"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      el.setAttribute("href", absolute);
      el.textContent = label;
    }
  };

  const navActive = () => {
    const links = Array.from(document.querySelectorAll(".nav__link"));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const setCurrent = (id) => {
      for (const a of links) {
        const href = a.getAttribute("href");
        a.removeAttribute("aria-current");
        if (href === `#${id}`) a.setAttribute("aria-current", "page");
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) setCurrent(visible[0].target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5] }
    );

    for (const sec of sections) obs.observe(sec);
  };

  const revealOnScroll = () => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.12 }
    );

    for (const n of nodes) obs.observe(n);
  };

  const hydrate = () => {
    setTitle();

    setText("brandName", data.name);
    setText("heroEyebrow", data.title);
    setText("heroTitle", data.about?.headline || "");
    setText("heroSummary", data.about?.summary || "");

    setText("profileInitials", initialsFromName(data.name));
    setText("profileName", data.name);
    setText("profileRole", data.roleLine || "");
    setText("profileLocation", data.location || "");

    setText("footerName", data.name);
    setText("footerYear", String(new Date().getFullYear()));

    renderMetaPills();
    renderSocials();
    renderProjects();
    renderSkills();
    renderActivities();

    wireEmail();
    wireCvButtons();

    navActive();
    revealOnScroll();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hydrate);
  } else {
    hydrate();
  }
})();
