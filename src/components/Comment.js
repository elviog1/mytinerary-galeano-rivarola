import '../styles/Itinerary.css'

function Comment(props){
    const allCard = props.data

    const cardComment = (item) =>(
        <div className="act-card">
            <img alt={item.user.photo} src='https://cdn-icons-png.flaticon.com/512/3711/3711310.png'/*{item.image}*/ className="comment-img"></img>
            <h2 className="comment-user">{item.user.name}marquitos dipalma:</h2>
            <p className="comment-content">{item.comment}</p>
        </div>
    )

    return(
        <>
        {allCard.map(cardComment)}
    </>
    )
}

export default Comment
