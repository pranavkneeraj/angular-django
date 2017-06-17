import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component.js';
import { DashboardComponent }   from './dashboard.component.js';
import { HeroesComponent }      from './heroes.component.js';
import { HeroDetailComponent }  from './hero-detail.component.js';
import { ContactListComponent }  from './contact-list.component.js';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contact-list', component: ContactListComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
