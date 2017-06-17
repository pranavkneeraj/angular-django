import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { MdDialogTitle } from '@angular/material';
@Component({
    selector: 'confirm-dialog',
    templateUrl: './ng/src/app/contact-form.component.html',
})

export class UpdateComponent {
    tags:string[]  = ['AngularJS','Angluar2']
    constructor(public dialogRef: MdDialogRef<UpdateComponent>) {


    }
}
