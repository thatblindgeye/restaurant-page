"use strict";

const loadMainPage = () => {
  const contentContainer = document.getElementById("content");

  const headerTag = document.createElement("header");
  const accessibilityContain = document.createElement("div");
  accessibilityContain.id = "accessibility-container";
  accessibilityContain.tabIndex = "0";
  accessibilityContain.setAttribute("aria-labelledby", "accessibility-tab");

  const accessibilityContents = document.createElement("div");
  const skipLink = document.createElement("a");
  accessibilityContents.className = "accessibility-contents";
  skipLink.setAttribute("href", "#main");
  skipLink.className = "skip-link";
  skipLink.textContent = "Skip to main content";
  accessibilityContents.appendChild(skipLink);

  const themeContainer = document.createElement("div");
  themeContainer.className = "theme-toggle-container";
  themeContainer.setAttribute("role", "checkbox");
  themeContainer.setAttribute("aria-checked", "false");
  themeContainer.setAttribute("aria-label", "Toggle Light theme");
  themeContainer.tabIndex = "0";

  const themeTrack = document.createElement("div");
  themeTrack.className = "theme-toggle-track";

  const themeSwitch = document.createElement("span");
  const themeIcon = document.createElement("i");
  themeSwitch.className = "theme-toggle-switch";
  themeIcon.classList.add("material-icons", "md-18");
  themeIcon.textContent = "wb_sunny";
  themeSwitch.appendChild(themeIcon);

  themeContainer.appendChild(themeTrack);
  themeContainer.appendChild(themeSwitch);

  const accessibilityTab = document.createElement("div");
  const tabTextNode = document.createTextNode("Display & Accessibility")
  const tabSpan = document.createElement("span");
  const tabArrow = document.createElement("i");
  accessibilityTab.id = "accessibility-tab";
  tabArrow.className = "material-icons";
  tabArrow.textContent = "navigate_before";
  tabSpan.appendChild(tabArrow);
  accessibilityTab.appendChild(tabSpan);
  accessibilityTab.appendChild(tabTextNode);

  accessibilityContents.appendChild(themeContainer);
  accessibilityContents.appendChild(accessibilityTab);
  accessibilityContain.appendChild(accessibilityContents);

  const upperNav = document.createElement("nav");
  const logo = document.createElement("div");
  const logoText = document.createElement("button");
  const logoSpan = document.createElement("span");
  upperNav.className = "upper-nav";
  logo.className = "logo";
  logoText.setAttribute("href", "#");
  logoText.textContent = "The Jasmine ";
  logoSpan.textContent = "Dragon";
  logoText.appendChild(logoSpan);
  logo.appendChild(logoText);

  const navLinks = document.createElement("div");
  const linkList = document.createElement("ul");
  const link1 = document.createElement("li");
  const link1Contents = document.createElement("button");
  const link2 = document.createElement("li");
  const link2Contents = document.createElement("button");
  navLinks.className = "nav-links";
  link1Contents.setAttribute("href", "#");
  link1Contents.classList.add("link", "menu");
  link1Contents.textContent = "Menu";
  link2Contents.setAttribute("href", "#");
  link2Contents.classList.add("link", "contact");
  link2Contents.textContent = "Contact Us";

  link1.appendChild(link1Contents);
  link2.appendChild(link2Contents);
  linkList.appendChild(link1);
  linkList.appendChild(link2);
  navLinks.appendChild(linkList);

  upperNav.appendChild(logo);
  upperNav.appendChild(navLinks);
  headerTag.appendChild(accessibilityContain);
  headerTag.appendChild(upperNav);

  const mainTag = document.createElement("main");
  const mainContainer = document.createElement("div");
  mainTag.id = "main";
  mainContainer.className = "main-container";
  mainTag.appendChild(mainContainer);

  const footerTag = document.createElement("footer");
  const leftFoot = document.createElement("div");
  const copyright = document.createElement("small");
  leftFoot.className = "left-footer";
  copyright.id = "copyright";
  copyright.textContent = "© 2021 Zutara Inc.";

  const credit = document.createElement("p");
  const creditLink = document.createElement("a");
  credit.textContent = "Background image credit: ";
  creditLink.setAttribute("href", 
      "https://www.pexels.com/@wildlittlethingsphoto");
  creditLink.textContent = "Helena Lopes";
  credit.appendChild(creditLink);

  const lowerNav = document.createElement("nav");
  const lowerLink = document.createElement("a");
  lowerNav.className = "lower-nav";
  lowerLink.setAttribute("href", "#content");
  lowerLink.textContent = "Back to top";
  lowerNav.appendChild(lowerLink);

  const rightFoot = document.createElement("div");
  const createdBy = document.createElement("div");
  const odinLink = document.createElement("a");
  rightFoot.className = "right-footer";
  createdBy.textContent = "Created by thatblindgeye, for ";
  odinLink.setAttribute("href", "https://www.theodinproject.com");
  odinLink.textContent = "The Odin Project";
  createdBy.appendChild(odinLink);

  const gitLink = document.createElement("a");
  const gitImage = document.createElement("img");
  gitLink.setAttribute("href", "https://github.com/thatblindgeye");
  gitImage.setAttribute("src", 
      "images/github-logos/GitHub-Mark-Light-64px.png");
  gitImage.setAttribute("alt", "The GitHub logo");
  gitLink.appendChild(gitImage);

  leftFoot.appendChild(copyright);
  leftFoot.appendChild(credit);
  leftFoot.appendChild(lowerNav);
  rightFoot.appendChild(createdBy);
  rightFoot.appendChild(gitLink);
  footerTag.appendChild(leftFoot);
  footerTag.appendChild(rightFoot);

  contentContainer.appendChild(headerTag);
  contentContainer.appendChild(mainTag);
  contentContainer.appendChild(footerTag);
};

export default loadMainPage