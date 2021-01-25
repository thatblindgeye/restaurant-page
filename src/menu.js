"use strict";

const menu = (() => {
  const sections = [
    {
      name: "Shareables",
      pageLink: "#shareables"
    }, 
    {
      name: "Entrees",
      pageLink: "#entrees"
    }, 
    {
      name: "Tea",
      pageLink: "#tea"
    }
  ];

  const shareableItems = [
    {
      name: "Octopus Fritters",
      description: "A staple in the United Republic of Nations, these bite-sized pieces of octopus are coated with our speciality blend of seasonings and fried in oil. Served topped with your choice of sauce."
    }, 
    {
      name: "Sweet Buns",
      description: "Cooked to perfection by airbending masters, these rice dumplings are wrapped exquisitely in flat leaves."
    }, 
    {
      name: "Sea Prune Stew",
      description: "Our sea prunes are imported directly from the Water Tribes, boiled in our homemade broth, and topped with seaweed noodles, guaranteed to warm you up on the coldest days. Served in a pot with bowls for each member of your party."
    },
  ];

  const entreeItems = [
    {
      name: "Braised Turtle-Duck",
      description: "Our turtle-duck is braised for the perfect amount of time, every time. You haven't experienced tender turle-duck like a Jasmine Dragon turtle-duck. Served with a ginger-infused pea tendril and hibiscus-root salad."
    }, 
    {
      name: "Cabbage Noodles",
      description: "Make no mistake, our cabbage noodles aren't meant to be served as a side dish. Cooked in a buttery mix of onions, garlic, and komodo-bacon, by the time you finish the bowl you'll be yelling, \"my cabbage noodles!\""
    }, 
    {
      name: "Smoked Sea Slug",
      description: "A dish that is commonly viewed down upon in public, but secretly enjoyed by many. We smoke our sea slugs for 22 hours, getting a wonderful, smoky flavor. Served over a bed of rice."
    }, 
    {
      name: "Tofu and Mung Bean Curry",
      description: "Nobody does tofu and mung bean curry like the Air Nomads, but we come pretty close! We use a precise blend of spices and a generous helping of mung beans, topping it all with seared tofu."
    }
  ];

  const teaItems = [
    {
      name: "Jasmine Tea",
      description: "The tea that The Jasmine Dragon is named after and most famous for. This soothing tea is the perfect drink to enjoy any time of the day."
    }, 
    {
      name: "White Dragon Tea",
      description: "Not to be confused with white jade tea, this tea is known the world over as being, \"so delicious, it is heartbreaking.\"",
    }, 
    {
      name: '"Bean Tea"',
      description: "Using beans from Coffea plants, this \"tea\" may not be the real deal, but some find it to be just as tasty."
    }
  ];
  return {
    entreeItems,
    sections,
    shareableItems,
    teaItems
  };
})();

const loadMenuContents = () => {
  const mainContainer = document.querySelector(".main-container");

  const menuLinkContainer = document.createElement("div");
  const menuMainHead = document.createElement("h1");
  menuLinkContainer.className = "menu-links";
  menuMainHead.textContent = "Menu";
  menuLinkContainer.appendChild(menuMainHead);

  const menuLinkList = document.createElement("ul");
  const menuContainer = document.createElement("article");
  menuContainer.className = "menu-container";

  menu.sections.forEach(({name, pageLink}) => {
    const menuLink = document.createElement("li");
    const menuLinkContents = document.createElement("a");
    menuLinkContents.className = "link";
    menuLinkContents.setAttribute("href", pageLink);
    menuLinkContents.textContent = name;
    menuLink.appendChild(menuLinkContents);
    menuLinkList.appendChild(menuLink);
    menuLinkContainer.appendChild(menuLinkList);

    const sectionContainer = document.createElement("section");
    const sectionHeader = document.createElement("h2");
    const sectionGrid = document.createElement("div");
    sectionContainer.id = name.toLowerCase();
    sectionHeader.textContent = name;
    sectionGrid.classList.add("menu-grid");

    sectionContainer.appendChild(sectionHeader);
    sectionContainer.appendChild(sectionGrid);
    menuContainer.appendChild(sectionContainer);
  });

  mainContainer.appendChild(menuLinkContainer);
  mainContainer.appendChild(menuContainer);

  menu.shareableItems.forEach(({name, description}) => {
    const itemContainer = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");
    itemContainer.className = "menu-item";
    itemName.textContent = name;
    itemDescription.textContent = description;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);
    document.querySelector("#shareables .menu-grid").appendChild(itemContainer);
  });

  menu.entreeItems.forEach(({name, description}) => {
    const itemContainer = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");
    itemContainer.className = "menu-item";
    itemName.textContent = name;
    itemDescription.textContent = description;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);
    document.querySelector("#entrees .menu-grid").appendChild(itemContainer);
  });

  menu.teaItems.forEach(({name, description}) => {
    const itemContainer = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");
    itemContainer.className = "menu-item";
    itemName.textContent = name;
    itemDescription.textContent = description;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);
    document.querySelector("#tea .menu-grid").appendChild(itemContainer);
  });
};

export default loadMenuContents