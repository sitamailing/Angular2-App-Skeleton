"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var header_component_1 = require("./header.component");
var menu_modules_1 = require("./menu/menu.modules");
var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    core_1.NgModule({
        imports: [menu_modules_1.MenuModule],
        exports: [header_component_1.HeaderComponent],
        declarations: [header_component_1.HeaderComponent]
    }),
    __metadata("design:paramtypes", [])
], HeaderModule);
exports.HeaderModule = HeaderModule;
//# sourceMappingURL=header.modules.js.map