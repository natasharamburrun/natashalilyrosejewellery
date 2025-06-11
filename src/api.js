
import axios from "axios";

const URL = "http://localhost:8080"

export async function getStocks() {
  //"http://localhost:3000/stock"
  const response = await axios.get(`${URL}/stock`)

  if (response.status === 200) {
      return response.data
  } else {
      return

  }
}

export async function getStock(id) {
  //"http://localhost:3000/stock/12345"
  const response = await axios.get(`${URL}/stock/${id}`)
  
  if (response.status === 200) {
    return response.data
} else {
    return
}
}

export async function createStock(post) {
  const response = await axios.post(`$(URL)/stock`, post)
  return response
}

export async function updateStock(id, post) {
  //"http://localhost:3000/Stock/12345"
  const response = await axios.put(`${URL}/stock/${id}`, post)
  return response
}

export async function deleteStock(id) {
  const response = await axios.delete(`$(URL)/stock/${id}`)
    return response
}