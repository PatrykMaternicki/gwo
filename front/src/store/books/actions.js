import { default as TYPES } from './types';

const add = item => ({
  type: TYPES.ADD, item
});

const clear = () => ({
  type: TYPES.ADD
});

export default {
  add,
  clear
}