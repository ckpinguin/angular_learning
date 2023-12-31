import { BlogEntry } from './model-interfaces';

export const initialEntries = [
    {
        id: 'dc2a4182-71a0-4fed-98dd-22b4d5104e40',
        title: 'Testentry',
        text: 'Just a little\n test',
        image: 'cat1.jpg',
        date: "2017-06-05T14:46:23.977Z",
        user: 'a8655eb5-ca5c-459a-a094-d0e704e80a69',
        author: 'The test user himself',
        tags: []
    },
    {
        id: 'e16d3ee5-f6ff-4638-94fe-1dcf6fba0b4c',
        title: 'another one',
        text: 'Cats always work :-)',
        image: 'cat2.gif',
        date: "2017-05-05T12:04:01.000Z",
        tags: [],
        user: 'be7f7340-2c3f-4534-9ec2-cbcc9ddccc2d',
        author: 'administrator'
    },
    {
        id: '54726e40-3297-11e7-93ae-92361f002671',
        title: 'jumpy cat',
        text: 'Told ya, everybody loves cats',
        image: null,
        date: "2016-12-31T11:10:11.000Z",
        tags: [],
        user: 'a8655eb5-ca5c-459a-a094-d0e704e80a69',
        author: 'Test user\'s alias'
    }
];
