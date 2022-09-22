import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Itinerary from '../components/Itinerary'
import '../styles/Itinerary.css'
import {useByuserQuery } from '../features/itineraiesApi'

export default function MyTineraries () {
  let {id} = useParams();

let{
    data: itineraries,
    isLoading,
    isSuccess,
    error
} = useByuserQuery({id} ? id : "")

if (isLoading) {
    itineraries=[]
} else if(isSuccess){
    itineraries = itineraries
}else if(error){
    itineraries = []
}

    return(
        <div className="itinerary-card">
            <div className='itinerary-container'>
                <h1 className='tineraries-title'><span>My </span>Tineraries</h1>
                    {itineraries.length<0?<Itinerary data={itineraries} key={itineraries._id}/>:<div>
                        <p>You have no Tineraries</p></div>
}
                    {/* {itineraries?.length? itineraries.map(itinerary => 
                    {
                    return (
                        <Itinerary data={itinerary} key={itinerary._id} />
                        )
                    }) : null
                    } */}
            </div>
        </div>
    )
}