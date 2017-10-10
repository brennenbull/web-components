# web-components

## A Repo for collecting and building reusable web components.
  ### NOTE
  * [components will require polly fill support.](https://www.webcomponents.org/)
  * [check support tables](http://caniuse.com/#search=web%20components)


## Lessons Learned
  1. Don't use!!
    `this.root.appendChild(document.importNode(this.tmpl.content, true));` this line imports the template but it makes it very difficult to add any kind of dynamic inputs or dynamic display.
    Use `this.root.appendChild(this.tmpl.content)`

  2. When animating content based on `.offsetWidth` or `.getBoundingClientRect` store a reference to the elements that require these methods. ex:
  ```javascript
    (function() {
      let importDoc = document.currentScript.ownerDocument;
      class MyElement extends HTMLElement{
        constructor(){
          super();
          this.attachShadow({mode: 'open'});
          this.tmpl = importDoc.querySelector('template').content;
          //store reference to moving elements
          this.slider = this.tmpl.querySelector('#slider')
          this.shadowRoot.appendChild(this.tmpl)
        }
        connectedCallback(){
          let width = this.tmpl.querySelector('#slider').offsetWidth
          // will throw an error (can't read .offsetWidth of null)
          let width = this.slider.offsetWidth
          //will work
        }
      }
    })
    ```
