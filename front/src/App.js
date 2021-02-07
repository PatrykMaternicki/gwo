import React, { useEffect } from 'react'
import MainContainer  from './containers/Main'
import BasketContainer from './containers/Basket'
import OrderContainer from './containers/Order'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Snackbar from './components/Snackbar'
import { getBooks } from './store/books/operations'
import Actions from './store/order/actions'

import {
  Switch,
  Route
} from "react-router-dom";

const App = ({basketStock, status, getBooks, clearStatus}) => {
  useEffect(() => { getBooks() }, [])
  const clearAlert = () => clearStatus()
  return (
  <div>
    <Navbar basketStock={basketStock}/>
    {status !== null && <Snackbar status={status} handleToggle={clearAlert}/>}
    <Container>
      <Switch>
        <Route path="/" component={MainContainer} exact/>
        <Route path="/koszyk" component={BasketContainer} />
        <Route path="/zamowienie" component={OrderContainer} />
      </Switch>
    </Container>
  </div>
  );
}

const mapStateToProps = state => ({
  basketStock: state.order.list.length,
  status: state.order.status
})


const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  clearStatus: () => dispatch(Actions.clearStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)