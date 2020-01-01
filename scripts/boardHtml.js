// {/* <div class="section__board">
//   <a href="">
//     <div class="section__board--name">Manjunath Tantry</div>

//     <div class="section__board--star">
//       <a href="#">
//         <img src="./public/assets/icons/star_border-24px.svg" alt="" />
//       </a>
//     </div>
//   </a>
// </div>; */}

const createABoard = function(board) {
  console.log(board);
  const id = urls.getAllLists(board["id"]);
  const name = board["name"];

  const boardContainer = createsElement("div", ["section__board"]);
  const boardName = createsElement("div", ["section__board--name"], name);

  return `<div class="section__board">
    <a href="./lists.html" boardId=${id}>
      <div class="section__board--name">${board["name"]}</div>

      <div class="section__board--star">
        <a href="#">
          <img src="./public/assets/icons/star_border-24px.svg" alt="" />
        </a>
      </div>
    </a>
  </div>`;
};

const addItToBoardsContainer = function(board) {
  const boardsList = document.querySelector(".section__boards__list");
  boardsList.insertAdjacentHTML("beforebegin", board);
};

const addAllBoards = function(boards) {
  boards.map(board => {
    console.log(board);
    addItToBoardsContainer(createABoard(board));
  });
};
