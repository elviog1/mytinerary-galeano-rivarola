import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Itinerary.css'
import Activity from './Activities'
import Comment from './Comment'


function Itinerary(props){
    const allCard = props.data
    const [comments,setComments] = useState([])
    const [activities,setActivities] = useState([])
    const [id, setId] = useState('')
    useEffect(()=>{
        axios.get(`http://localhost:4000/comments/query?itinerary=63166032d5fc4c0bc157c398`)
        .then(response => setComments(response.data.response))
        axios.get(`http://localhost:4000/activities/query?itinerary=63166032d5fc4c0bc157c398`)
        .then(response => setActivities(response.data.response))
    },[])

     function CardItinerary(item) {
        return (
            <div className="itinerary-card">
                <div className='itinerary-container'>
                    <h2 className="itinerary-name">{item.name}</h2>
                    <h3 className="itinerary-user-name">{item.name}</h3>
                    <div className="itinerary-card_price-duration">
                        <p className="itinerary-price">Price: {item.price}</p>
                        <p className="itinerary-duration">Duration: {item.duration}</p>
                    </div>
                    <p className="itinerary-tags">{item.tags}</p>
                    <p className="itinerary-likes">{item.likes} Likes</p>
                </div>
                <div>
                    <Activity data={activities} />
                </div>
                <div className='comment-box'>
                    <Comment data={comments} className='comment'/>
                </div>
            </div>
        )
    }

    return (
        <>
            {allCard.map(CardItinerary)}
        </>
    )
}

export default Itinerary