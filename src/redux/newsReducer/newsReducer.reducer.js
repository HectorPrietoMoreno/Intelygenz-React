
import NewsActionTypes from './news.types';

const INITIAL_STATE = {
    news: []
};

const newsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NewsActionTypes.SET_NEWS:
            return {
                ...state,
                news: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;