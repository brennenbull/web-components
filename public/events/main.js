(function () {
  let importDoc = document.currentScript.ownerDocument;
  class Events extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
      this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
      this.tmpl = importDoc.querySelector('template');
      this.tmpl.content.querySelector('button').addEventListener('click', this.addNum.bind(this));
      this.input
      this.output = this.tmpl.content.querySelector('#output');
      this.output.innerHTML = this.count
      this.shadowRoot.appendChild(document.importNode(this.tmpl.content, true));
      // this.shadowRoot.appendChild(this.tmpl.content)
    }
    addNum(){
      this.count++;
      this.display()
    }
    display(){
      this.output.innerHTML = this.count
    }
  }
  window.customElements.define('e-events', Events);
})()
