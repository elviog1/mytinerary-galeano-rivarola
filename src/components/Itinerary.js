import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Itinerary.css'
import Activity from './Activities'
import Comment from './Comment'
import Likes from './Likes'


function Itinerary(props){
    let allCard
    props.data? allCard = props.data : allCard=props
    const [itinerary, setItinerary] = useState(props.data)
    // console.log(itinerary)



    const [logged,setLogged] = useState(false) 
    const [userId, setUserId] =  useState('')
    useEffect(()=>{// si hay algun usuario conectado
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
        const user = JSON.parse(localStorage.getItem('user'))
        user ? setUserId(user.id) : setUserId("")
    },[])

    return (
        <>
            <div className="itinerary-card" key={itinerary.name}>
                <div className='itinerary-container'>
                    <h2 className="itinerary-name">{itinerary.name}</h2>
                    <div className="itinerary-card_price-duration">
                        <p className="itinerary-price">Price: {"💵".repeat(itinerary.price)} </p>
                        <p className="itinerary-duration">Duration:  {"⌛".repeat(itinerary.duration)}</p>
                    </div>
                    <p className="itinerary-tags">{itinerary.tags}</p>
                   <Likes itinerary={itinerary._id} itObj={itinerary} />
                </div>
                 <div>
                    <Activity itinerary={itinerary._id}/>
                </div>
                <div className='comment-box'>
                    <Comment itinerary={itinerary._id} className='comment'/>
                </div>
            </div>
        </>
    )
}

export default Itinerary