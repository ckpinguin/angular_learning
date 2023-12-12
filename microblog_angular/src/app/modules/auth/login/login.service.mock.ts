import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from '../user/model-interfaces';
import { UserService } from '../user/user.service';

import md5 from 'md5';

@Injectable()
export class MockLoginService {
    private _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>({});
    public readonly currentUser: Observable<User> = this._currentUser.asObservable();

    private loggedIn = false;

    constructor(private userService: UserService) { }

    login(name: string, password: string): boolean {
        let result = false;
        this.userService.getUserByName(name).subscribe(user => {
            if (md5(password) === user.password) {
                console.log('password correct, logging in');
                this.setCurrentUser(user.id);
                this.loggedIn = true;
                // this is ignored?
                result = true;
            } else {
                console.log('password wrong!');
                result = false;
            }
        },
            (err) => { result = false; }
        );
        return result;
    }

    logout(): void {
        this.loggedIn = false;
    }

    setCurrentUser(id: string): void {
        this.userService.getUser(id).subscribe(user => {
            this._currentUser.next(user);
        });
    }

    getCurrentUser(): string {
        return this._currentUser.getValue().id;
    }

    getCurrentUserName(): string {
        return this._currentUser.getValue().name;
    }

    // TODO: rewrite this to work with subscribing
    isLoggedIn(): boolean {
        return this.loggedIn;
    }

}
