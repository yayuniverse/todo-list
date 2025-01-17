//utility functions
function addClass(element, ...className) {
  element.classList.add(...className);
}

function createElement(elementType) {
  return document.createElement(elementType);
}

export { addClass, createElement };