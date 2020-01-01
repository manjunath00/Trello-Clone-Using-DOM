const form = document.querySelector(".forms");
const addItemFieldValue = document.getElementById("addItemField");
const addItemBtn = document.getElementById("addItemToChecklist");
const checklistContainer = document.querySelector(
  ".window-main-col--checklist-items"
);

let startIndex, endIndex;
// dragstart
const draggingStarted = function(e) {
  startIndex = e.srcElement.getAttribute("todoIndex");
  this.classList.add("dragging");
  console.log("start", startIndex);
};

// dragging
const dragging = function(e) {
  endIndex = Number(e.target.getAttribute("todoIndex"));
  console.log("over", endIndex);
};

// dragend
const draggingEnded = function(e) {
  let todos = getLocalStorage();
  start = todos.splice(startIndex, 1);
  this.classList.remove("dragging");

  todos.splice(endIndex, 0, start[0]);
  // console.log(endIndex);
  updateLocalStorage("all", todos);
  regenDOM();
};

// creates the localstorage & sets it to empty array
const createLocalStorage = function(allItems) {
  if (!localStorage["todos-list"]) {
    localStorage.setItem("todos-list", []);
  }
};

// get all items of ls
const getLocalStorage = function() {
  if (!localStorage["todos-list"]) {
    localStorage.setItem(name, []);
    return [];
  } else {
    let allItems = JSON.parse(localStorage.getItem("todos-list"));
    return allItems;
  }
};

// update localStorage
const updateLocalStorage = function(type, items) {
  let todos;
  if (!localStorage["todos-list"]) {
    todos = [items];
  } else if (type === "item") {
    todos = JSON.parse(localStorage.getItem("todos-list"));
    todos.unshift(items);
  } else if (type === "all") {
    todos = [...items];
  }
  todos.sort((a, b) => a["completed"] - b["completed"]);
  localStorage.setItem("todos-list", JSON.stringify(todos));
  return 1;
};

const createsNewHtml = function(obj, index) {
  let start = 0;
  let endIndex;
  let startEle;
  // outer
  const outer = document.createElement("div");
  outer.classList.add("checklistItem");
  outer.setAttribute("todoIndex", index);
  outer.setAttribute("draggable", true);
  outer.addEventListener("dragstart", draggingStarted);
  outer.addEventListener("dragover", dragging);
  outer.addEventListener("dragend", draggingEnded);

  // create input element
  const todoStatusWrapper = document.createElement("div");
  const todoStatus = document.createElement("input");
  todoStatus.setAttribute("type", "checkbox");
  todoStatus.classList.add("checkbox");
  todoStatus.addEventListener("click", toggle);
  todoStatusWrapper.appendChild(todoStatus);
  // create div for todotext
  const todoText = document.createElement("div");
  todoText.classList.add("todo-text");
  todoText.textContent = obj["value"];

  //create a div for deleting
  const todoDel = document.createElement("div");
  todoDel.classList.add("todo-action");
  const todoDelBtn = document.createElement("button");
  todoDelBtn.addEventListener("click", del);
  // todoDelBtn.textContent = "delete";
  todoDel.appendChild(todoDelBtn);

  // completed
  if (obj.completed) {
    console.log("entered");
    todoStatus.setAttribute("checked", true);
    outer.classList.add("completed");
  }

  // add everything
  outer.appendChild(todoStatusWrapper);
  outer.appendChild(todoText);
  outer.appendChild(todoDel);
  // console.log(outer);
  checklistContainer.append(outer);
  return outer;
};

// toggle status
const toggle = function() {
  let index = event.target.parentNode.parentNode.getAttribute("todoIndex");
  let todos = getLocalStorage();
  todos[Number(index)]["completed"] = !todos[Number(index)]["completed"];
  // todos.sort((a, b) => a["completed"] - b["completed"]);
  updateLocalStorage("all", todos);
  regenDOM();
  console.log("DOM regen complete");
};

// delete from local storage
const del = function(event) {
  let todos = getLocalStorage();

  let index = event.target.parentNode.parentNode.getAttribute("todoIndex");
  todos.splice(Number(index), 1);
  updateLocalStorage("all", todos);
  regenDOM();
};

// generates the todo-container
const regenDOM = function() {
  let todosArray = getLocalStorage();

  while (checklistContainer.hasChildNodes()) {
    checklistContainer.removeChild(checklistContainer.lastChild);
  }

  todosArray.forEach((obj, ind) => {
    createsNewHtml(obj, ind);
  });
};

addItemBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const val = addItemFieldValue.value.trim();
  if (val) {
    let newToDo = {
      value: val,
      completed: false
    };
    console.log(newToDo);
    updateLocalStorage("item", newToDo);
    regenDOM();
    addItemFieldValue.value = "";
  }
});

// window.addEventListener("load", regenDOM);
const closeCheckListForm = function () {
  console.log('tried to close checklist')
  document.querySelector(".main-col--checklist--form")
    .classList.add("hidden");
  addItemBtn.classList.remove("green")
  document.getElementById("closeAddToChecklist").classList.add("hidden");
};

const showCheckListForm = function () {
  this.classList.add("green");
  document
    .querySelector(".main-col--checklist--form")
    .classList.remove("hidden");
  document.getElementById("closeAddToChecklist").classList.remove("hidden");
}

addItemBtn.addEventListener("click", showCheckListForm);

const closeAddToChecklist = document.getElementById('closeAddToChecklist');

closeAddToChecklist.addEventListener('click', closeCheckListForm);
