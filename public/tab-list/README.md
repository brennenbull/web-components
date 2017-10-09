# tab-list components also know as dropdown menu
## Component Includes

1.`<tab-list>`
  +Use label='name' where name is the menu name. ie(About, Contact, News).
  +Use the slot='item' to add new items to the dropdown.
  +The item slot currently supports use of <tab-item> and <a>.

2.`<tab-item>`
  +Use name='name' attribute to git the dropdown menu items names.
  +Use the href='/#' attribute to set href.

##TODO:
  - [ ] add styling to buttons;
  - [ ] check performance;
  - [ ] add better supports for list children;
  - [ ] make aria flags and tab index;
