const createsElement = function(type, classListArray, text = "") {
  const element = document.createElement(type);
  element.textContent = text;
  if (classListArray.length) {
    classListArray.forEach(classI => {
      element.className += " " + classI;
    });
  }

  // console.log(element)
  return element;
};

// function to append child to parent
const appendToParent = function(child, parent) {
  parent.appendChild(child);
  return parent;
};

const createAllImp = function() {
  const body = document.querySelector("body");
  const container = createsElement("div", ["modal-container"]);

  const windowHeader = createsElement("div", ["window-header"]);
  appendToParent(windowHeader, container);

  const body = createsElement("div", ["window-body"]);
  appendToParent(body, container);

  const mainColumn = createsElement("div", ["main-col"]);
  appendToParent(mainColumn, body);

  const sideColumn = createsElement("div", ["side-col"]);
  appendToParent(sideColumn, body);

  const checklist = createsElement("div", ["checklist"]);
  appendToParent(checklist, mainColumn);

  const header = createsElement("div", ["checklist-header", "flex"]);
  appendToParent(header, checklist);

  const checkListItems = createsElement("div", ["checklist--items"]);
  appendToParent(checkListItems, checklist);

  const checkListFooter = createsElement("div", ["checklist--footer"]);
  appendToParent(checkListFooter, checklist);
};

const createsModalHeader = function() {
  console.log("Header entered");
  const container = document.querySelector(".modal--container");
  const windowHeader = document.querySelector(".window-header");

  const windowHeaderTitle = createsElement("div", ["window-header", "flex"]);
  const cardDetailHeading = createsElement("div", ["card-detail-heading"]);
  cardDetailHeading.addEventListener("click", editableForm);
  const modalDetailHeading = createsElement(
    "h2",
    ["modal-card-heading"],
    "Trello Clone using DOM"
  );

  appendToParent(modalDetailHeading, cardDetailHeading);
  appendToParent(cardDetailHeading, windowHeaderTitle);

  const cardDetailClose = createsElement("div", ["card-detail-close"]);
  const cardCloseBtn = createsElement("button", ["grey-btn"], "X");
  appendToParent(cardCloseBtn, cardDetailClose);
  cardDetailClose.addEventListener("click", function(e) {
    this.classList.add("hidden");
  });
  appendToParent(cardCloseBtn, windowHeaderTitle);
  appendToParent(windowHeaderTitle, windowHeader);

  return windowHeader;
};

const editableForm = function(e) {
  const val = this.textContent;
};

const checklistHeader = function(heading) {
  const container = document.querySelector(".modal--container");
  const checkListContainer = document.querySelector(".checklist--items");
  const header = document.querySelector(".checklist-header");

  const headerHeading = createsElement("h3", ["header-heading"], heading);
  const headingBtn = createsElement("button", ["grey-btn"], "delete");
  const checkListBtn = createsElement("div", ["checklist-btn"]);
  // const header = createsElement("div", ["checklist-header", "flex"]);

  appendToParent(headingBtn, checkListBtn);

  appendToParent(headerHeading, header);
  appendToParent(checkListBtn, header);
  console.log(header);
  return header;
};

const checkListItem = function(checked, text) {
  const container = document.querySelector(".checklist--items");
  console.log(container);
  // const container = document.querySelector(".modal--container");

  const checkListItem = createsElement("div", ["checklistItem"]);
  const inputDiv = createsElement("div", ["todo-checkbox"]);
  const input = createsElement("input", ["checkbox"]);
  input.setAttribute("type", "checkbox");
  input.setAttribute("checked", checked);
  appendToParent(input, inputDiv);

  const todoText = createsElement("div", ["todo-text"], text);
  const del = createsElement("div", ["todo-action"]);
  const delBtn = createsElement("button", ["del"], "X");
  appendToParent(delBtn, del);

  appendToParent(inputDiv, checkListItem);
  appendToParent(todoText, checkListItem);
  appendToParent(del, checkListItem);

  appendToParent(checkListItem, container);
  // appendToParent(checkListItem, container);

  return checkListItem;
};

const checkListBody = function(items) {
  items.forEach(item => checkListItem(true, "Create a todo"));
};

// checklist header
// checklist items
// checklist footer

const createAModal = function() {
  createAllImp();
  createsModalHeader();
  checklistHeader("checklist");
  checkListBody(["a", "b", "c", "d"]);
};

window.addEventListener("DOMContentLoaded", function(e) {
  console.log("Dom content fully loaded");
  addItToThePage();
});
