(function() {
  let importDoc = document.currentScript.ownerDocument;
  class TabItem extends HTMLElement {
    constructor(){
      super();
      this.root = this.attachShadow({mode: 'open'});
      this.root.innerHTML = `<style>
      /*:host{
        width:170px;
        float:none;
        position: relative;
        display:block;
        }*/
        :host(:hover){
          width: 100%;
          background-color: #6CCCAA;
          }</style>
      <li><a href="/#">${this.getAttribute('name')}</a></li>`
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
      // this.root.appendChild(document.importNode(this.tmpl.content, true));
    }

    connectedCallback(){
      console.log(this.querySelectorAll('tab-item'));
      this.root.appendChild(document.importNode(this.tmpl.content, true));
    }
  }
  window.customElements.define('tab-list', Tablist);
})();
