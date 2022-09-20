import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import InputDetails from './InputDetails';
import Itinerary from './Itinerary';
import { useBycityQuery } from '../features/itineraiesApi';
import { useDetailsQuery } from '../features/citiesApi';

export default function Details(props) {
  const {id} = useParams()
  const [city, setCity] = useState()
  useEffect(()=>{
    axios.get(`http://localhost:4000/cities/${id}`)
    .then(response => setCity(response.data.response))
},[])

  //   let{
  //     data: itineraries,
  //     isLoading,
  //     isSuccess,
  //     error
  // } = useBycityQuery({id})
  
  // if (isLoading) {
  //     itineraries=[]
  // } else if(isSuccess){
  //     itineraries = itineraries.response
  // }else if(error){
  //     itineraries = []
  // }

  return (
  <>
    <InputDetails data={city} cityId={id} />

  </>
  )
}
