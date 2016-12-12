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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var header_modules_js_1 = require("../header/header.modules.js");
var home_modules_1 = require("../home/home.modules");
var home_component_1 = require("../home/home.component");
var about_component_1 = require("../about/about.component");
var about_modules_1 = require("../about/about.modules");
var contactForm_component_1 = require("../contact/contactForm.component");
var contact_modules_1 = require("../contact/contact.modules");
var appRoutes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contactForm_component_1.ContactFormComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, header_modules_js_1.HeaderModule, home_modules_1.HomeModule, about_modules_1.AboutModule, contact_modules_1.ContactModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.modules.js.map