import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import BooksReducer from './books';
import OrderReducer from './order';

const createrRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  books: BooksReducer,
  order: OrderReducer
})

export default createrRootReducer;