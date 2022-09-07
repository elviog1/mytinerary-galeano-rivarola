import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Itinerary.css'
import Comment from './Comment'

function Itinerary(props){
    const allCard = props.data

    const cardItinerary = (item) =>(
        <div className="itinerary-card">
            <div className='itinerary-container'>
                <h2 className="itinerary-name">{item.name}</h2>
                <h3 className="itinerary-user-name">{item.user.name}</h3>
                <div className="itinerary-card_price-duration">
                    <p className="itinerary-price">Price: {item.price}</p>
                    <p className="itinerary-duration">Duration: {item.duration}</p>
                </div>
                <p className="itinerary-tags">{item.tags}</p>
                <p className="itinerary-likes">{item.likes}</p>
            </div>
        </div>
    )

    const {id} = useParams()
    const [comments,setComments] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/itineraries/query?city=${id}`)
            .then(response => setComments(response.data.response))
            axios.get(`http://localhost:4000/comments/query?itinerary=63166032d5fc4c0bc157c398`)
            .then(response => setComments(response.data.response))
    },[])
    console.log(comments)

   

    return (
        <>
            {allCard.map(cardItinerary)}
            <Comment data={comments} />
        </>
    )
}

export default Itinerary