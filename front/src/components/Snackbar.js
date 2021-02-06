import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default class Snackbar extends React.Component {
  static defaultProps = {
    status: null,
    timeout: 2000
  }

  componentWillMount() {
    window.setTimeout(() => this.props.handleToggle(), this.props.timeout)
  }

  setMsg = () => this.props.status === 201 ? 'Zamówienie wysłane' : 'Wystąpił Błąd'
  setVariant = () => this.props.status === 201 ? 'success' : 'danger'

  render() {
    return(
      <Alert variant={this.setVariant()}>{this.setMsg()}</Alert>
    )
  }
}