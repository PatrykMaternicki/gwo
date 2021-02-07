import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { parsePrice } from '../helpers/parser'

export const Datatable = ({ orders, handleClick }) => {
    return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Tytuł</th>
        <th>Cena</th>
        <th>Akcja</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => {
        return <tr key={index}>
          <td>{index}</td>
          <td>{order.title}</td>
          <td>{parsePrice(order.price)} {order.currency}</td>
          <td><Button onClick={() => handleClick(index)} variant="danger">Usuń Pozycje</Button></td>
        </tr>
      })}
    </tbody>
  </Table>
}

export default Datatable