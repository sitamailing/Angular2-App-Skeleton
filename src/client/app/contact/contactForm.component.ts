import {Component} from '@angular/core';

import {Contact}    from './contact';

@Component({
    selector: 'contact-form',
    templateUrl: `src/client/app/contact/contactForm.view.html`
})
export class ContactFormComponent {
    model = new Contact('First Name', 'Last Name', 'Email', 'Message');
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}