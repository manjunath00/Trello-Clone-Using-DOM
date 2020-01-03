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

  const windowHeaderTitle = createsElement("div", ["flex"]);
  const cardDetailHeading = createsElement("div", ["card-detail-heading"]);
  cardDetailHeading.addEventListener("click", editableForm);
  const modalDetailHeading = createsElement(
    "h2",
    ["modal-card-heading"],
    heading
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

const closeTheChecklist = function(e) {
  const sideCol = document.querySelector(".side-col");
  const sideClContainer = document.querySelector(".side-cl-container");
  sideCol.removeChild(sideClContainer);
};

const submitChecklist = function(e) {
  console.log("submit clicked", e);
  const addToCard = document.querySelector(".side-cl-container");
  addToCard.classList.add("hidden");
  const checkListName = document.querySelector(".checklist-form").value;
  const body = {
    idCard: allIds["cardId"],
    name: checkListName
  };

  spostACheckList(body);
};

// shows pops and and asks checklist name
const sideCreateCheckList = function(e) {
  console.log("side checklist will be created");
  const sideCol = document.querySelector(".side-col");
  const container = createsElement("div", ["side-cl-container"]);

  const header = createsElement("div", ["flex"]);
  const add = createsElement("div", ["side-cl-heading"], "Add An Checklist");
  const close = createsElement("button", ["grey-btn"], "x");
  close.addEventListener("click", closeTheChecklist);
  appendToParent(add, header);
  appendToParent(close, header);
  appendToParent(header, container);

  const form = createsElement("form", ["forms"]);
  const input = createsElement("input", ["input-bar", "checklist-form"]);
  input.setAttribute("type", "text");
  input.setAttribute("required", "true");
  const btn = createsElement("button", ["add"], "Add");
  btn.addEventListener("click", submitChecklist);
  appendToParent(input, form);
  appendToParent(btn, form);

  appendToParent(form, container);
  appendToParent(container, sideCol);

  console.log("Side list creaed");
};

// to collect the value from form value & submit it to post request
const postACheckItem = function(e) {
  // body { id : checklistId, name: checklistName}

  const name = document.querySelector(".input-bar-checkItem").value;
  const parent =
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  allIds["checkListId"] = parent;
  const body = {id: allIds["checkListId"], name : name};
  spostACheckItem(parent, body);
  console.log(name);
  console.log(parent);
};

// adds an item
const addsAnItem = function(e) {
  const id = e.target.parentNode.parentNode.id;
  this.classList.toggle("hidden");
  const checkListContainer = document.getElementById(id);
  const footerContainer = checkListContainer.children[2];
  // console.log(footerContainer);

  const container = createsElement("div", ["form-container"]);

  const form = createsElement("form", ["forms"]);
  const input = createsElement("input", ["input-bar-checkItem", "input-bar"]);
  input.setAttribute("type", "text");
  input.setAttribute("required", true);
  appendToParent(input, form);

  const btnBar = createsElement("div", ["btnBar"]);
  const addBtn = createsElement(
    "button",
    ["grey-btn", "green"],
    "Add an checkitem"
  );
  addBtn.addEventListener("click", postACheckItem);
  const closeBtn = createsElement("button", ["btn-close"], "x");
  appendToParent(addBtn, btnBar);
  appendToParent(closeBtn, btnBar);
  appendToParent(btnBar, form);

  appendToParent(form, container);
  appendToParent(container, footerContainer);
};

// add an item to the checklist
const addAnCheckListItem = function(checkListId) {
  const checkListAdd = createsElement("div", ["checklist-add-item"]);
  const createsABtn = createsElement(
    "button",
    ["grey-btn", "checklist-add"],
    "Add an Item"
  );
  createsABtn.addEventListener("click", addsAnItem);
  appendToParent(createsABtn, checkListAdd);
  const container = document.getElementById(checkListId);
  appendToParent(checkListAdd, container);
};

// close the checklist window
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
  appendToParent(input, inputDiv);

  const todoText = createsElement("div", ["todo-text"], name);
  const del = createsElement("div", ["todo-action"]);
  const delBtn = createsElement("button", ["del", "hidden"], "X");
  appendToParent(delBtn, del);

  if (state === "complete") {
    input.setAttribute("checked", true);
    checkListItem.classList.add("completed");
  } else {
    // input.setAttribute("checked", false);
  }

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
  addAnCheckListItem(id);
};

// window.addEventListener("click", function(e) {
//   console.log(e);

// });
