import '../styles/Itinerary.css'
function Itinerary(props){
    const allCard = props.data

    const cardItinerary = (item) =>(
        <div className="itinerary-card">
            <div className='itinerary-container'>
                <h2 className="itinerary-name">{item.name}</h2>
                <h3 className="itinerary-user-name">{item.user.name}</h3>
                <div className="itinerary-card_price-duration">
                    <p className="itinerary-price">Price: {item.price}</p>
                    <p className="itinerary-duration">Duration: {item.duration}</p>
                </div>
                <p className="itinerary-tags">{item.tags}</p>
                <p className="itinerary-likes">{item.likes}</p>
            </div>
        </div>
    )

    return (
        <>
            {allCard.map(cardItinerary)}
        </>
    )
}

export default Itinerary