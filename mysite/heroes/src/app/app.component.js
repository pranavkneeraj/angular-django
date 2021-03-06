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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_service_js_1 = require("./shared.service.js");
var ngx_cookie_1 = require("ngx-cookie");
var AppComponent = (function () {
    function AppComponent(router, elm, _sharedService, _cookieService) {
        this.router = router;
        this._sharedService = _sharedService;
        this._cookieService = _cookieService;
        this.title = 'Conatct Info';
        _sharedService.api_url = elm.nativeElement.getAttribute('api_url');
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this._cookieService.get('token')) {
            console.log('in redirect');
            this.router.navigate(['/login']);
        }
        else {
            console.log('redirect to contact list');
            this.router.navigate(['/contact-list']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./ng/src/app/app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.ElementRef, shared_service_js_1.SharedService, ngx_cookie_1.CookieService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map