(function() {
  if ('registerElement' in document
      && 'import' in document.createElement('link')
      && 'content' in document.createElement('template')) {
    // platform is good!
  } else {
    // polyfill the platform!
    var e = document.createElement('script');
    e.src = './webcomponentsjs/webcomponents-lite.min.js';
    document.body.appendChild(e);
  }
})();
//not needed but in for future refrence
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
      this.tmpl.content.querySelector('#label').innerHTML = this.getAttribute('label')
      this.root.appendChild(document.importNode(this.tmpl.content, true));
    }

    connectedCallback(){
    }
  }
  window.customElements.define('tab-list', Tablist);
})();
