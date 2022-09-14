import { useEffect, useState } from 'react'
import '../styles/Comment.css'

function Comment(props){
    const allCard = props.data
    console.log(allCard)
    const [show,setShow] = useState(false)
    const click = ()=>{
        setShow(!show)
    }

    const cardComment = (item) =>(

            <div className='cardComment-container' id='button'>
                <div className='cardComment-img-name'>
                    <img alt={item.user.photo} src={item.user.photo} className="comment-img"/>
                    <h2 className="comment-user">{item.user.name}:</h2>
                </div>
                <p className="comment-content">{item.comment}</p>
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
