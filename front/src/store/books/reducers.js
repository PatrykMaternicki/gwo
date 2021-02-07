import { default as TYPES } from './types';

const INIT_STATE = {
  list: [],
  curentPage: 0,
  pages: null
}

const booksReducers = (state = INIT_STATE, action) =>
{
  switch(action.type) {
    case TYPES.ADD: {
      return {
        ...state, list: [...state.list, action.item]
      }
    }
    case TYPES.CLEAR: {
      return {
        ...state, list: []
      }
    }
    case TYPES.SET_PAGE: {
      const { records_per_page, total_records, page } = action.item
      return {
        ...state, pages: Math.ceil(total_records/records_per_page), currentPage: page
      }
    }
    default: 
      return state
  }
}

export default booksReducers