import ApiClient from '../../clients/apiClient';
import Actions from './actions';

export const getBooks = (page = 1) =>
  async (dispatch) => {
  const response = await ApiClient.getBook(page)
  dispatch(Actions.clear())
  dispatch(Actions.setPage(response.metadata))
  response.data.map(item => dispatch(Actions.add(item)))
}