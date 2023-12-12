import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from './model-interfaces';
import { initialUsers } from './initialUsers';

import { LOAD, ADD, EDIT, REMOVE, UserStore } from './user.store';

import debug from '../../../../debug';

@Injectable()
export class UserService {
    public users$: Observable<Array<User>>;
 
    constructor(private userStore: UserStore) {
        // pass-through as Observable
        this.users$ = userStore.users$;
        // first call loads initialUsers (mock data)
        this.findUsers();
    }

    // This is the public API:
    public saveUser(user: User): void {
        const actionType = user.id ? EDIT : ADD;
        this.userStore.dispatch({ type: actionType, data: user });
    }

    public deleteUser(id: string): void {
        this.userStore.dispatch({ type: REMOVE, data: id });
    }

    // TODO: use search params to filter data, at the moment this just return all data
    private findUsers(): Array<User> {
        // load mock data
        const users = initialUsers;
        this.userStore.dispatch({ type: LOAD, data: users });
        return this.userStore.users$.getValue();
    }

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
        if (debug) console.log('creating new empty user: ');
        this.saveUser({});
    }

}
