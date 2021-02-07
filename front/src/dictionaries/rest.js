const baseUrl = `http://localhost:3001/api`;
export const restUrl = {
  book: (page) => `${baseUrl}/book?page=${page}`,
  order: `${baseUrl}/order`
}