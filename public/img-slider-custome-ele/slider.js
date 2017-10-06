//self registering the element
(function(){
  //selcting the html containing the templ
  var importDoc = document.currentScript.ownerDocument;



  class ImgSlider extends HTMLElement{
    constructor(){
      super();
      var root = this.attachShadow({mode: 'open'});
      var tmpl = importDoc.querySelector('template');
      root.appendChild(document.importNode(tmpl.content, true));

    }
    //adding template as shadow-ele when import is exicuted
    //setting root

    connectedCallback(){}

  }

  window.customElements.define('img-slider', ImgSlider)
})();
