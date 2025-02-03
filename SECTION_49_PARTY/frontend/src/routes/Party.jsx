import React from 'react'

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import partyFetch from '../axios/config'

import './Party.css'
import useToast from '../hooks/useToast'

const Party = () => {
  const { id } = useParams()
  const [party, setParty] = useState()

  const navigate = useNavigate()

   useEffect(() => {
     const loadParty = async () => {
       const res = await partyFetch.get(`parties/${id}`)

       setParty(res.data)
     }

     loadParty()
   }, [])

  const handleDelete = async (e) => {
    const res = await partyFetch.delete(`parties/${id}`)

    if (res.status === 200) {
      navigate("/")
      useToast(res.data.msg)
    }
  }

if(!party) return <p>loading...</p>

  return (
    <div className='party'>
      <h1 className="party-title">{party.title }</h1>
      <div className="actions-container">
        <Link className='btn'to={`/party/edit/${party._id}`}>Edit</Link>
        <button className='btn-secondary' onClick={(e) => handleDelete(e)}>Delete</button>
      </div>
      <p>Budget: {party.budget }</p>
      <h3>Services</h3>
      <div className="services-container">
        {party.services.map((service) => (
          <div className="service" key={service._id}>
            <img src={service.image} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Party
