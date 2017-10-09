(function() {
  let importDoc = document.currentScript.ownerDocument;
  class TabItem extends HTMLElement {
    constructor(){
      super();
      this.root = this.attachShadow({mode: 'open'});
      this.root.innerHTML = `<style>
        :host(:hover){
          width: 100%;
          background-color: #6CCCAA;
          }</style>
      <li><a href="${this.getAttribute('href')}">${this.getAttribute('name')}</a></li>`
    }
  }
  window.customElements.define('tab-item', TabItem)
})();

(function () {
  let importDoc = document.currentScript.ownerDocument;

  class Tablist extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode: 'open'});
      this.tmpl = importDoc.querySelector('template');
      this.tmpl.content.querySelector('#lable').innerHTML = this.getAttribute('lable')
      this.root.appendChild(document.importNode(this.tmpl.content, true));
    }

    connectedCallback(){
    }
  }
  window.customElements.define('tab-list', Tablist);
})();
