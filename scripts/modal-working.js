const createAllImp = function() {
  const body = document.querySelector("body");
  const container = createsElement("div", ["modal-container"]);
  appendToParent(container, body);

  const windowHeader = createsElement("div", ["window-header"]);
  appendToParent(windowHeader, container);

  const windowBody = createsElement("div", ["window-body"]);
  appendToParent(windowBody, container);

  const mainColumn = createsElement("div", ["main-col"]);
  appendToParent(mainColumn, windowBody);

  const sideColumn = createsElement("div", ["side-col"]);
  appendToParent(sideColumn, windowBody);
};

const createsModalHeader = function(heading) {
  console.log("Header entered");
  const container = document.querySelector(".modal-container");
  const windowHeader = document.querySelector(".window-header");

  const windowHeaderTitle = createsElement("div", [ "flex"]);
  const cardDetailHeading = createsElement("div", ["card-detail-heading"]);
  cardDetailHeading.addEventListener("click", editableForm);
  const modalDetailHeading = createsElement(
    "h2",
    ["modal-card-heading"],
    headingit
  );

  appendToParent(modalDetailHeading, cardDetailHeading);
  appendToParent(cardDetailHeading, windowHeaderTitle);

  const cardDetailClose = createsElement("div", ["card-detail-close"]);
  const cardCloseBtn = createsElement("button", ["grey-btn"], "X");
  appendToParent(cardCloseBtn, cardDetailClose);
  cardCloseBtn.addEventListener("click", function(e) {
    const body = document.querySelector("body");
    body.removeChild(container);
    // container.classList.add("hidden");
  });
  appendToParent(cardCloseBtn, windowHeaderTitle);
  appendToParent(windowHeaderTitle, windowHeader);

  return windowHeader;
};

const sideAddCheckList = function() {
  const sideColumn = document.querySelector(".side-col");
  const header = createsElement("div", ["add-to-card"]);
  const heading = createsElement("div", ["add-to-card-heading"], "Add To Card");
  appendToParent(heading, header);

  const checklist = createsElement("div", ["createsCheckList"]);
  const checklistBtn = createsElement("button", ["grey-btn"], "Checklist");
  checklistBtn.addEventListener("click", sideCreateCheckList);

  appendToParent(checklistBtn, checklist);
  appendToParent(header, sideColumn);
  appendToParent(checklist, sideColumn);
};

const sideCreateCheckList = function (e) {
  console.log('side checklist will be created')
}


const createModalDescription = function() {};

const editableForm = function(e) {
  const val = this.textContent;
};

const checklistImp = function(checklistId) {
  const mainCol = document.querySelector(".main-col");
  const checklist = createsElement("div", ["checklist"]);
  checklist.setAttribute("id", checklistId);
  appendToParent(checklist, mainCol);
  //
  const header = createsElement("div", ["checklist-header", "flex"]);
  appendToParent(header, checklist);

  const checkListItems = createsElement("div", ["checklist--items"]);
  appendToParent(checkListItems, checklist);

  const checkListFooter = createsElement("div", ["checklist--footer"]);
  appendToParent(checkListFooter, checklist);

  return checklist;
};

const checklistHeader = function(name, id) {
  const container = document.querySelector(".modal--container");
  const checkListContainer = document.querySelector(".checklist--items");
  const checkList = document.getElementById(id);

  // const header = document.querySelector(".checklist-header");
  const header = checkList.children[0];

  // const header = createsElement("div", ["checklist-header", "flex"]);

  const headerHeading = createsElement("h3", ["header-heading"], name);
  const headingBtn = createsElement("button", ["grey-btn"], "delete");
  const checkListBtn = createsElement("div", ["checklist-btn"]);
  // const header = createsElement("div", ["checklist-header", "flex"]);

  appendToParent(headingBtn, checkListBtn);

  appendToParent(headerHeading, header);
  appendToParent(checkListBtn, header);
  //   console.log(header);
  return header;
};

const checkListItem = function(item) {
  const { state, id, name, idChecklist } = item;
  const checkList = document.getElementById(idChecklist);
  // console.log(checkList.children);
  // const container = document.querySelector(".checklist--items");
  const container = checkList.children[1];
  // const container = createsElement("div", ["checklist--items"]);

  const checkListItem = createsElement("div", ["checklistItem"]);
  checkListItem.setAttribute("id", id);
  const inputDiv = createsElement("div", ["todo-checkbox"]);
  const input = createsElement("input", ["checkbox"]);
  input.setAttribute("type", "checkbox");
  if (state === "complete") {
    input.setAttribute("checked", true);
  } else {
    // input.setAttribute("checked", false);
  }
  appendToParent(input, inputDiv);

  const todoText = createsElement("div", ["todo-text"], name);
  const del = createsElement("div", ["todo-action"]);
  const delBtn = createsElement("button", ["del"], "X");
  appendToParent(delBtn, del);

  appendToParent(inputDiv, checkListItem);
  appendToParent(todoText, checkListItem);
  appendToParent(del, checkListItem);

  appendToParent(checkListItem, container);

  return container;
};

const checkListBody = function(items) {
  items.forEach(item => checkListItem(item));
  // const all = items.map(item => checkListItem(item)).join('');
  // console.log(all)
  // return all
};

// checklist header
// checklist items
// checklist footer

const createAModal = function(card) {
  console.log(card);
  const { name, desc } = card;
  createAllImp();
  createsModalHeader(name);
  sideAddCheckList();
};

const createAChecklist = function(list) {
  const mainCol = document.querySelector(".main-col");
  console.log("from html list", list);
  const { id, name, checkItems } = list;
  const checklist = checklistImp(id);
  const header = checklistHeader(name, id);
  const body = checkListBody(checkItems);
};

// window.addEventListener("DOMContentLoaded", function(e) {
//   console.log("Dom content fully loaded");
//   addItToThePage();
// });

