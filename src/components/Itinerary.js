import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Itinerary.css'
import Activity from './Activities'
import Comment from './Comment'


function Itinerary(props){
    let allCard
    props.data? allCard = props.data : allCard=props
    const [itinerary, setItinerary] = useState(props.data)
    // const [comments,setComments] = useState([])
    // const [activities,setActivities] = useState([])
    // useEffect(()=>{
    //     axios.get(`http://localhost:4000/comments/query?itinerary=6316673e981c8cdc211716be`)
    //     .then(response => setComments(response.data.response))
    //     axios.get(`http://localhost:4000/activities/query?itinerary=6316673e981c8cdc211716be`)
    //     .then(response => setActivities(response.data.response))
    // },[])

    return (
        <>
            <div className="itinerary-card" key={itinerary.name}>
                <div className='itinerary-container'>
                    <h2 className="itinerary-name">{itinerary.name}</h2>
                    <h3 className="itinerary-user-name">{itinerary.name}</h3>
                    <div className="itinerary-card_price-duration">
                        <p className="itinerary-price">Price: {itinerary.price}</p>
                        <p className="itinerary-duration">Duration: {itinerary.duration}</p>
                    </div>
                    <p className="itinerary-tags">{itinerary.tags}</p>
                    <p className="itinerary-likes">{itinerary.likes} Likes</p>
                </div>
                 <div>
                    <Activity itinerary={itinerary._id}/>
                </div>
                <div className='comment-box'>
                    {/* <Comment itinerary={itinerary._id} className='comment'/> */}
                </div>
            </div>
        </>
    )
}

export default Itinerary