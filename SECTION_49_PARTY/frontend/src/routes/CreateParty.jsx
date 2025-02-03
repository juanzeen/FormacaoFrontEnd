import React from 'react'

import partyFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import './Form.css'

const CreateParty = () => {

  const [services, setServices] = useState([])

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [budget, setBudget] = useState(0)
  const [partyServices, setPartyServices] = useState([])

  useEffect(() => {
    const loadServices = async () => {
      const res = await partyFetch.get("/services")

      setServices(res.data)
    }

    loadServices()
  }, [])

  return (
    <div className='form-page'>
      <h2>Create your next party</h2>
      <p>Define your budget and choose the services</p>
      <form>
        <label>
          <span>Party Owner</span>
          <input type="text" placeholder='Put your name' required onChange={(e) => setAuthor(e.target.value)} value={author}/>
        </label>
        <label>
          <span>Party name</span>
          <input type="text" placeholder='Put the name of your personal project X' required onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          <span>Description</span>
          <input type="text" placeholder='Talk about your party' required onChange={(e) => setDescription(e.target.value)} value={description}/>
        </label>
        <label>
          <span>Budget</span>
          <input type="number" placeholder='Put your money here hehe' required onChange={(e) => setBudget(e.target.value)} value={budget}/>
        </label>
        <label>
          <span>Image</span>
          <input type="text" placeholder='Put the thumbnail for your party' required onChange={(e) => setImage(e.target.value)} value={image}/>
        </label>
        <div>
          <h2>Choose your services</h2>
          <div className="services-container">
            {services.length === 0 && <p>carregando...</p>}
            {services.length > 0 && services.map((service) => (
              <div className="service" key={service._id}>
                <img src={service.image} alt={service.name} />
                <p className="service-name">{service.name}</p>
                <p className="service-price">R${service.price}</p>
                <div className="checkbox-container">
                  <input type="checkbox" value={service._id} />
                  <p>Marque para solicitar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <input type="submit" value="Crate party!" className='btn'/>
      </form>
    </div>
  )
}

export default CreateParty
