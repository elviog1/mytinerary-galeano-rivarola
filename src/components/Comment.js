import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import '../styles/Comment.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import NewComment from './NewComment'


function Comment(props){

    const [comments, setComments] = useState([])
    const [show,setShow] = useState(false)
    const id = props.itinerary
    const click = ()=>{ // muestra si hay comentarios de un itinerary
        setShow(!show)
    }
    // console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:4000/comments/query?itinerary=${id}`)
        .then(response => setComments(response.data.response))
    },[])

    console.log(comments)


    const [showNewComment,setShowNewComment] = useState(false)
    const clickNewComment = ()=>{ // muestra para crear un comentario
        setShowNewComment(!showNewComment)
    }

    const [logged,setLogged] = useState(false)
    useEffect(()=>{
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
    })

    const close = (id)=>{ // elimina un comentario
        axios.delete(`http://localhost:4000/comments/${id}`)
            Toastify({
                text:"Comment Deleted succesfully !"
            }).showToast()
    }

    const divEdit = useRef(null)
    const edit = (id)=>{ // actualiza un comentario
        axios.put(`http://localhost:4000/comments/${id}`,{

            comment: document.getElementById(`${id}`).value
        })
            Toastify({
                text:"Comment update succesfully !"
            }).showToast()
        console.log(id)
    }

    const cardComment = (item) =>(
        logged ? (
            <div className='cardComment-container' id='button' key={item._id}>
                <div className='cardComment-img-name'>
                    <img alt={item.user.photo} src={item.user.photo} className="comment-img"/>
                    <h2 className="comment-user">: {item.user.name} </h2>
                </div>
                <div className='comment-info'>

                    {item.user._id === JSON.parse(localStorage.getItem('user')).id ? 

                    (<><textarea id={`${item._id}`}  ref={divEdit} style={{resize:"none"}}  className={`comment-content ${item._id}`} >{item.comment}</textarea>
                    <div className='comment-edition'>
                        <div className='comment-edit' onClick={()=>edit(item._id)}>Edit</div>
                        <div className='comment-close' onClick={()=>close(item._id)} >Delete</div>
                    </div></>
                    ) : (

                    <p  style={{color:"white"}}  className="comment-content">{item.comment}</p>) }
                    
                </div>
            </div>
            ) : (
                
                <div className='cardComment-container' id='button' key={item._id}>
                <div className='cardComment-img-name'>
                    <img alt={item.user.photo} src={item.user.photo} className="comment-img"/>
                    <h2 className="comment-user">{item.user.name}:</h2>
                </div>
                <div className='comment-info'>
                    <p  style={{color:"white"}}  className="comment-content">{item.comment}</p>
                </div>
            </div>
            ) 
            
    )

    return(
            !logged ?(
                <div className="comment-card">
                    <button  onClick={()=> click()}  className='cardComment-button'>Comments</button>
                    {show && comments.map(cardComment) }
                </div>
            ) : (
                <div className="comment-card">
                    <div>
                        <button  onClick={()=> click()}  className='cardComment-button'>Comments</button>
                        <button  onClick={()=> clickNewComment()}  className='cardComment-button'>New Comment</button>
                        {show && comments.map(cardComment)}
                        {showNewComment && <NewComment itinerary={id} />}
                    </div>
                </div>
            )

    )
}

export default Comment
