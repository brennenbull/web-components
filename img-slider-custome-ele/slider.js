// NOTE: pollyfill support
HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  function() {};

// Add the template to the Shadow DOM
// Grab our template full of slider markup and styles
var tmpl = document.querySelector('template');

// Create a prototype for a new element that extends HTMLElement
class ImgSlider extends HTMLElement{
  connectedCallback(){
    var root = this.createShadowRoot();
    root.appendChild(document.importNode(tmpl.content, true));
  }
}

customElements.define('img-slider', ImgSlider)
// var ImgSliderProto = Object.create(HTMLElement.prototype);

// Setup our Shadow DOM and clone the template
// ImgSliderProto.createdCallback = function() {
//   var root = this.createShadowRoot();
//   root.appendChild(document.importNode(tmpl.content, true));
// };

// Register our new element
