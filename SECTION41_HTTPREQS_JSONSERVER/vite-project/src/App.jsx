import { useEffect, useState } from 'react'
const url = "http://localhost:3000/products"

import { useFetch } from '../hooks/useFetch'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([])
  //renoemando o dado vindo do useFetch para items
  const {data : items, httpConfig} = useFetch(url)
  httpConfig(prod, "POST")

  return (
    <>
      {items && items.map((prod) => (
        <li key={prod.id}>
          {prod.name} - {prod.price}
        </li>
      ))}
    </>
  )
}

export default App
