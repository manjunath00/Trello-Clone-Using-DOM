const postAList = function() {
  const container = createsElement("div", ["controls-container"]);
  const form = createsElement("forms", ["forms", "hidden"]);
  const formInput = createsElement("input", ["input-bar"]);
  formInput.setAttribute("type", "text");
  formInput.setAttribute("required", true);
  formInput.setAttribute("placeholder", "Add an item");
  appendToParent(formInput, form);

  const buttonControls = createsElement("div", ["checklist--controls"]);
  const buttonAdd = createsElement("button", ["grey-btn"], "Add an Item");
  const buttonClose = createsElement("button", ["grey-btn"], "x");

  buttonClose.addEventListener("click", function(e) {
    this.classList.add("hidden");
    document.querySelector(".forms").classList.toggle("hidden");
  });

  buttonAdd.addEventListener("click", function(e) {
    document.querySelector(".forms").className = "forms";
    const value = document.querySelector(".input-bar").value;
    console.log(value);
    const data = { name: value, idBoard: allIds["boardId"] };
    spostAList(data)
      // .then(cur => console.log(cur))
      // .catch(err => console.log(err));
  });
  appendToParent(buttonAdd, buttonControls);
  appendToParent(buttonClose, buttonControls);

  appendToParent(form, container);
  appendToParent(buttonControls, container);

  // console.log("create editable successfully");
  return container;
};

const postACard = function(listId) {
  // const listContainer = document.querySelector(".list-container");
  const listContainer = document.getElementById(listId);
  const container = createsElement("div", ["create-card-container"]);

  const buttonAdd = createsElement("button", ["grey-btn", 'card-button', `.${listId}`], "+   create a card");
  appendToParent(buttonAdd, container);

  buttonAdd.addEventListener("click", function(e) {
    const listId = e.target.parentNode.parentNode.id; 
    const form = createsElement("form", ["forms"]);
    const formInput = createsElement("input", ["input-bar"]);
    formInput.setAttribute("type", "text");
    formInput.setAttribute("required", true);
    formInput.setAttribute("placeholder", "Add an Card");
    formInput.addEventListener("keypress", function (e) {
      if (e.key === 'Enter') {
        console.log(listId);
        const val = formInput.value
        console.log(val);
        const body = {
          name: val,
          idList: listId
        };
        spostACard(body)
      }
    })
    appendToParent(formInput, form);
    appendToParent(form, container);
  });

  appendToParent(container, listContainer); 
};
