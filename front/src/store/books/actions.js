import { default as TYPES } from './types';

const add = item => ({
  type: TYPES.ADD, item
});

const clear = () => ({
  type: TYPES.CLEAR
});

const setPage = (item) => ({
  type: TYPES.SET_PAGE, item
})

const getNextPage = (item) => ({
  type: TYPES.GET_NEXT_PAGE, item
})

export default {
  add,
  clear,
  setPage,
  getNextPage
}