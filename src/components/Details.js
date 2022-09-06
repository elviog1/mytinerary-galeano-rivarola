import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import InputDetails from './InputDetails';
import Itinerary from './Itinerary';

export default function Details() {
  const {id} = useParams();
  const[items, setItems] = useState({})
  const[itineraries, setItineraries] = useState([])
  useEffect(()=>{
  axios.get(`http://localhost:4000/cities/${id}`)
      .then(response =>setItems(response.data.response))
      axios.get(`http://localhost:4000/itineraries/query?city=${id}`)
      .then(response =>setItineraries(response.data.response))
    },[])
  

       axios.get(`http://localhost:4000/itineraries/query?city=${id}`)
           .then(response =>setItineraries(response.data.response))


  return (
  <>
    <InputDetails data={items}/>
    <Itinerary data={itineraries}/>
  </>
  )
}
