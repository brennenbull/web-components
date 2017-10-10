# web-components

## A Repo for collecting and building reusable web components.
  ### NOTE
  * [components will require polly fill support.](https://www.webcomponents.org/)
  * [check support tables](http://caniuse.com/#search=web%20components)


## Lessons Learned
  1. Don't use!!
    `this.root.appendChild(document.importNode(this.tmpl.content, true));` this line imports the template but it makes it very difficult to add any kind of dynamic inputs or dynamic display.

    Use `this.root.appendChild(this.tmpl.content)`
