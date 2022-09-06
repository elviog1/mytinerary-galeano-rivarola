function Comment(props){
    const allCard = props.data

    const cardComment = (item) =>{
        <div className="act-card">
            <img alt={item.user.photo} src={item.image}></img>
            <h2>{item.user.name}</h2>
            <p>{item.comment}</p>
        </div>
    }

    return(
        <>
        {allCard.map(cardComment)}
    </>
    )
}

export default Comment
