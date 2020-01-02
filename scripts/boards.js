const domain = `https://api.trello.com`;
const apiAccess = `key=${APIKey}&token=${token}`;
// console.log(apiAccess);

const urls = {
  getAllBoards: `${domain}/1/members/me/boards?${apiAccess}`,
  getAllLists: function(boardId) {
    return `${domain}/1/boards/${boardId}/lists?cards=none&card_fields=all&filter=open&fields=all&${apiAccess}`;
  },
  getAllCards: function(listId) {
    return `${domain}/1/lists/${listId}/cards?${apiAccess}`;
  },
  getAModal: function(cardId) {
    return `${domain}/1/cards/${cardId}?fields=all&${apiAccess}`;
  },
  getCheckLists: function(cardId) {
    return `${domain}/1/cards/${cardId}checklists?&${apiAccess}`;
  }
};

const postReq = {
  postAList: function() {
    return `${domain}/1/lists?${apiAccess}`;
  },
  postACard: function () {
    return `${domain}/1/cards?${apiAccess}`;
  }
};

const getsAllBoardsFunc = async function() {
  const boards = await fetch(urls.getAllBoards).then(cur => cur.json());
  addAllBoards(boards);
  // return boards;
};

const getAllLists = async function(boardId) { 
  const lists = await fetch(urls.getAllLists(boardId)).then(list =>
    list.json()
  ); 
  addAllLists(lists);
  lists.forEach(list => { getAllCards(list["id"]); });
  // return lists;
};

const getAllCards = async function(listId) {
  const cards = await fetch(urls.getAllCards(listId)).then(card => card.json());
  cards.forEach(card => createACard(card));
};

const getAModal = async function(e) {
  const cardId = e.target.parentNode.parentNode.id;
  const cardInfo = await fetch(urls.getAModal(cardId)).then(card =>
    card.json()
  );
  createAModal(cardInfo);
  console.log(cardInfo);
};

const spostAList = async function(body) {
  const url = postReq.postAList();
  console.log(url);
  const createAList = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  }).then(function(response) {
    console.log(response);
    if (response.ok) {
      console.log(response); 
      getAllLists(allIds["boardId"]);
    }
    return response.json();
  });
 
};

const spostACard = async function (body) {
  const url = postReq.postACard();
    const createACard = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  }).then(function(response) {
    console.log(response);
    if (response.ok) {
      console.log(response); 
      getAllLists(allIds["boardId"]);
    }
    return response.json();
  });
}

window.addEventListener("DOMContentLoaded", getsAllBoardsFunc);
