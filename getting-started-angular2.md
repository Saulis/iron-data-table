## Getting started with `<iron-data-table>` in Angular 2

1. Install the package with `bower install iron-data-table`
> Planning on doing also a NPM package if needed, but currently Bower is the best way to keep the dependencies of `<iron-data-table>` up-to-date.

2. Import the Web Components Polyfill and `<iron-data-table>` in your main page, e.g. `index.html`
```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
<link rel="import" href="bower_components/iron-data-table/iron-data-table.html">
<link rel="import" href="bower_components/iron-data-table/default-styles.html">
```
> `default-styles.html` is optional – use to it get quickly started with a pre-styled table.

3. Map directives into your configuration:
```ts
System.config({
      map: {
        'iron-data-table': 'bower_components/iron-data-table/directives'
      },
      packages: {
        app: {
          format: 'register',
          defaultExtension: 'js'
        },
        'iron-data-table': {
          defaultExtension: 'js'
        }
      }
    });
```

4. Add imports into your component:
```ts
import {IronDataTable, DataTableColumn, RowTemplate, HeaderTemplate} from 'iron-data-table/core';
```

5. Add `<iron-data-table>` into your template:
```ts
@Component({
  selector: 'my-app',
  template: `
  <p>Heroes:</p>
  <iron-data-table [items]="heroes" selection-enabled [(selectedItem)]="myHero">
    <data-table-column name="Hero">
      <div *rowTemplate="#item=item">{{item.name}}</div>
    </data-table-column>
  </iron-data-table>
`,
  directives: [IronDataTable, DataTableColumn, RowTemplate]
})
```

#### Styling with CSS mixins
If you want to use the custom CSS properties or mixins like `iron-data-table-cell-height`, you need to use a `<style>` element placed in your main page:
```html
<style is="custom-style">
  iron-data-table {
    --iron-data-table-cell-height: 100px;
  }
</style>
```

See [API docs](http://saulis.github.io/iron-data-table/) for more about mixins.
