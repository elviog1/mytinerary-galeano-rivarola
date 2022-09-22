import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLikeDislikeMutation } from "../features/itineraiesApi"

function Likes (props){
    const [likeDislike,{data:resLike,error}] = useLikeDislikeMutation()
    let userId = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).id :"undefinde"
    const [likes, setLikes]= useState()
    let itinerary = props.itinerary
    let token = JSON.parse(localStorage.getItem('token'))?JSON.parse(localStorage.getItem('token')):"undefined"
    //console.log(token)
    const [like,setLike] = useState(false)
    let header={headers: { 'Authorization': `Bearer ${token}`}}
    let urlR= `http://localhost:4000/itineraries/like/`+itinerary
    //setLike(!like)
    function clickLike (e){
        console.log(like)
        likeDislike(itinerary)
        if (resLike) {
            console.log(resLike)
        } else {
            console.log(error)
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:4000/itineraries/${itinerary}`)
        .then(response => setLikes(response.data.response.likes.length))
    },[])



    return (
        <div>
            <button onClick={clickLike}>♡{likes}</button>
        </div>
    )
}

export default Likes