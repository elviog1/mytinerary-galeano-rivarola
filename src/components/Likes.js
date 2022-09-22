import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLikeDislikeMutation } from "../features/itineraiesApi"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Likes (props){
    const [likeDislike,{data:resLike,error}] = useLikeDislikeMutation()
    const [likes, setLikes]= useState()
    let itinerary = props.itinerary
    let itObj = props.itObj
    const idUser = JSON.parse(localStorage.getItem('user')).id
   
    function clickLike (e){
        likeDislike(itinerary)
        if(!itObj.likes.includes(idUser)){
            Toastify({
                text:"i love this!",
                destination:"http://localhost:3000/cities"
            }).showToast()
        }else if(itObj.likes.includes(idUser)){
                Toastify({
                    text:"noo!",
                    destination:"http://localhost:3000/cities"
                }).showToast()
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