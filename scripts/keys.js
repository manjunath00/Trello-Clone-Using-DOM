const APIKey = "e1df66f563cbe54aed8edd3a57aea366";
const token =
  "18f3ad6bb43cabb2f2238e2c844c2e5fe40efd95b64ada53eba8812f51be6422";
// const board = document.getElementById("board");

// const domain = `https://api.trello.com`;
// const apiAccess = `key=${APIKey}&token=${token}`;
// console.log(apiAccess);

// const boardLists = https://api.trello.com/1/boards/id/lists

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
