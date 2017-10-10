(function () {
  let importDoc = document.currentScript.ownerDocument;

  class ProjSlider extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.tmpl = importDoc.querySelector('template');
      this.contain = this.tmpl.content.querySelector('.ct')
      this.discrip = this.tmpl.content.querySelector('.ct_disc')
      this.slider = this.tmpl.content.querySelector('.ct_slider')
      this.sliding = false;

      this.tmpl.content.querySelector('.ct_slider').addEventListener('mousedown',()=>{
        this.sliding = true;
      });
      this.addEventListener('mouseup', ()=>{
        this.sliding = false;
      })
      this.addEventListener('moumouseleave', ()=>{
        this.sliding = false;
      })
      this.tmpl.content.querySelector('.ct_disc').addEventListener('click',()=>{
        this.slide(850)
      })

      this.addEventListener('mousemove', (e)=>{
        if (!this.sliding) return;
        let x = e.pageX
        x -= this.contain.getBoundingClientRect().left;
        this.slide(x);
      });
    }

    slide(x) {
      console.log(x);
      console.log(this.contain.offsetWidth);
      let transform = Math.max(8,(Math.min(x, this.contain.offsetWidth-2)));
      this.discrip.style.width = transform + "px";
      this.slider.style.left = transform-4 + "px";
    }

    connectedCallback(){
      this.shadowRoot.appendChild(this.tmpl.content);
      this.slide(500)
    }
  }
  window.customElements.define('proj-slider', ProjSlider);
})();
