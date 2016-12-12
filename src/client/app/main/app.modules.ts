import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent}   from './app.component';
import {HeaderModule} from '../header/header.modules.js';
import {HomeModule} from '../home/home.modules';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {AboutModule} from '../about/about.modules';
import {ContactFormComponent} from '../contact/contactForm.component';
import {ContactModule} from '../contact/contact.modules';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [BrowserModule, HeaderModule, HomeModule, AboutModule, ContactModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
