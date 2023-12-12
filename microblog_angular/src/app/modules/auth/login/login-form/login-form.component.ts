import { Component, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../login.service';
import { NavigationService } from '../../../shared/navigation.service';

import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'ck-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: [ './login-form.component.styl' ],
})
export class LoginFormComponent {
    // Needed for unit tests
    @ViewChild(NgForm) form: NgForm;

    constructor(
        private navigationService: NavigationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loginService: LoginService,
        private snackBar: MdSnackBar
        ) { }

    onSubmit(formValue: any) {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        const success = this.loginService.login(formValue.name, formValue.password);
        if (success) {
            this.navigationService.navigateHome(queryParams);
            this.snackBar.open(`Welcome, ${formValue.name}. You have logged in successfully.`,
                'OK',
                {
                    duration: 5000
                });
        } else {
            this.snackBar.open('Login failed.', 'OK', { duration: 5000 });
        }
        this.form.reset();
    }

    onCancel(cancel: boolean) {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        this.form.reset();
        this.navigationService.navigateBack(queryParams);
    }

}

