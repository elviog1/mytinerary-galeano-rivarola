import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import '../styles/Comment.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


function Comment(props){
    const allCard = props.data
    const [show,setShow] = useState(false)
    const click = ()=>{ // muestra si hay comentarios de un itinerary
        setShow(!show)
    }

    const close = (id)=>{ // elimina un comentario
        axios.delete(`http://localhost:4000/comments/${id}`)
            Toastify({
                text:"Comment Deleted succesfully !"
            }).showToast()
    }

    const divEdit = useRef(null)
    const edit = (id)=>{ // actualiza un comentario
        axios.put(`http://localhost:4000/comments/${id}`,{
            comment: divEdit.current.value
        })
            Toastify({
                text:"Comment update succesfully !"
            }).showToast()
    }


    const cardComment = (item) =>(
            <div className='cardComment-container' id='button' key={item._id}>
                <div className='cardComment-img-name'>
                    <img alt={item.user.photo} src={item.user.photo} className="comment-img"/>
                    <h2 className="comment-user">{item.user.name}:</h2>
                </div>
                <div className='comment-info'>
                    <textarea  ref={divEdit} style={{resize:"none"}}  className="comment-content">{item.comment}</textarea>
                    <div className='comment-edition'>
                        <div className='comment-edit' onClick={()=>edit(item._id)}>Edit</div>
                        <div className='comment-close' onClick={()=>close(item._id)} >Delete</div>
                    </div>
                </div>
            </div>
    )
    return(
        <>
            <div className="comment-card">
                <button  onClick={()=> click()}  className='cardComment-button'>Comments</button>
                {show && allCard.map(cardComment) }
            </div>
        </>
    )
}

export default Comment
