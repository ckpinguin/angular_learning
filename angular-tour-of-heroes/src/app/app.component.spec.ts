import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroService } from './heroes/shared/hero.service';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { HeroAddComponent } from './heroes/hero-add/hero-add.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, FormsModule
            ],
            declarations: [ // TODO: Mock some components!
                AppComponent, HeroListComponent, HeroDetailComponent,
                DashboardComponent, HeroSearchComponent, HeroAddComponent
            ],
        }).compileComponents();
  }));

  it('should create the app', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
        done();
    });
  });

  it(`should have as title 'Tour of Heroes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
});
