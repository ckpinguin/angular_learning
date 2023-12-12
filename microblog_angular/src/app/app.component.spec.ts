import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogListComponent } from './modules/blog/blog-list/blog-list.component';
import { BlogItemComponent } from './modules/blog/blog-item/blog-item.component';
import { EditBlogEntryFormComponent } from './modules/blog/edit-blog-entry-form/edit-blog-entry-form.component';

import { SharedModule } from './modules/shared/shared.module';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BlogListComponent,
                BlogItemComponent,
                EditBlogEntryFormComponent,
            ],
            imports: [
                FormsModule,
                SharedModule,
                RouterTestingModule.withRoutes([])
            ],

        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should have a div tag with class title', async(() => {
        const titleDiv = compiled.querySelector('div /deep/ .title');
        expect(titleDiv).toBeDefined;
    }));

    it('should have a h1 tag within the title div', async(() => {
        const titleDiv = compiled.querySelector('div /deep/ .title > h1');
        expect(titleDiv).toBeDefined;
    }));

});
