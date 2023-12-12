import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserStore } from './user.store';

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ UserService, UserStore ]
        });
    });

    it('should inject', inject([ UserService ], (service: UserService) => {
        expect(service).toBeTruthy();
    }));
});
