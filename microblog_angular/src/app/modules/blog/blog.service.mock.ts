import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';


@Injectable()
export class MockBlogService {
    public entries$: Observable<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>(initialEntries);

    static guid = () => {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    constructor() {
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
        console.log('creating new empty entry: ');
    }

}
