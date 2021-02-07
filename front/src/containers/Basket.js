import Datatable from '../components/Datatable'
import React  from 'react'
import Actions from '../store/order/actions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BasketContainer = ({ orders, removeOrder }) => {
  const onHandleClick = (index) => removeOrder(index)
  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap basket-container">
      <Row className="w-100">
        <Col xs={12}>
          {orders.length > 0 ?
          <div>
            <Datatable orders={orders} handleClick={onHandleClick}/>
            <div className="d-flex justify-content-center">
              <Link to="/zamowienie" replace >
                <Button>Dalej</Button>
              </Link> 
            </div>
          </div> 
          :   
          <Alert variant="danger">
            Nie masz żadnych zamówień
          </Alert>
        }
        </Col>
      </Row>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeOrder: (index) => dispatch(Actions.removeOrder(index))
})

const mapStateToProps = state => ({
  orders: state.order.list,
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)