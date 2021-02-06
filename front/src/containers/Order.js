
import { setOrder } from '../store/order/operations'
import Form from '../components/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
 
const OrderContainer = ({setOrder, orders}) => {
  const handleOrder = (data) => setOrder(data, orders)
  return(
    <div className="d-flex align-items-center justify-content-center flex-wrap basket-container">
      <Row className="w-100 justify-content-center">
        <Col xs={12} lg={6}>
          <Form setOrder={handleOrder}/>
        </Col>
      </Row>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setOrder: (formData, orders) => dispatch(setOrder(formData, orders)),
})

const mapStateToProps = state => ({
  orders: state.order.list,
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)

