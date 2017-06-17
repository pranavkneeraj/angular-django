"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_js_1 = require("./app-routing.module.js");
var app_component_js_1 = require("./app.component.js");
var login_component_js_1 = require("./login.component.js");
var update_component_js_1 = require("./update.component.js");
var contact_list_component_js_1 = require("./contact-list.component.js");
var shared_service_js_1 = require("./shared.service.js");
var auth_service_js_1 = require("./auth.service.js");
var content_header_service_js_1 = require("./content.header.service.js");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var angular2_material_chips_1 = require("angular2-material-chips");
// import { MdCardModule } from '@angular/material';
// import { MdDialogModule,  } from '@angular/material';
// import {MdInputModule} from '@angular/material';
var ngx_cookie_1 = require("ngx-cookie");
console.log(material_1.MaterialModule);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            ngx_cookie_1.CookieModule.forRoot(),
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_js_1.AppRoutingModule,
            material_1.MaterialModule,
            angular2_material_chips_1.MaterialChipsModule
        ],
        declarations: [
            app_component_js_1.AppComponent,
            login_component_js_1.LoginComponent,
            update_component_js_1.UpdateComponent,
            contact_list_component_js_1.ContactListComponent,
        ],
        entryComponents: [
            update_component_js_1.UpdateComponent,
        ],
        providers: [shared_service_js_1.SharedService, auth_service_js_1.AuthService, content_header_service_js_1.ContentHeaderService],
        bootstrap: [app_component_js_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map