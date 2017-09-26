// NOTE: pollyfill support
HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  function() {};

// Add the template to the Shadow DOM
var tmpl = document.querySelector('template');
var host = document.querySelector('.img-slider');
var root = host.createShadowRoot();
root.appendChild(document.importNode(tmpl.content, true));
