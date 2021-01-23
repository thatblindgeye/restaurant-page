"use strict";

import loadMainPage from "./load-page";
import loadHomeContents from "./home";

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
  const themeContainer = document.querySelector(".theme-toggle-container");
  const themeToggle = document.querySelector(".theme-toggle-switch");
  const footerImg = document.querySelector("footer img");

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
    themeToggle.style.left = "0";
    footerImg.setAttribute("src", 
        "images/github-logos/GitHub-Mark-Light-64px.png");
  };

  const _setLightTheme = () => {
    themeContainer.setAttribute("aria-checked", "true");
    document.documentElement.setAttribute("theme", "light");
    themeToggle.style.left = "16px";
    footerImg.setAttribute("src", 
        "images/github-logos/GitHub-Mark-64px.png");
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

const renderContent = (() => {
  const _mainContent = document.querySelector(".main-container");
  const logoBtn = document.querySelector(".logo");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact")

  const _clearContent = () => {
    Array.from(_mainContent.children).forEach(item => {
      _mainContent.removeChild(item);
    });
  };

  window.addEventListener("load", () => {
    // loadMainPage;
    // loadHomeContents();
  });

  logoBtn.addEventListener("click", () => {
    _clearContent();
    loadHomeContents();
  });

  menuBtn.addEventListener("click", () => {
    _clearContent();
  });

  contactBtn.addEventListener("click", () => {
    _clearContent();
  });
  
})();