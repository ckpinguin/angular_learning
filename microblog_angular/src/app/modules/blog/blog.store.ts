import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import debug from '../../../debug';

import { BlogEntry } from './model-interfaces';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

export class BlogStore {
    private entries: Array<BlogEntry>;
    public entries$: BehaviorSubject<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>([]);

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
        this.entries = this.reduce(this.entries, action);
        // propagate the new state to all listeners
        this.entries$.next(this.entries);
    }

    reduce(entries: Array<BlogEntry>, action) {
        if (debug) console.log('received action: ', action.type, action.data);
        switch (action.type) {
        case LOAD:
            return [ ...action.data ];
        case ADD:
            if (debug) console.log('new state: ',[
                ...entries,
                { ...action.data,
                    id: BlogStore.guid()
                }
            ]);
            return [
                ...entries,
                { ...action.data,
                    id: BlogStore.guid()
                }
            ];
        case EDIT:
            const editedEntry = action.data;
            return entries.map(entry => {
                if (entry.id !== editedEntry.id) {
                    return entry;
                }
                return editedEntry;
            });
        case REMOVE:
            return entries.filter(entry => {
                return entry.id !== action.data
            });
        default:
            return entries;
        }
    }
}