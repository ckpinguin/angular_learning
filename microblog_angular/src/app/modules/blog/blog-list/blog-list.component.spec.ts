import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { BlogListComponent } from './blog-list.component';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { BlogService } from '../blog.service';
import { MockBlogService } from '../blog.service.mock';

describe('BlogListComponent', () => {
    let component: BlogListComponent;
    let fixture: ComponentFixture <BlogListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BlogListComponent, BlogItemComponent ],
            providers: [
                { provide: BlogService, useClass: MockBlogService },
            ],
            imports: [
                FormsModule,
                SharedModule,
                RouterTestingModule.withRoutes([])
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
