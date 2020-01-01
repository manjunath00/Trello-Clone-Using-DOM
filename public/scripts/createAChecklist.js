// params type of div, classlist
const createsElement = function(type, classListArray, text = "") {
  const element = document.createElement(type);
  element.textContent = text;
//   element.className = "a";
  if (classListArray.length) {
    classListArray.forEach(classI => {
      element.className += " " + classI;
    });
  }

  return element;
};

// function to append child to parent
const appendToParent = function(child, parent) { 
  parent.append(child);
  return parent;
};

// creates checklist header
const createCheckListHeader = function(checkListName) {
  const h3 = createsElement("h3", ["h3"], checkListName);
  const heading = createsElement("div", ["checklist-heading"]);
  const header = createsElement("div", ["checklist-header", "flex"]);
  const container = document.querySelector(".checklist-container");

  appendToParent(h3, heading);
  appendToParent(heading, header);
  appendToParent(header, container);
};

const checklistForm = function() {
  const checkListFormHidden = createsElement("div", [
    "checklist--form",
    "hidden"
  ]);
  const form = createsElement("form", ["forms"]);
  const input = createsElement("input", ["input-bar"]);
  input.setAttribute("type", "text");
  input.setAttribute("required", true);
  appendToParent(input, form);
  appendToParent(form, checkListFormHidden);
  return checkListFormHidden;
};

const checkListControl = function() {
  const addButton = createsElement("button", ["grey-btn"], "Add an button");
  const closeButton = createsElement("button", ["grey-btn", "hidden"], "X");
  const outer = createsElement("div", ["checklist--controls"]);
  appendToParent(addButton, outer);
  appendToParent(closeButton, outer);

  return outer;
};

const checklistFooter = function () {
    const footer = createsElement("div", ["checklist-footer"]);
    const form = checklistForm();
    const controls = checkListControl();
    appendToParent(form, footer);
    appendToParent(controls, footer);
    const container = document.querySelector(".checklist-container");
    appendToParent(footer, container)
}

createCheckListHeader("My action checklist");
checklistFooter();