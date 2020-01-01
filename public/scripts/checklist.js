console.log("Javascript connected");

// heading

const cardDetailHeading = document.querySelector(".card-detail-heading");
const modalHeading = document.querySelector(".modal-card-heading");
const formHeading = document.querySelector(".textarea-card-heading");
let formHeadingInput = document.getElementById("textareaHeading");
const container = document.querySelector(".modal--container");

// console.log(modalHeading);
// console.log(modalHeadingInput);

const makeHeadingEditable = function(e) {
  modalHeading.classList.add("hidden");
  formHeading.classList.remove("hidden");
  let text = modalHeading.textContent;
  console.log(typeof text);
  formHeadingInput.value = text;
  console.log(text);
};

const closeEditing = function(e) {
  console.log(e.target);
  console.log("Heading was closed");
  console.log("target is not modal heading");
  let text = formHeadingInput.value;
  console.log("input text is", text);
  modalHeading.textContent = text;
  formHeading.classList.add("hidden");
  modalHeading.classList.remove("hidden");
};
modalHeading.addEventListener("click", makeHeadingEditable);
formHeadingInput.addEventListener("focusout", closeEditing, true);

// checklist
const addCheckListBtn = document.getElementById("createCheckListBtn");
const checkList = document.querySelector(".side-bar-create-checklist");
const closeCheckList = document.getElementById("closeCheckList");

const createsCheckList = function(e) {
  checkList.classList.toggle("hidden");
};

addCheckListBtn.addEventListener("click", createsCheckList);

closeCheckList.addEventListener("click", createsCheckList);

// adding items to checklist
/*
const addItemChecklist = document.getElementById("addItemToChecklist");

const checklistContainer = document.querySelector(
  ".window-main-col--checklist-items"
);

addItemChecklist.addEventListener("click", function() {
  console.log("Checklist item added");
});

checklistContainer.addEventListener("mouseover", function() {
  console.log("Checklist item added");
});

const createCheckItem = function(obj) {
  const outer = document.createElement("div");
  outer.className = "checklist-item";

  const checkbox = document.createElement("div");
  checkbox.className = "checklist-checkbox";

  const checkboxInput = document.createElement("input");
  checkboxInput.setAttribute("type", "checkbox");

  const checklistItemText = document.createElement("div");
  checklistItemText.textContent = obj["value"]
};
*/
