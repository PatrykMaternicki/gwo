import { connect } from 'react-redux'
import React from 'react'
import Item  from '../components/Item'
import Pagination from '../components/Pagination'
import { getBooks } from '../store/books/operations'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Actions from '../store/order/actions'

const MainContainer = ({ books, addOrder, currentPage, pages, getNextPage }) => {
  const changePage = (page) => page !== currentPage && getNextPage(page)
  return (
  <div className="mt-4">
    <Pagination handleClick={changePage} currentPage={currentPage} pages={pages} />
      <Row>
        {books.map(book =>
        <Col key={book.id} xs={12} md={6} lg={4} className="mt-4">
          <Item handleClickItem={addOrder} book={book} />
        </Col> 
        )}
      </Row>
    <Pagination handleClick={changePage} currentPage={currentPage} pages={pages}/>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books.list,
    currentPage: state.books.currentPage,
    pages: state.books.pages
  }
}

const mapDispatchToProps = (dispatch) => ({
  addOrder: (book) => dispatch(Actions.addOrder(book)),
  getNextPage: (page) => dispatch(getBooks(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)