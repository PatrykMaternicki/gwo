/* eslint-disable */
import { get, post } from '../helpers/ajax';
import restConfig from '../models/restConfig'
import { restUrl } from '../dictionaries/rest'

export default class ApiClient {
  static async getBook(page = 1) {
    const response = await get(restUrl.book(page), restConfig('GET'))
    return response
  }

  static async postOrder(data, order) {
    const mappedOrder = mapOrder(order)
    const jsonObject = {...data, order: mappedOrder}
    const response = await post(restUrl.order, restConfig('POST', jsonObject))
    return response
  }
}

const mapOrder = (order) => {
  const mappedOrder = []
  order.forEach(item => {
    const index = mappedOrder.findIndex(mappedItem => mappedItem.id === item.id)
    index > -1 ? mappedOrder[index].quantity++ : mappedOrder.push({id: item.id, quantity: 1})
  })
  return mappedOrder
}