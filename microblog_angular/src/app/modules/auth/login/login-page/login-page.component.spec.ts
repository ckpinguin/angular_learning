import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../../shared/shared.module';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginService } from '../login.service';
import { UserService } from '../../user/user.service';
import { MockUserService } from '../../user/user.service.mock';
import { NavigationService } from '../../../shared/navigation.service';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginPageComponent, LoginFormComponent ],
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
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
