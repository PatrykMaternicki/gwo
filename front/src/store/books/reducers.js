import { default as TYPES } from './types';

const INIT_STATE = {
  list: [],
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
    default: 
      return state
  }
}

export default booksReducers