import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { parsePrice } from '../helpers/parser'

const Item = ({book, handleClickItem}) => {
const handleClick = () => handleClickItem(book)

return (
  <Card>
    <Card.Img variant="top" src={book.cover_url} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {book.author}
        <p className="mt-2">
          <Badge variant="secondary">{book.pages} stron</Badge>
        </p>
      </Card.Subtitle>
      <Card.Text>
        <span className="mr-2">{book.currency}</span><strong>{parsePrice(book.price)}</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button onClick={handleClick} variant="success">Dodaj do koszyka</Button>
    </Card.Footer>
  </Card>
  ) 
}

export default Item