import { connect } from 'react-redux'
import React from 'react'
import Item  from '../components/Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Actions from '../store/order/actions'

const MainContainer = ({ books, addOrder }) => {
  return (
  <Row>
    {books.map(book =>
     <Col key={book.id} xs={12} md={6} lg={4} className="mt-4">
       <Item handleClickItem={addOrder} book={book} />
     </Col> 
    )}
  </Row>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books.list,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addOrder: (book) => dispatch(Actions.addOrder(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)