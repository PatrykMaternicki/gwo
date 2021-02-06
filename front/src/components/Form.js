import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class FormOrder extends Component {

  static defaultProps = {
    setOrder: null,
    error_msg: {
      types: {
        invalid: 'invalid',
        required: 'required'
      },
      zip_code: {
        required: 'Kod Pocztowy jest obowiązkowy',
        invalid: 'Kod pocztowy jest niepoprawny'
      },
      first_name: {
        required: 'Imię jest obowiązkowe',
        length: 'Imię może zawierać od 5 do 50 znaków'
      },
      last_name: {
        required: 'Nazwisko jest obowiązkowe',
        length: 'Nazwisko może zawierać od 4 do 50 znaków'
      },
      city: {
        required: 'Miasto jest obowiązkowe',
      }
    }
  }

  state = {
    validated: false,
    first_name: '',
    last_name: '',
    city: '',
    zip_code: '',
    focused_first_name: false,
    focused_last_name: false,
    focused_city: false,
    focused_zip_code: false,
    error_zip_code: true,
    error_last_name: true,
    error_first_name: true,
    error_city: true,
    error_type_city: 'required',
    error_type_zip_code: 'required',
    error_type_first_name: 'required',
    error_type_last_name: 'required'
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const { zip_code, last_name, first_name, city } = this.state
    const formData  = { zip_code, last_name, first_name, city }
    
    if (form.checkValidity() === false) {
      this.setState({validated: false})
    }
    this.setState({validated: true})
    this.resetState()
    this.props.setOrder(formData)
  }

  resetState = () => {
    const state = this.state
    state.validated = false
    state.first_name = ''
    state.last_name = ''
    state.city = ''
    state.zip_code = ''
    state.focused_first_name = false
    state.focused_last_name = false
    state.focused_city = false
    state.focused_zip_code = false
    state.error_zip_code = true
    state.error_last_name = true
    state.error_first_name = true
    state.error_city = true,
    state.error_type_city = 'required'
    state.error_type_zip_code = 'required'
    state.error_type_first_name = 'required'
    state.error_type_last_name = 'required'
    this.setState(state)
  }

  handleChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value.trim()
    state[`focused_${event.target.name}`] = true
    this.setState(state)
  }

  checkZipCode = (event) => {
    const test = /\d{2}-\d{3}/g.test(event.target.value) ? false : true
    const isMoreThenMax = event.target.value.length > 6
    const valid = test || isMoreThenMax ? true : false
    const type = this.props.error_msg.types
    valid && this.setState({error_type_zip_code: type.invalid })
    this.setState({error_zip_code: valid })
  }

  setMsg = (field) => {
    const msgType = this.state[`error_type_${field}`]
    return this.props.error_msg[field][msgType]
  }

  checkLength = (event, max, min) => {
    const { value, name} = event.target
    const state = this.state
    const isMoreThan = value.length >= max
    const isMinThan = value.length <= min
    const valid = isMoreThan || isMinThan
    const { types } = this.props.error_msg
    state[`error_${name}`] = valid
    state[`error_type_${name}`] = types.length
    this.setState(state)  
  }

  checkRequire = (event) => {
    const { value, name} = event.target
    const valid = value.length > 0 ? false : true
    const type = this.props.error_msg.types
    valid && this.setState({[`error_type_${name}`]: type.required })
    this.setState({[`error_${name}`]: valid })
  }

  setEnableClick = () => {
    const { error_first_name, error_last_name, error_city, error_zip_code } = this.state
    return !(!error_first_name && !error_last_name && !error_city && !error_zip_code)
  }

  setInvalid = (field) => {
    const isFocused = this.state[`focused_${field}`]
    return !isFocused ? false : this.state[`error_${field}`]
  }

  render() {
    return(
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>Imię</Form.Label>
            <Form.Control 
              onChange={(event) => {
                this.handleChange(event)
                this.checkRequire(event)
                this.checkLength(event, 50, 4)
              }} 
              isInvalid={this.setInvalid('first_name')}  
              value={this.state.first_name} 
              required 
              type="text" 
              name="first_name" 
              placeholder="Podaj Imię" 
            />
          <Form.Control.Feedback type="invalid">{this.setMsg('first_name')}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control 
            onChange={(event) => {
              this.handleChange(event)
              this.checkRequire(event)
              this.checkLength(event, 50, 5)
            }} 
            value={this.state.last_name}
            isInvalid={this.setInvalid('last_name')}  
            name="last_name" 
            required 
            type="text" 
            placeholder="Podaj Nazwisko" 
          />
          <Form.Control.Feedback type="invalid">{this.setMsg('last_name')}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>Miejscowość</Form.Label>
          <Form.Control 
            onChange={(event) => {
              this.handleChange(event)
              this.checkRequire(event)
            }}
            isInvalid={this.setInvalid('city')}    
            value={this.state.city} 
            name="city" 
            required 
            type="text"
            placeholder="Podaj Miejscowość" 
          />
          <Form.Control.Feedback type="invalid">{this.setMsg('city')}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPostCode">
          <Form.Label>Kod pocztowy</Form.Label>
            <Form.Control 
              onChange={(event) =>{
                this.handleChange(event) 
                this.checkRequire(event)
                this.checkZipCode(event)
              }}
              isInvalid={this.setInvalid('zip_code')}  
              value={this.state.zip_code} 
              name="zip_code" 
              required 
              type="text" 
              placeholder="Podaj Kod Pocztowy"
            />
            <Form.Control.Feedback type="invalid">{this.setMsg('zip_code')}</Form.Control.Feedback>
          </Form.Group>
          <Button disabled={this.setEnableClick()} variant="primary" type="submit">
              Zamawiam i płacę
          </Button>
        </Form>
    )
  }
}