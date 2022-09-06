
function Itinerary(props){
    const allCard = props.data

    const cardItinerary = (item) =>(
        <div className="itinerary-card">
            <h2>{item.name}</h2>
            <h3>{item.user.name}</h3>
            <div className="itinerary-card_price-duration">
                <p>Price: {item.price}</p>
                <p>Duration: {item.duration}</p>
            </div>
            <p>{item.tags}</p>
            <p>{item.likes}</p>
        </div>
    )

    return (
        <>
            {allCard.map(cardItinerary)}
        </>
    )
}

export default Itinerary