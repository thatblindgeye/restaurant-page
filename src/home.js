"use strict";

const loadHomeContents = () => {
  const mainContainer = document.querySelector(".main-container");

  const noticeContain = document.createElement("article");
  const noticeHead = document.createElement("h1");
  const noticeContent1 = document.createElement("p");
  const noticeContent2 = document.createElement("p");
  noticeContain.classList.add("tab-container", "notice-container");
  noticeHead.textContent = "COVID-19";
  noticeContent1.textContent = 'Due to the COVID-19 pandemic, The Jasmine Dragon is currently closed for dine-in services. In lieu of this, we now offer park-and-dine and pick-up-and-go services.'
  noticeContent2.textContent = 'Not able to hop on your flying bison to come to us? Let us air scooter to you! Download the Honorable Eats app, "the only food delivery app serving all five nations with honor", to place an order and we\'ll deliver to you. Please note, we add a 20% surcharge on every delivery order as a tip for our deliverybenders.'
 
  noticeContain.appendChild(noticeHead);
  noticeContain.appendChild(noticeContent1);
  noticeContain.appendChild(noticeContent2);

  const reviewContain = document.createElement("article");
  const reviewHead = document.createElement("h1");
  reviewContain.classList.add("tab-container", "review-container");
  reviewHead.textContent = "What customers are saying...";
  reviewContain.appendChild(reviewHead);

  const reviewList = [
    {
      quote: "Ba Sing Se's #1 cafe! I visit at least twice a day!"
    }, 
    {
      quote: "You won't tea-leaf how wonderful the food and atmosphere is!"
    }, 
    {
      quote: "There is no war in Ba Sing Se!"
    }, 
  ];

  reviewList.forEach(({quote}) => {
    const reviewContent = document.createElement("p");
    const reviewQuote = document.createElement("q");
    reviewQuote.textContent = quote;
    reviewContent.appendChild(reviewQuote);
    reviewContain.appendChild(reviewContent);
  })

  const eventContain = document.createElement("article");
  const eventHead = document.createElement("h1");
  const eventContent = document.createElement("p");
  eventContain.classList.add("tab-container", "event-container");
  eventHead.textContent = "Avatar Day Festivi-teas";
  eventContent.textContent = "It's almost here! Come down to The Jasmine Dragon for our 69th annual Avatar Day celebration. Enjoy Avatar themed food items and the performances of The Ember Island Players. And don't forget about our famous Jasmine Dragon Tea Flight, here for a limited time only! Experience an assortment of teas from the Fire Nation to the Earth Kingdom, and everywhere in between."

  eventContain.appendChild(eventHead);
  eventContain.appendChild(eventContent);

  mainContainer.appendChild(noticeContain);
  mainContainer.appendChild(reviewContain);
  mainContainer.appendChild(eventContain);
};

export default loadHomeContents