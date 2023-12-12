import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import debug from '../../../debug';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';

import { LOAD, ADD, EDIT, REMOVE, BlogStore } from './blog.store';

@Injectable()
export class BlogService {
    public entries$: Observable<Array<BlogEntry>>;

    static guid = () => {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    constructor(private blogStore: BlogStore) {
        // pass-through as Observable
        this.entries$ = blogStore.entries$;
        // first call loads initialEntries (mock data)
        this.findEntries();
    }

    // This is the public API:
    public saveEntry(entry: BlogEntry): void {
        const actionType = entry.id ? EDIT : ADD;
        this.blogStore.dispatch({ type: actionType, data: entry });
    }

    public deleteEntry(id: string): void {
        this.blogStore.dispatch({ type: REMOVE, data: id });
    }

    // TODO: use search params to filter data, at the moment this just return all data
    public findEntries(): Array<BlogEntry> {
        // load mock data
        const entries = initialEntries;
        this.blogStore.dispatch({ type: LOAD, data: entries });
        return this.blogStore.entries$.getValue();
    }

    public getEntry(id: number | string): Observable<BlogEntry> {
        return this.entries$.map(list => list
            .find(entry => entry.id === id)
        );
    }

    public getLastEntry(): Observable<BlogEntry> {
        return this.entries$.map(list => list[list.length - 1]);
    }

    public createNewEntry(): void {
        if (debug) console.log('creating new empty entry: ');
        this.saveEntry({});
    }

}
