// Define and register <say-hi>.
(function() {
  class Hi extends HTMLElement{
    connectedCallback(){
      this.innerHTML = 'Hello, <b>' +
                       (this.getAttribute('name') || '?') + '</b>';
    }
  }
  window.customElements.define('say-hi', Hi)
})();

(function() {
 // importee
  var importDoc = document.currentScript.ownerDocument;

  // console.log(template);
  // Define and register <shadow-element>
  // that uses Shadow DOM and a template.
  class Shadow extends HTMLElement{
    connectedCallback(){
      var template = importDoc.getElementById('t');
      var root = this.attachShadow({mode:'open'});
      root.appendChild(document.importNode(template.content, true))
    }
  }
  window.customElements.define('shadow-element', Shadow)
})();
