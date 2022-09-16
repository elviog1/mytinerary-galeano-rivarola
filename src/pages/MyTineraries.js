import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Itinerary from '../components/Itinerary'
import '../styles/Itinerary.css'
import {useByuserQuery } from '../features/itineraiesApi'

export default function MyTineraries () {
  const {id} = useParams();

let{
    data: itineraries,
    isLoading,
    isSuccess,
    error
} = useByuserQuery({id} ? id : "")


if (isLoading) {
    itineraries=[]
} else if(isSuccess){
    itineraries = itineraries.response
    console.log("success")
}else if(error){
    itineraries = []
    console.log("error")
}

    return(
        <div className="itinerary-card">
            <div className='itinerary-container'>
                <h1 className='tineraries-title'><span>My </span>Tineraries</h1>
                    <Itinerary data={itineraries}/>
            </div>
        </div>
    )
}