import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

// books key, BooksReducer value
// import BooksReducer imports the default function from reducer_books

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer
