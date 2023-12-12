import { Component, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
    selector: 'ck-show-error',
    templateUrl: './show-error.component.html',
    styleUrls: [ './show-error.component.styl' ]
})
export class ShowErrorComponent {
    @Input('path') controlPath;
    @Input('text') displayName = '';

    constructor(private ngForm: NgForm) { }

    get errorMessages(): string[] {
        const messages = [];
        const form: FormGroup = this.ngForm.form;
        const control = form.get(this.controlPath);
        if ( !control || !(control.touched) || !(control.errors)) {
            return null;
        }
        for (const code in control.errors) {
            const hasCode = control.errors.hasOwnProperty(code);
            if (hasCode) {
                const error = control.errors[code];
                let message = '';
                switch (code) {
                case 'required':
                    message = `${this.displayName} ist ein Pflichtfeld`;
                    break;
                case 'minlength':
                    message = `${this.displayName} muss mindestens
                                   ${error.requiredLength}  Zeichen enthalten`;
                    break;
                default:
                    message = `${name} ist nicht gültig`;
                }
                messages.push(message);
            }
        }
        return messages;
    }

}
