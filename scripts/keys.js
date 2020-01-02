const APIKey = "e1df66f563cbe54aed8edd3a57aea366";
const token =
  "18f3ad6bb43cabb2f2238e2c844c2e5fe40efd95b64ada53eba8812f51be6422"; 

// params type of div, classlist
const createsElement = function(type, classListArray, text = "") {
  const element = document.createElement(type);
  element.textContent = text;
  if (classListArray.length) {
    classListArray.forEach(classI => {
      element.className += " " + classI;
    });
  }

  return element;
};

// function to append child to parent
const appendToParent = function(child, parent) {
  parent.appendChild(child);
  return parent;
};
