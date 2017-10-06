(function() {
  let importDoc = document.currentScript.ownerDocument;
  class TabItem extends HTMLElement {
    constructor(){
      super();
      this.root = this.attachShadow({mode: 'open'});
      this.root.innerHTML = `<li><a>${this.getAttribute('name')}</a></li>`
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
      console.log(this.tmpl.content.querySelectorAll('#item'));
      console.log(this.tmpl.content.querySelectorAll('ul[li]'));
      this.root.appendChild(document.importNode(this.tmpl.content, true));
    }

    connectedCallback(){

    }
  }
  window.customElements.define('tab-list', Tablist);
})();
