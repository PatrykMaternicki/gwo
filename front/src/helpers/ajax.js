export const get = async (url, config) => {
  delete config.body
  try {
    const response = await fetch(url, config)
    const json = await response.json()
    return json
  } catch (error) {
    return error.response
  }
}

export const post = async (url, config) => {
  try {
    const response = await fetch(url, config);
    return response
  } catch (error) {
    return error.response
  }
}
