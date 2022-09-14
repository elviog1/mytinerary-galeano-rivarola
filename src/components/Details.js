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
  axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/${id}`)
      .then(response =>setItems(response.data.response))
      axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/itineraries/query?city=${id}`)
      .then(response =>setItineraries(response.data.response))
    },[])
  

       axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/itineraries/query?city=${id}`)
           .then(response =>setItineraries(response.data.response))


  return (
  <>
    <InputDetails data={items}/>
    <Itinerary data={itineraries}/>
  </>
  )
}
