"use strict";

const loadContactContents = () => {
  const mainContainer = document.querySelector(".main-container");

  const contactContainer = document.createElement("section");
  contactContainer.classList.add("contact", "tab-container");
  const contactHead = document.createElement("h1");
  contactHead.textContent = "Contact Us";
  contactContainer.appendChild(contactHead);

  const addressContainer = document.createElement("address");
  addressContainer.textContent = "Call us at ";
  const addressPhone = document.createElement("a");
  addressPhone.setAttribute("href", "tel:+15555555555");
  addressPhone.textContent = "555-555-5555";
  addressContainer.appendChild(addressPhone);
  contactContainer.appendChild(addressContainer);

  const form = document.createElement("form");
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Or send us a message:";
  fieldset.appendChild(legend);

  const nameInput = document.createElement("input");
  const nameLabel = document.createElement("label");
  nameInput.id = "sender-name";
  nameInput.className = "input";
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameLabel.setAttribute("for", "sender-name");
  nameLabel.textContent = "Name";

  const emailInput = document.createElement("input");
  const emailLabel = document.createElement("label");
  emailInput.id = "sender-email";
  emailInput.className = "input";
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailLabel.setAttribute("for", "sender-email");
  emailLabel.textContent = "E-mail";

  const messageArea = document.createElement("textarea");
  const messageLabel = document.createElement("label");
  messageArea.id = "sender-msg";
  messageArea.className = "input";
  messageArea.setAttribute("name", "message");
  messageLabel.setAttribute("for", "sender-msg");
  messageLabel.textContent = "Enter your message above";

  const submit = document.createElement("input");
  submit.className = "submit-btn";
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Send");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    authenticateForm.submitForm();
  });
  
  fieldset.appendChild(nameInput);
  fieldset.appendChild(nameLabel);
  fieldset.appendChild(emailInput);
  fieldset.appendChild(emailLabel);
  fieldset.appendChild(messageArea);
  fieldset.appendChild(messageLabel);
  fieldset.appendChild(submit);
  form.appendChild(fieldset);
  contactContainer.appendChild(form);
  mainContainer.appendChild(contactContainer);

  const hoursContainer = document.createElement("section");
  hoursContainer.classList.add("restaurant-hours", "tab-container");
  
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = "Hours of Operation";
  table.appendChild(caption);

  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headRow = document.createElement("tr")
  const dayHeader = document.createElement("th");
  dayHeader.setAttribute("scope", "col");
  dayHeader.textContent = "Day";
  const hoursHeader = document.createElement("th");
  hoursHeader.setAttribute("scope", "col");
  hoursHeader.textContent = "Hours";
  headRow.appendChild(dayHeader);
  headRow.appendChild(hoursHeader);
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  const hours = [
    {
      day: "Monday",
      open: "6:00",
      close: "22:00"
    }, 
    {
      day: "Tuesday",
      open: "6:00",
      close: "22:00"
    }, 
    {
      day: "Wednesday",
      open: "6:00",
      close: "22:00"
    }, 
    {
      day: "Thursday",
      open: "6:00",
      close: "22:00"
    }, 
    {
      day: "Friday & Saturday",
      open: "6:00",
      close: "22:00"
    }, 
    {
      day: "Sunday",
      open: "6:00",
      close: "22:00"
    }, 
  ];

  hours.forEach(({day, open, close}) => {
    const row = document.createElement("tr");
    const rowHead = document.createElement("th");
    rowHead.setAttribute("scope", "row");
    rowHead.textContent = day;
    row.appendChild(rowHead);

    const hourCell = document.createElement("td");
    const openTime = document.createElement("time");
    const textNode = document.createTextNode(" to ");
    const closeTime = document.createElement("time");
    openTime.setAttribute("datetime", open);
    openTime.textContent = open;
    closeTime.setAttribute("datetime", close);
    closeTime.textContent = close;
    hourCell.appendChild(openTime);
    hourCell.appendChild(textNode);
    hourCell.appendChild(closeTime);
    row.appendChild(hourCell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  hoursContainer.appendChild(table);
  mainContainer.appendChild(hoursContainer);
};

const authenticateForm = (() => {
  const submitForm = () => {
    const inputs = document.querySelectorAll(".input");
    Array.from(inputs).forEach(input => {
      input.value = "";
    });
    alert("Thank you for messaging us! You should hear a response within 48 hours at the email address provided.")
  };
  return {submitForm};
})();

export default loadContactContents