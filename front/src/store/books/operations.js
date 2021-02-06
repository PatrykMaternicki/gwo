import ApiClient from '../../clients/apiClient';
import Actions from './actions';

export const getAllBooks = () =>
  async (dispatch) => {
  const response = await ApiClient.getBook()
  response.data.map(item => dispatch(Actions.add(item)))
}