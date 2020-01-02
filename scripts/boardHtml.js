const allIds = {
  boardId: ""
};

const regenDOM = function() {
  const container = document.querySelector(".section__boards__list");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
};

const createABoard = function(board) {
  // console.log(board);
  const boardsList = document.querySelector(".section__boards__list");
  const id = board["id"];
  const name = board["name"];

  const boardContainer = createsElement("div", ["section__board"]);
  const boardName = createsElement("div", ["section__board--name"], name);
  boardName.setAttribute("id", id);
  const anchor = document.createElement("a");
  anchor.setAttribute("href", "#");
  anchor.addEventListener(
    "click",
    function(e) {
      allIds["boardId"] = e.target.id;
      getAllLists(allIds["boardId"]);
    },
    false
  );

  appendToParent(boardName, anchor);
  appendToParent(anchor, boardContainer);
  appendToParent(boardContainer, boardsList);
};

const createAList = function(list) {
  const boardsList = document.querySelector(".section__boards__list");

  const { id, name } = list;
  // console.log(id, name);
  const listContainer = createsElement("div", ["list-container"]);
  listContainer.setAttribute("id", id);

  const listName = createsElement("div", ["list-name"]);
  const anchor = document.createElement("a");
  anchor.textContent = name;
  anchor.setAttribute("href", "#");
  // anchor.addEventListener("click", getAllCards, false);

  appendToParent(anchor, listName);
  appendToParent(listName, listContainer);
  appendToParent(listContainer, boardsList);
  postACard(id);
};

const createACard = function(card) {
  const { id, name, idList } = card;
  const listContainer = document.getElementById(idList);

  // console.log(id, name);
  const cardContainer = createsElement("div", ["card-container"]);
  cardContainer.setAttribute("id", id);

  const cardName = createsElement("div", ["card-name"]);
  const anchor = document.createElement("a");
  anchor.textContent = name;
  anchor.setAttribute("href", "#");
  anchor.addEventListener("click", getAModal, false);

  appendToParent(anchor, cardName);
  appendToParent(cardName, cardContainer);
  appendToParent(cardContainer, listContainer);
};

const addAllBoards = function(boards) {
  boards.map(board => {
    // console.log(board);
    createABoard(board);
  });
};

const addAllLists = function(lists) {
  regenDOM();
  lists.forEach(list => createAList(list));
  const addAList = postAList();
  const boardsList = document.querySelector(".section__boards__list");
  boardsList.append(addAList);
  // postACard();
};

const addAllCards = function(cards, listId) {
  cards.forEach(card => createACard(cards, listId));
  postACard();
};

const showAllLists = function(json) {
  console.log("Clicked");
  console.log(json);
};
