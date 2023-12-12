import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './model-interfaces';

import debug from '../../../../debug';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

export class UserStore {
    private users: Array<User>;
    public users$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);

    static guid = () => {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    dispatch(action) {
        // only place where the store is mutated
        this.users = this.reduce(this.users, action);
        // propagate the new state to all listeners
        this.users$.next(this.users);
    }

    reduce(users: Array<User>, action) {
        if (debug) console.log('received action: ', action.type, action.data);
        switch (action.type) {
        case LOAD:
            return [ ...action.data ];
        case ADD:
            if (debug) console.log('new state: ',[
                ...users,
                { ...action.data,
                    id: UserStore.guid()
                }
            ]);
            return [
                ...users,
                { ...action.data,
                    id: UserStore.guid()
                }
            ];
        case EDIT:
            const editedEntry = action.data;
            return users.map(entry => {
                if (entry.id !== editedEntry.id) {
                    return entry;
                }
                return editedEntry;
            });
        case REMOVE:
            return users.filter(entry => {
                return entry.id !== action.data
            });
        default:
            return users;
        }
    }
}