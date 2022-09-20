import axios from "axios"
import { useRef } from "react"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function NewComment(props){
    const itineraryId = props.itinerary
    const divText = useRef(null)
    const sendComment = ()=>{
        axios.post(`http://localhost:4000/comments`,{
        user: JSON.parse(localStorage.getItem('user')).id,
        itinerary: itineraryId ,
        comment: divText.current.value
        })
        Toastify({
            text:"Thanks for your comment!"
        }).showToast()
    }

    return (
        <div className="comment-info">
            <textarea ref={divText} style={{resize:"none"}} className="comment-content"></textarea>
            <div className='comment-close' onClick={()=>sendComment()} >Create</div>
        </div>
    )
}

export default NewComment