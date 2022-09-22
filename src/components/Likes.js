import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Likes (props){
    // let userId = JSON.parse(localStorage.getItem('user')).id 
    // const [likes, setLikes]= useState()
    // let itinerary = props.itinerary
    // let token = JSON.parse(localStorage.getItem('token'))
    // //console.log(token)
    // const [like,setLike] = useState(false)
    // let header={headers: { 'Authorization': `Bearer ${token}`}}
    // let urlR= `http://localhost:4000/itineraries/like/`+itinerary
    // useEffect(()=>{
    //     axios.get(`http://localhost:4000/itineraries/${itinerary}`)
    //     .then(response => setLikes(response.data.response.likes.length))
    // },[])

    // console.log(likes)
    // const click=async ()=>{
    //     setLike(!like)
    //     console.log(like)

    //     axios.patch(urlR, header
    //     ).then((res) => {
    //         console.log(res.data)
    //       })
    //       .catch((error) => {
    //         console.error(error)
    //       })
    // }

    return (
        <div>
            {/* <button onClick={click}>♡{likes}</button> */}
        </div>
    )
}

export default Likes