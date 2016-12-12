import {Component} from '@angular/core';

import {Contact}    from './contact';

@Component({
    selector: 'contact-form',
    templateUrl: `src/client/app/contact/contactForm.view.html`
})
export class ContactFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Contact('q', 'q', 'q', 'q');
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}