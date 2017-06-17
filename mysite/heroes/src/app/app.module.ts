import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module.js';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service.js';

import { AppComponent }         from './app.component.js';
import { LoginComponent } from './login.component.js';
import { UpdateComponent } from './update.component.js';
import { ContactListComponent }  from './contact-list.component.js';
import { SharedService } from './shared.service.js';
import { AuthService } from './auth.service.js';
import { ContentHeaderService } from './content.header.service.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MaterialChipsModule} from 'angular2-material-chips';
// import { MdCardModule } from '@angular/material';
// import { MdDialogModule,  } from '@angular/material';
// import {MdInputModule} from '@angular/material';
import { CookieModule } from 'ngx-cookie';
console.log(MaterialModule)
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        CookieModule.forRoot(),
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        MaterialModule,
        MaterialChipsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UpdateComponent,
        ContactListComponent,
    ],
    entryComponents: [
        UpdateComponent,
    ],
    providers: [ SharedService, AuthService,  ContentHeaderService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
