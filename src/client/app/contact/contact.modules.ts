import {NgModule}      from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common'

import {ContactFormComponent} from './contactForm.component';

@NgModule({
    imports: [
        FormsModule, CommonModule
    ],
    exports : [ContactFormComponent],
    declarations: [
        ContactFormComponent
    ],
})
export class ContactModule {
}