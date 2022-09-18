import axios from "axios"
import { useRef } from "react"


function NewComment(item){
    const divText = useRef(null)

    const sendComment = ()=>{
        // axios.post(`http://localhost:4000/comments`,{
        // user: JSON.parse(localStorage.getItem('user')).id,
        // itinerary: " " ,
        // comment: divText.current.value

        // })
    }

    return (
        <div className="comment-info">
            <textarea ref={divText} className="comment-content"></textarea>
            <div className='comment-close' onClick={()=>sendComment()} >Create</div>
        </div>
    )
}

export default NewComment