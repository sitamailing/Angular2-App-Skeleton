import {NgModule}      from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {ContactFormComponent} from './contactForm.component';

@NgModule({
    imports: [
        FormsModule
    ],
    exports : [ContactFormComponent],
    declarations: [
        ContactFormComponent
    ],
})
export class ContactModule {
}