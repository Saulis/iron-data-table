## `<iron-data-table>`
![](https://travis-ci.org/Saulis/iron-data-table.svg?branch=master)

[Demos and API Documentation](https://saulis.github.io/iron-data-table/)

![](iron-data-table.png)

`iron-data-table` displays a table or a grid of data.
It builds on top of `iron-list`, which provides the foundation for features like
virtual scrolling and templating.

It contains an array of `data-table-column` elements, which are used to define a template
for the cells on each row item.

Rows use flex layout which enables cells to fit the available space.

Cell elements are placed outside the shadow root of the `iron-data-table` which
allows them to be styled by the user.

### Template model
Column templates should bind to template models of the following structure:
```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  item: {}         // user data corresponding to items[index]
}
```
For example, given the following `data` array:
##### data.json
```js
[
  {"name": {
    "title": "miss",
    "first": "donna",
    "last": "davis"
  }},
  {"name": {
    "title": "mr",
    "first": "samuel",
    "last": "kelley"
  }},
  {"name": {
    "title": "ms",
    "first": "katie",
    "last": "butler"
  }}
]
```
The following code would render the table (note the name and checked properties are
bound from the model object provided to the template scope):
```html
<template is="dom-bind">
  <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
  <iron-data-table items="[[data]]">
    <data-table-column name="First Name">
      <template>[[item.name.first]]</template>
    </data-table-column>
    <data-table-column name="Last Name">
      <template>[[item.name.last]]</template>
    </data-table-column>
  </iron-data-table>
</template>
```

## Features (1.0)
- Virtual, 'infinite' scrolling provided by `<iron-list>`
- Data filtering
- Data sorting
- Item selection
- Template support for each column
- Two-way binding support
- Custom styling support for templates
- Native Shadow DOM support
- Column manipulation, resizing, hiding, reordering

## Roadmap (1.x)
In random order: (please let me know if something is missing or misplaced)
- Multi-select
- Lazy Loading
- Custom Header / Footer templates
- Frozen Columns
- Drag and Drop Column Resizing
- Drag and Drop Column Reordering

# Contributing
I'd appreciate any help and feedback on the component. If you have any ideas, opinions, nitpicks or anything at all about it, please don't hesitate to send an issue, PR or a message in the Gitter chat.

Currently, I would be very interested in hearing comments especially about the *styling mixins and the horizontal scrolling*!
