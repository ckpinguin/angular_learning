import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../../shared/shared.module';

import { LoginFormComponent } from './login-form.component';

import { UserService } from '../../user/user.service';
import { MockUserService } from '../../user/user.service.mock';
import { LoginService } from '../login.service';
import { NavigationService } from '../../../shared/navigation.service';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [ LoginFormComponent ],
                providers: [
                    { provide: LoginService, useClass: LoginService },
                    { provide: UserService, useClass: MockUserService },
                    { provide: NavigationService, useClass: NavigationService },
                ],
                imports: [
                    SharedModule,
                    RouterTestingModule.withRoutes([])
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
