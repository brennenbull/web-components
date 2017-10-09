(function () {
  let importDoc = document.currentScript.ownerDocument;
  class NavBar extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode: 'open'});
      this.tmpl = importDoc.querySelector('template');
      this.root.appendChild(document.importNode(this.tmpl.content, true));
      this.tabSlot = this.root.querySelector('slot[name=tab]');
    }
    connectedCallback(){
      console.log(this.tabSlot);
    }
  }
  window.customElements.define('nav-bar', NavBar);
})();
