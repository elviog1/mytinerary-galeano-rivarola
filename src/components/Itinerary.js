
function Itinerary(props){
    const allCard = props.info

    const cardItinerary = (item) =>{
        <div className="itinerary-card">
            <h2>{item.name}</h2>
            <h3>{item.user}</h3>
            <p>{item.city}</p>
            <div className="itinerary-card_price-duration">
                <p>Price: {item.price}</p>
                <p>Duration: {item.duration}</p>
            </div>
            <p>{item.tags}</p>
            <p>{item.likes}</p>
        </div>
    }

    return (
        <>
            {cardItinerary(allCard)}
        </>
    )
}

export default Itinerary