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
    
//console.log(itObj)
    const [likeUser,setLikeUser] = useState(false)
    const array = resLike?.response
    console.log(resLike?.response)
    useEffect(()=>{
        if(resLike){
            setLikes(resLike.response.length)
            setLikeUser(!likeUser)
        }
    },[array])

    function clickLike (e){
        likeDislike(itinerary)
        const idUser = JSON.parse(localStorage.getItem('user')).id
        if(!itObj.likes.includes(idUser) && !likeUser){
            Toastify({
                text:"i love this!",
                destination:"https://my-tinerary-dreamjuan-back.herokuapp.com/cities"
            }).showToast()

        }else if(itObj.likes.includes(idUser)) {
                Toastify({
                    text:"noo!",
                    destination:"https://my-tinerary-dreamjuan-back.herokuapp.com/cities"
                }).showToast()
            }
    }
    useEffect(()=>{
        axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/itineraries/${itinerary}`)
        .then(response => setLikes(response.data.response.likes.length))
    },[])

    const [logged,setLogged] = useState(false)
    const [userId, setUserId] =  useState('')
    useEffect(()=>{
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
        const user = JSON.parse(localStorage.getItem('user'))
        user ? setUserId(user.id) : setUserId("")
    },[])

  

    return (
        <div> {logged ? (
            <button onClick={clickLike} className="hearth" >
                <div className="like-cant">{likes}</div>
            </button>
            ) : (
            <button  className="hearth" >
                <div className="like-cant">{likes}</div>
            </button>
            )}
        </div>
    )
}

export default Likes