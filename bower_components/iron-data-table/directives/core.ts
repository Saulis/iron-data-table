import {Directive, ElementRef, TemplateRef, ViewContainerRef, Output, HostListener, EventEmitter} from '@angular/core';

@Directive({ selector: 'iron-data-table' })
export class IronDataTable {
  constructor(el: ElementRef) {
  }

  @Output() columnsChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('columns-changed', ['$event.detail.value'])
  columnsChanged(value) {
    this.columnsChange.emit(value);
  }

  @Output() filterChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('filter-changed', ['$event.detail.value'])
  filterChanged(value) {
    this.filterChange.emit(value);
  }

  @Output() itemsChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('items-changed', ['$event.detail.value'])
  itemsChanged(value) {
    this.itemsChange.emit(value);
  }

  @Output() loadingChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('loading-changed', ['$event.detail.value'])
  loadingChanged(value) {
    this.loadingChange.emit(value);
  }

  @Output() selectedItemChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('selected-item-changed', ['$event.detail.value'])
  selectedItemChanged(value) {
    this.selectedItemChange.emit(value);
  }

  @Output() selectedItemsChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('selected-items-changed', ['$event.detail.value'])
  selectedItemsChanged(value) {
    this.selectedItemsChange.emit(value);
  }

  @Output() sizeChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('size-changed', ['$event.detail.value'])
  sizeChanged(value) {
    this.sizeChange.emit(value);
  }

  @Output() sortOrderChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('sort-order-changed', ['$event.detail.value'])
  sortOrderChanged(value) {
    this.sortOrderChange.emit(value);
  }
}

@Directive({ selector: 'data-table-column' })
export class DataTableColumn {
  @Output() filterValueChange: EventEmitter<any> = new EventEmitter(false);

  constructor(el: ElementRef) {
    var table = el.nativeElement.parentElement;
    Polymer.dom(table).appendChild(el.nativeElement);
  }

  @HostListener('filter-value-changed', ['$event.detail.value'])
  filterValueChanged(value) {
    this.filterValueChange.emit(value);
  }
}

abstract class TemplateDirective {
  abstract setTemplatizer(viewContainer : ViewContainerRef, fn: Function);

  constructor(
    private _templateRef: TemplateRef,
    private _viewContainer: ViewContainerRef
    ) {
    let columnElement: HTMLElement = this._viewContainer.element.nativeElement.parentElement;

    this.setTemplatizer(this._viewContainer, function(parentElement) {
      var viewRef = this._viewContainer.createEmbeddedView(this._templateRef);

      for (var i = 0; i < viewRef.rootNodes.length; i++) {
        Polymer.dom(parentElement).appendChild(viewRef.rootNodes[i]);
      }

      Polymer.dom.flush();

      return {
        bind: function(data) {
          for (var prop in data) {
            viewRef.setLocal(prop, data[prop]);
          }
        }
      };
    }.bind(this));
  }
}

@Directive({ selector: '[rowTemplate]' })
export class RowTemplate extends TemplateDirective {
  constructor(
    templateRef: TemplateRef,
    viewContainer: ViewContainerRef
    ) {
    super(templateRef, viewContainer);
  }

  setTemplatizer(viewContainer: ViewContainerRef, fn: Function) {
    let columnElement: HTMLElement = viewContainer.element.nativeElement.parentElement;

    columnElement.templatizeRow = fn;
  }
}

@Directive({ selector: '[headerTemplate]' })
export class HeaderTemplate extends TemplateDirective {
  constructor(
    templateRef: TemplateRef,
    viewContainer: ViewContainerRef
    ) {
    super(templateRef, viewContainer);
  }

  setTemplatizer(viewContainer: ViewContainerRef, fn: Function) {
    let columnElement: HTMLElement = viewContainer.element.nativeElement.parentElement;

    columnElement.templatizeHeader = fn;
  }
}
