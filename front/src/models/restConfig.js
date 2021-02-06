const restConfig = (method, obj = {}) => ({
  method: method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})

export default restConfig