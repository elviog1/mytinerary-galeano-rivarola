import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Itinerary from './Itinerary';
import { useDetailsQuery } from '../features/citiesApi'
import { useBycityQuery } from '../features/itineraiesApi';
import '../styles/Cities.css'

function InputDetails(props){
  let item
  let id
  props.data? item=props.data : item = props
  props.cityId? id=props.cityId : id=props
    let navigate = useNavigate()
  const back = () =>{
    navigate('/cities')
  }
 
    let{data: itineraries } = useBycityQuery(id)
    // console.log(itineraries)
    return(
        <>
          <div className="CardCity-container" key={item._id}>
            <div className='CardCity-info'>
                <div className='cardCity-close'>
                    <p className="CardCity-city">{item.name}</p>
                    <button className='close-button' onClick={back} >X</button>
                </div>
                <img src={item.image} className="CardCity-img img-mobile" />
                <p className="CardCity-country">{item.country}</p>
                <div className='cardCity-info'>
                    <p className='cardCity-population'>Population: {item.population}</p>
                    <p className='cardCity-fundation'>Fundation: {item.fundation}</p>
                </div>
            </div>
            {itineraries?.length? itineraries.map(itinerary => {
                    return (
                        <Itinerary data={itinerary} key={itinerary._id} />
                        )
                    }):null
                }
        </div>
        </>
        )
                
}

export default InputDetails