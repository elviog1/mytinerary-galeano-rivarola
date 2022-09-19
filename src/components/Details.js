import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import InputDetails from './InputDetails';
import Itinerary from './Itinerary';
import { useBycityQuery } from '../features/itineraiesApi';

export default function Details() {
  const {id} = useParams();
  const[items, setItems] = useState({})
  useEffect(()=>{
  axios.get(`http://localhost:4000/cities/${id}`)
      .then(response =>setItems(response.data.response))
    },[])
    let{
      data: itineraries,
      isLoading,
      isSuccess,
      error
  } = useBycityQuery({id} ? id : "")
  
  
  if (isLoading) {
      itineraries=[]
  } else if(isSuccess){
      itineraries = itineraries.response
  }else if(error){
      itineraries = []
  }

  return (
  <>
    <InputDetails data={items}/>
    <Itinerary data={itineraries}/>
  </>
  )
}
