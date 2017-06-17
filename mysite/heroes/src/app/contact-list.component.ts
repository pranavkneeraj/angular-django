import { Component , OnInit } from '@angular/core';
import { MdDialog,MdDialogRef } from '@angular/material';
import { UpdateComponent } from './update.component.js';



@Component({
    moduleId: module.id,
    selector: 'contact-list',
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent {

    constructor(public dialog: MdDialog) {

    }

    public openDialog() {
        console.log('in modal');
        let dialogRef =  this.dialog.open(UpdateComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log('asdsadasd')
        });
    }

}
