// NOTE: pollyfill support
HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  function() {};

var tmpl = document.querySelector('template');


class ImgSlider extends HTMLElement{
  connectedCallback(){
    var root = this.attachShadow({mode: 'open'});
    root.appendChild(document.importNode(tmpl.content, true));
  }
}

window.customElements.define('img-slider', ImgSlider)
