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
var material_1 = require("@angular/material");
var update_component_js_1 = require("./update.component.js");
var ContactListComponent = (function () {
    function ContactListComponent(dialog) {
        this.dialog = dialog;
    }
    ContactListComponent.prototype.openDialog = function () {
        console.log('in modal');
        var dialogRef = this.dialog.open(update_component_js_1.UpdateComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('asdsadasd');
        });
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-list',
        templateUrl: './contact-list.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map