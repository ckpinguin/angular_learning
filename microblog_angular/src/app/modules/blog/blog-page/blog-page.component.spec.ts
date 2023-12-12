import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';

import { SharedModule } from '../../shared/shared.module';

import { BlogService } from '../blog.service';
import { MockBlogService } from '../blog.service.mock';

describe('BlogPageComponent', () => {
    let component: BlogPageComponent;
    let fixture: ComponentFixture<BlogPageComponent>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BlogPageComponent ],
            providers: [
                { provide: BlogService, useClass: MockBlogService },
                { provide: APP_BASE_HREF, useValue: '/' },
                { provide: ActivatedRoute, useValue: {
                    snapshot: {
                        data: {
                            title: 'Blog'
                        }
                    }
                }}
            ],
            imports: [
                SharedModule,
                RouterTestingModule.withRoutes([
                    { path: '', component: BlogPageComponent, data: { title: 'Blog' }}
                ])
            ]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogPageComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render \'Blog\' in a h1 tag', async(() => {
        console.log('compiled: ', compiled);
        const titleText = compiled.querySelector('div /deep/ .title > h1').textContent;
        expect(titleText).toContain('Blog');
    }));
});
