import Table from 'react-bootstrap/Table'
import { parsePrice } from '../helpers/parser'

export const Datatable = ({ orders }) => {
    return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Tytuł</th>
        <th>Cena</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => {
        return <tr key={index}>
          <td>{index}</td>
          <td>{order.title}</td>
          <td>{parsePrice(order.price)} {order.currency}</td>
        </tr>
      })}
    </tbody>
  </Table>
}

export default Datatable