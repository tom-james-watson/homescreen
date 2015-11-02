import { SAVE_LAYOUT, ADD_LINK } from '../constants/ActionTypes';

const initialState = [];

//const initialState = [{
//    layout: {x: 1, y: 1, w: 1, h: 1},
//    id: 1,
//    name: 'The Guardian',
//    url: 'http://theguardian.com',
//}];

export default function todos(state=initialState, action) {
    switch (action.type) {
        case ADD_LINK:
            console.log(action);
            return [{
                id: state.reduce((maxId, link) => Math.max(link.id, maxId), -1) + 1,
                layout: {x: 1, y: 1, w: 1, h: 1},
                name: action.name,
                url: action.url,
            }, ...state];

        default:
            return state;
    }
}
