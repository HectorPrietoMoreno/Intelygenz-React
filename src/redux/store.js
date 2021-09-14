import { createStore } from 'redux';
import newsReducer from './newsReducer/newsReducer.reducer';

const store = createStore(newsReducer);

export default store;