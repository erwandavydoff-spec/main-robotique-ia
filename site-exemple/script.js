(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menu mobile
  const burger = $(".burger");
  const nav = $("#site-nav");
  const closeMenu = () => {
    if (!nav || !burger) return;
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeMenu();
    });
  }

  // Thème clair/sombre
  const themeToggle = $(".theme-toggle");
  const icon = $(".theme-toggle__icon");
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (icon) icon.textContent = theme === "light" ? "☀" : "☾";
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignorer si localStorage indisponible.
    }
  };

  const getPreferredTheme = () => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // ignore
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  // Formulaire de contact (mail via mailto)
  const form = $("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const to = "contact@mainrobotique.fr";
      const name = form.elements["name"]?.value?.trim() ?? "";
      const email = form.elements["email"]?.value?.trim() ?? "";
      const message = form.elements["message"]?.value?.trim() ?? "";

      const subject = "Message depuis le site - Main Robotique";
      const body = [
        "Bonjour,",
        "",
        "Je m'appelle " + name + ".",
        "Mon email : " + email,
        "",
        message,
        "",
        "— Envoyé depuis la page Contact"
      ].join("\n");

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`;
      window.location.href = mailto;
    });
  }
})();

