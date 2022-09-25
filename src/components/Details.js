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
<<<<<<< HEAD
  axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/${id}`)
      .then(response =>setItems(response.data.response))
      axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/itineraries/query?city=${id}`)
      .then(response =>setItineraries(response.data.response))
    },[])
  

       axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/itineraries/query?city=${id}`)
           .then(response =>setItineraries(response.data.response))

=======
    axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/${id}`)
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
>>>>>>> 494c011b04a11f7dfb5814b705517d474303fa58

  return (
  <>
    <InputDetails data={city} cityId={id} />

  </>
  )
}
