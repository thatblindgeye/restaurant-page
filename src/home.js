"use strict";

const loadHomeContents = () => {
  const mainContainer = document.querySelector(".main-container");

  const noticeContain = document.createElement("article");
  const noticeHead = document.createElement("h1");
  const noticeContent = document.createElement("p");
  const noticeQuote = document.createElement("q");
  noticeContain.classList.add("tab-container", "notice-container");
  noticeHead.textContent = "COVID-19";
  noticeQuote.textContent = "the only food delivery app serving all five nations with honor"

  const noticeText1 = document.createTextNode("Due to the COVID-19 pandemic, The Jasmine Dragon is currently closed for dine-in services. In lieu of this, we now offer park-and-dine and pick-up-and-go services.<br><br>Not able to hop on your flying bison to come to us? Let us air scooter to you! Download the Honorable Eats app, ");

  const noticeText2 = document.createTextNode(", to place an order and we'll deliver to you. Please note, we add a 20% surcharge on every deliver order as a tip for our deliverybenders.");

  noticeContent.appendChild(noticeText1);
  noticeContent.appendChild(noticeQuote);
  noticeContent.appendChild(noticeText2);
  noticeContain.appendChild(noticeHead);
  noticeContain.appendChild(noticeContent);

  const reviewContain = document.createElement("article");
  const reviewHead = document.createElement("h1");
  const reviewContent1 = document.createElement("p");
  const reviewQuote1 = document.createElement("q");
  const reviewContent2 = document.createElement("p");
  const reviewQuote2 = document.createElement("q");
  const reviewContent3 = document.createElement("p");
  const reviewQuote3 = document.createElement("q");

  reviewContain.classList.add("tab-container", "review-container");
  reviewHead.textContent = "What customers are saying...";
  reviewQuote1.textContent = "Ba Sing Se's #1 cafe! I visit at least twice a day!";
  reviewQuote2.textContent = "You won't tea-leaf how wonderful the food and atmosphere is!";
  reviewQuote3.textContent = "There is no war in Ba Sing Se!";

  reviewContent1.appendChild(reviewQuote1);
  reviewContent2.appendChild(reviewQuote2);
  reviewContent3.appendChild(reviewQuote3);
  reviewContain.appendChild(reviewHead);
  reviewContain.appendChild(reviewContent1);
  reviewContain.appendChild(reviewContent2);
  reviewContain.appendChild(reviewContent3);

  const eventContain = document.createElement("article");
  const eventHead = document.createElement("h1");
  const eventContent = document.createElement("p");
  eventContain.classList.add("tab-container", "event-container");
  eventHead.textContent = "Avatar Day Festivi-teas";
  eventContent.textContent = "It's almost here! Come down to The Jasmine Dragon for our 69th annual Avatar Day celebration. Enjoy our Avatar themed food items and the performances of The Ember Island Players. Be sure to also order the famous Jasmine Dragon Tea Flight, where you get to experience an assortment of teas from the Fire Nation to the Earth Kingdom, and everywhere in between."

  eventContain.appendChild(eventHead);
  eventContain.appendChild(eventContent);

  mainContainer.appendChild(noticeContain);
  mainContainer.appendChild(reviewContain);
  mainContainer.appendChild(eventContain);
};

export default loadHomeContents