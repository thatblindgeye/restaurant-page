"use strict";

const siteSettings = (() => {
  const saveToLocal = () => {
    localStorage.setItem(
      "current theme", document.documentElement.getAttribute("theme")
    );
  };

  return {
    saveToLocal
  };
})();

const siteTheme = (() => {
  const stylesheet = document.querySelector("#page-style");
  const themeContainer = document.querySelector(".theme-toggle-container");
  const themeToggle = document.querySelector(".theme-toggle-switch");

  const _loadTheme = () => {
    if (localStorage.getItem("current theme") === "light") {
      _setLightTheme();
    } else {
      _setDarkTheme();
    };
  };

  const _changeTheme = (e) => {
    if (themeContainer.getAttribute("aria-checked") === "true") {
      _setDarkTheme();
    } else {
      _setLightTheme();
    };
    siteSettings.saveToLocal();
  };

  const _setDarkTheme = () => {
    themeContainer.setAttribute("aria-checked", "false");
    document.documentElement.setAttribute("theme", "dark");
    themeToggle.style.left = "-2px";
  };

  const _setLightTheme = () => {
    themeContainer.setAttribute("aria-checked", "true");
    document.documentElement.setAttribute("theme", "light");
    themeToggle.style.left = "18px";
  };

  themeContainer.addEventListener("click", _changeTheme);
  themeContainer.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      _changeTheme();
    };
  });

  window.addEventListener("load", _loadTheme);
})();