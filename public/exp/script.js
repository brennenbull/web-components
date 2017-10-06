// Define and register <say-hi>.
(function() {
  class Hi extends HTMLElement{
    constructor(){
      super();
      var root = this.attachShadow({mode:'open'});
      root.innerHTML = `Hello, <b>
                       ${(this.getAttribute('name') || '?')}</b>`;

    }
    connectedCallback(){

    }
  }
  window.customElements.define('say-hi', Hi)
})();

(function() {
 // importee
  var importDoc = document.currentScript.ownerDocument;
  // Define and register <shadow-element>
  // that uses Shadow DOM and a template.
  class Shadow extends HTMLElement{
    constructor(){
      super();
      var root = this.attachShadow({mode:'open'});
      var template = importDoc.getElementById('t');
      root.appendChild(document.importNode(template.content, true))
    }

    connectedCallback(){

    }
  }
  window.customElements.define('shadow-element', Shadow)
})();
