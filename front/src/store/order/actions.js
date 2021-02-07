import { default as TYPES } from './types';

const addOrder = item => ({
  type: TYPES.ADD_ORDER, item
});

const setStatus = item => ({
  type: TYPES.SET_STATUS, item
});

const clearStatus = item => ({
  type: TYPES.CLEAR_STATUS, item
});

const clearOrder = item => ({
  type: TYPES.CLEAR_ORDER, item
});

const removeOrder = (item) => ({
  type: TYPES.REMOVE_ORDER, item
});

export default {
  addOrder,
  setStatus,
  clearStatus,
  clearOrder,
  removeOrder
}