import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../shared/shared.module';

import { BlogItemComponent } from './blog-item.component';
import { MockBlogService } from '../blog.service.mock';
import { BlogService } from '../blog.service';

describe('BlogItemComponent', () => {
    let component: BlogItemComponent;
    let fixture: ComponentFixture<BlogItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BlogItemComponent ],
            providers: [
                { provide: BlogService, useClass: MockBlogService },
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
                SharedModule
            ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
