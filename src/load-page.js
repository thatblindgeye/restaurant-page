const loadMainPage = (() => {
  const contentContainer = document.getElementById("content");
  const headerTag = document.createElement("header");

  const accessibilityContain = document.createElement("div");
  accessibilityContain.id = "accessibility-container";
  accessibilityContain.tabIndex = "0";
  accessibilityContain.setAttribute("aria-labelledby", "accessibility-tab");

  const accessibilityContents = document.createElement("div");
  accessibilityContents.className = "accessibility-contents";

  const skipLink = document.createElement("a");
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
  themeContainer.appendChild(themeTrack);

  const themeSwitch = document.createElement("span");
  themeSwitch.className = "theme-toggle-switch";
  const themeIcon = document.createElement("i");
  themeIcon.classList.add("material-icons", "md-18");
  themeIcon.textContent = "wb_sunny";
  themeSwitch.appendChild(themeIcon);
  themeContainer.appendChild(themeSwitch);
  accessibilityContents.appendChild(themeContainer);

  const accessibilityTab = document.createElement("div");
  accessibilityTab.id = "accessibility-tab";
  accessibilityTab.innerHTML = "<span><i class='material-icons'>navigate_before</i></span>Display & Accessibility";

  accessibilityContents.appendChild(accessibilityTab);
  accessibilityContain.appendChild(accessibilityContents);
  headerTag.appendChild(accessibilityContain);

  const upperNav = document.createElement("nav");
  upperNav.className = "upper-nav";

  const logo = document.createElement("div");
  logo.className = "logo";
  const logoText = document.createElement("a");
  logoText.setAttribute("href", "#");
  logoText.innerHTML = "The Jasmine <span>Dragon</span>";
  logo.appendChild(logoText);
  upperNav.appendChild(logo);

  const navLinks = document.createElement("div");
  navLinks.className = "nav-links";

  const linkList = document.createElement("ul");
  const link1 = document.createElement("li");
  const link1Contents = document.createElement("a");
  link1Contents.setAttribute("href", "#");
  link1Contents.className = "link";
  link1Contents.textContent = "Menu";
  link1.appendChild(link1Contents);
  linkList.appendChild(link1);
  const link2 = document.createElement("li");
  const link2Contents = document.createElement("a");
  link2Contents.setAttribute("href", "#");
  link2Contents.className = "link";
  link2Contents.textContent = "Contact Us";
  link2.appendChild(link2Contents);
  linkList.appendChild(link2);

  navLinks.appendChild(linkList);
  upperNav.appendChild(navLinks);
  headerTag.appendChild(upperNav);
  contentContainer.appendChild(headerTag);

  const mainTag = document.createElement("main");
  mainTag.id = "main";
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";
  mainTag.appendChild(mainContainer);
  contentContainer.appendChild(mainTag);

  const footerTag = document.createElement("footer");

  const leftFoot = document.createElement("div");
  leftFoot.className = "left-footer";
  const copyright = document.createElement("small");
  copyright.id = "copyright";
  copyright.textContent = "&copy;2021 Cabbage Corp."
  leftFoot.appendChild(copyright);

  const credit = document.createElement("p");
  credit.textContent = "Background image credit: ";
  const creditLink = document.createElement("a");
  creditLink.setAttribute("href", "https://www.pexels.com/@wildlittlethingsphoto");
  creditLink.textContent = "Helena Lopes";
  credit.appendChild(creditLink);
  leftFoot.appendChild(credit);

  const lowerNav = document.createElement("nav");
  lowerNav.className = "lower-nav";
  const lowerLink = document.createElement("a");
  lowerLink.setAttribute("href", "#content");
  lowerLink.textContent = "Back to top";
  lowerNav.appendChild(lowerLink);
  leftFoot.appendChild(lowerNav);
  footerTag.appendChild(leftFoot);

  const rightFoot = document.createElement("div");
  rightFoot.className = "right-footer";
  const createdBy = document.createElement("div");
  createdBy.textContent = "Created by thatblindgeye, for ";
  const odinLink = document.createElement("a");
  odinLink.setAttribute("href", "https://www.theodinproject.com");
  odinLink.textContent = "The Odin Project";
  createdBy.appendChild(odinLink);
  rightFoot.appendChild(createdBy);

  const gitLink = document.createElement("a");
  gitLink.setAttribute("href", "https://github.com/thatblindgeye");
  const gitImage = document.createElement("img");
  gitImage.setAttribute("src", "images/github-logos/GitHub-Mark-Light-64px.png");
  gitImage.setAttribute("alt", "The GitHub logo");
  gitLink.appendChild(gitImage);
  rightFoot.appendChild(gitLink);
  footerTag.appendChild(rightFoot);

  contentContainer.appendChild(footerTag);
})();

export default loadMainPage