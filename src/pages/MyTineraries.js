import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Itinerary from '../components/Itinerary'
import '../styles/Itinerary.css'

export default function MyTineraries () {
  const {id} = useParams();
  console.log(id);
  const[itineraries, setItineraries] = useState([])
  useEffect(()=>{
      axios.get(`http://localhost:4000/itineraries/queryu?user=${id}`)
      .then(response =>setItineraries(response.data.response))
    },[])

    return(
        <div className='itineraries-container'>
            <h1 className='tineraries-title'><span>My </span>Tineraries</h1>
                <Itinerary data={itineraries}/>
        </div>
    )
}