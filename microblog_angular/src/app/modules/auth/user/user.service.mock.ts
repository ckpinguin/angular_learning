import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from './model-interfaces';
import { initialUsers } from './initialUsers';

@Injectable()
export class MockUserService {
    public users$: Observable<Array<User>> = new BehaviorSubject<Array<User>>([initialUsers]);

    constructor() {
    }

    // This is the public API:
    public getUser(id: number | string): Observable<User> {
        return this.users$.map(list => list
            .find(user => user.id === id)
        );
    }

    public getUserByName(name: string): Observable<User> {
        return this.users$.map(list => list
            .find(user => user.name === name)
        );
    }

    public getLastUser(): Observable<User> {
        return this.users$.map(list => list[list.length - 1]);
    }

    public createNewUser(): void {
        console.log('creating new empty user: ');
    }
    
}
