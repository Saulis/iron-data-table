System.register(['angular2/core'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var IronDataTable, DataTableColumn, TemplateDirective, RowTemplate, HeaderTemplate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IronDataTable = (function () {
                function IronDataTable(el) {
                    this.columnsChange = new core_1.EventEmitter(false);
                    this.filterChange = new core_1.EventEmitter(false);
                    this.itemsChange = new core_1.EventEmitter(false);
                    this.loadingChange = new core_1.EventEmitter(false);
                    this.selectedItemChange = new core_1.EventEmitter(false);
                    this.selectedItemsChange = new core_1.EventEmitter(false);
                    this.sizeChange = new core_1.EventEmitter(false);
                    this.sortOrderChange = new core_1.EventEmitter(false);
                }
                IronDataTable.prototype.columnsChanged = function (value) {
                    this.columnsChange.emit(value);
                };
                IronDataTable.prototype.filterChanged = function (value) {
                    this.filterChange.emit(value);
                };
                IronDataTable.prototype.itemsChanged = function (value) {
                    this.itemsChange.emit(value);
                };
                IronDataTable.prototype.loadingChanged = function (value) {
                    this.loadingChange.emit(value);
                };
                IronDataTable.prototype.selectedItemChanged = function (value) {
                    this.selectedItemChange.emit(value);
                };
                IronDataTable.prototype.selectedItemsChanged = function (value) {
                    this.selectedItemsChange.emit(value);
                };
                IronDataTable.prototype.sizeChanged = function (value) {
                    this.sizeChange.emit(value);
                };
                IronDataTable.prototype.sortOrderChanged = function (value) {
                    this.sortOrderChange.emit(value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], IronDataTable.prototype, "columnsChange", void 0);
                __decorate([
                    core_1.HostListener('columns-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "columnsChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
                ], IronDataTable.prototype, "filterChange", void 0);
                __decorate([
                    core_1.HostListener('filter-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "filterChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
                ], IronDataTable.prototype, "itemsChange", void 0);
                __decorate([
                    core_1.HostListener('items-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "itemsChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
                ], IronDataTable.prototype, "loadingChange", void 0);
                __decorate([
                    core_1.HostListener('loading-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "loadingChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_e = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _e) || Object)
                ], IronDataTable.prototype, "selectedItemChange", void 0);
                __decorate([
                    core_1.HostListener('selected-item-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "selectedItemChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_f = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _f) || Object)
                ], IronDataTable.prototype, "selectedItemsChange", void 0);
                __decorate([
                    core_1.HostListener('selected-items-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "selectedItemsChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_g = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _g) || Object)
                ], IronDataTable.prototype, "sizeChange", void 0);
                __decorate([
                    core_1.HostListener('size-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "sizeChanged", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_h = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _h) || Object)
                ], IronDataTable.prototype, "sortOrderChange", void 0);
                __decorate([
                    core_1.HostListener('sort-order-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], IronDataTable.prototype, "sortOrderChanged", null);
                IronDataTable = __decorate([
                    core_1.Directive({ selector: 'iron-data-table' }), 
                    __metadata('design:paramtypes', [(typeof (_j = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _j) || Object])
                ], IronDataTable);
                return IronDataTable;
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            })();
            exports_1("IronDataTable", IronDataTable);
            DataTableColumn = (function () {
                function DataTableColumn(el) {
                    this.filterValueChange = new core_1.EventEmitter(false);
                    var table = el.nativeElement.parentElement;
                    Polymer.dom(table).appendChild(el.nativeElement);
                }
                DataTableColumn.prototype.filterValueChanged = function (value) {
                    this.filterValueChange.emit(value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], DataTableColumn.prototype, "filterValueChange", void 0);
                __decorate([
                    core_1.HostListener('filter-value-changed', ['$event.detail.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], DataTableColumn.prototype, "filterValueChanged", null);
                DataTableColumn = __decorate([
                    core_1.Directive({ selector: 'data-table-column' }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
                ], DataTableColumn);
                return DataTableColumn;
                var _a, _b;
            })();
            exports_1("DataTableColumn", DataTableColumn);
            TemplateDirective = (function () {
                function TemplateDirective(_templateRef, _viewContainer) {
                    this._templateRef = _templateRef;
                    this._viewContainer = _viewContainer;
                    var columnElement = this._viewContainer.element.nativeElement.parentElement;
                    this.setTemplatizer(this._viewContainer, function (parentElement) {
                        var viewRef = this._viewContainer.createEmbeddedView(this._templateRef);
                        for (var i = 0; i < viewRef.rootNodes.length; i++) {
                            Polymer.dom(parentElement).appendChild(viewRef.rootNodes[i]);
                        }
                        Polymer.dom.flush();
                        return {
                            bind: function (data) {
                                for (var prop in data) {
                                    viewRef.setLocal(prop, data[prop]);
                                }
                            }
                        };
                    }.bind(this));
                }
                return TemplateDirective;
            })();
            RowTemplate = (function (_super) {
                __extends(RowTemplate, _super);
                function RowTemplate(templateRef, viewContainer) {
                    _super.call(this, templateRef, viewContainer);
                }
                RowTemplate.prototype.setTemplatizer = function (viewContainer, fn) {
                    var columnElement = viewContainer.element.nativeElement.parentElement;
                    columnElement.templatizeRow = fn;
                };
                RowTemplate = __decorate([
                    core_1.Directive({ selector: '[rowTemplate]' }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object])
                ], RowTemplate);
                return RowTemplate;
                var _a, _b;
            })(TemplateDirective);
            exports_1("RowTemplate", RowTemplate);
            HeaderTemplate = (function (_super) {
                __extends(HeaderTemplate, _super);
                function HeaderTemplate(templateRef, viewContainer) {
                    _super.call(this, templateRef, viewContainer);
                }
                HeaderTemplate.prototype.setTemplatizer = function (viewContainer, fn) {
                    var columnElement = viewContainer.element.nativeElement.parentElement;
                    columnElement.templatizeHeader = fn;
                };
                HeaderTemplate = __decorate([
                    core_1.Directive({ selector: '[headerTemplate]' }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object])
                ], HeaderTemplate);
                return HeaderTemplate;
                var _a, _b;
            })(TemplateDirective);
            exports_1("HeaderTemplate", HeaderTemplate);
        }
    }
});
//# sourceMappingURL=core.js.map