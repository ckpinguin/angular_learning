import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { UserService } from '../user/user.service';
import { MockUserService } from '../user/user.service.mock';


describe('LoginService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LoginService,
                { provide: UserService, useClass: MockUserService },
            ]
        });
    });

    it('should inject', inject([ LoginService ], (service: LoginService) => {
        expect(service).toBeTruthy();
    }));
});
