import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroService } from './heroes/shared/hero.service';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { HeroAddComponent } from './heroes/hero-add/hero-add.component';

import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        AlertModule.forRoot()
        ],
    declarations: [
        AppComponent,
        HeroListComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroAddComponent,
        DashboardComponent
    ],
    exports: [ AppComponent ],
    entryComponents: [ AppComponent ],
    providers: [ HeroService ], // put providers here to have it available everywhere
    bootstrap: [ AppComponent ]
})
export class AppModule { }
