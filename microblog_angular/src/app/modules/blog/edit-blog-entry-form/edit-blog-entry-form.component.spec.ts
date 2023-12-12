import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { MdSnackBar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EditBlogEntryFormComponent } from './edit-blog-entry-form.component';

import { SharedModule } from '../../shared/shared.module';

import { BlogService } from '../blog.service';
import { MockBlogService } from '../blog.service.mock';

import { LoginService } from '../../auth/login/login.service';
import { MockLoginService } from '../../auth/login/login.service.mock';

import { UserService } from '../../auth/user/user.service';
import { MockUserService } from '../../auth/user/user.service.mock';

describe('EditBlogEntryFormComponent', () => {
    let component: EditBlogEntryFormComponent;
    let fixture: ComponentFixture <EditBlogEntryFormComponent>;
    let blogService: BlogService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditBlogEntryFormComponent ],
            providers: [
                { provide: BlogService, useClass: MockBlogService },
                { provide: LoginService, useClass: MockLoginService },
                { provide: UserService, useClass: MockUserService },
                { provide: ActivatedRoute,
                    useValue:
                    {
                        params: Observable.from([ {
                            'id': 'dc2a4182-71a0-4fed-98dd-22b4d5104e40'
                        } ]),
                        snapshot: {
                            url: [
                                {path: 'new'}
                            ]
                        }
                    }

                },
            ],
            imports: [
                FormsModule,
                SharedModule,
                NoopAnimationsModule,
                RouterTestingModule.withRoutes([])
            ],
        }).compileComponents();
    }));

    beforeEach(inject([ BlogService ], (_blogService) => {
        blogService = _blogService;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditBlogEntryFormComponent);
        component = fixture.componentInstance;
        // blogService.getEntry('dc2a4182-71a0-4fed-98dd-22b4d5104e40').subscribe(entry => {
        //     console.log('test setting entry to: ', entry);
        //     component.entry = entry;
        // });
        fixture.autoDetectChanges(true);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should validate the title correctly', ( ) => {
        fixture.whenStable().then(() => {
            // form is from the @ViewChild dir.
            const form = component.form.form;
            const titleControl = form.get('title');
            expect(titleControl.errors['required']).toBeTruthy();
            titleControl.setValue('A vanilla title');
            expect(titleControl.errors['required']).toBeUndefined();
            // done();
        });
    });
});
