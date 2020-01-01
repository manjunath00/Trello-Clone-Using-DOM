const domain = `https://api.trello.com`;
const apiAccess = `key=${APIKey}&token=${token}`;
console.log(apiAccess);

const urls = {
  getAllBoards: `${domain}/1/members/me/boards?${apiAccess}`,
  getAllLists: function(boardId) {
    return `${domain}/1/boards/${boardId}/lists?cards=none&card_fields=all&filter=open&fields=all&${apiAccess}`;
  },
  getAllCards: function(listId) {
    return `${domain}/1/lists/${listId}/cards?${apiAccess}`;
  },
  getAllContents: ""
};

const getsAllBoardsFunc = async function() {
  const boards = await fetch(urls.getAllBoards).then(cur => cur.json());
  addAllBoards(boards);
  return boards;
};

const getAllLists = async function (boardId) {
  const lists = await fetch(url.getAllLists(boardId)).then(list => list.json());
  return lists;
}

window.addEventListener("DOMContentLoaded", getsAllBoardsFunc);
