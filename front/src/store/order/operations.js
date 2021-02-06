import ApiClient from '../../clients/apiClient';
import Actions from './actions';
import { push } from "connected-react-router";

export const setOrder = (data, orders) => 
  async (dispatch) => {
  const response = await ApiClient.postOrder(data, orders)
  response.status === 201 && dispatch(Actions.clearOrder())
  response.status === 201 &&  dispatch(push("/"));
  dispatch(Actions.setStatus(response.status))
}