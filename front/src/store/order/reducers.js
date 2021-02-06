import { default as TYPES } from './types';

const INIT_STATE = {
  list: [],
  status: null
};

const orderReducers = (state = INIT_STATE, action) =>
{
  switch(action.type) {
    case TYPES.ADD_ORDER: {
      return {
        ...state, list: [...state.list, action.item]
      }
    }
    case TYPES.SET_STATUS: {
      return {
        ...state, status: action.item
      }
    }
    case TYPES.CLEAR_ORDER: {
      return {
        ...state, list: []
      }
    }
    case TYPES.CLEAR_STATUS: {
      return {
        ...state, status: null
      }
    }
    default: 
      return state
  }
}

export default orderReducers