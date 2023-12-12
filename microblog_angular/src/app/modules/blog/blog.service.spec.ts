import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { BlogStore } from './blog.store';

describe('BlogServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ BlogService, BlogStore ]
        });
    });

    it('should inject', inject([ BlogService ], (service: BlogService) => {
        expect(service).toBeTruthy();
    }));
});
