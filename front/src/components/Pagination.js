import Pagination from 'react-bootstrap/Pagination'

const PaginationModule = ({currentPage, pages, handleClick}) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => handleClick(number)} active={number === currentPage}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
   <div className="d-flex justify-content-center">
    <Pagination size="lg">
        {items}
    </Pagination>
  </div>
  )
}

export default PaginationModule