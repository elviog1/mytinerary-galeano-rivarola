import '../styles/Cities.css'
function CardCity(props){
    const allCard = props.data


    const card =(item) =>(
        <div className="CardCity-container">
            <div className='CardCity-info'>
                <img src={item.url} className="CardCity-img" />
                <p className="CardCity-city">{item.city}</p>
                <p className="CardCity-country">{item.country}</p>
            </div>
        </div>
    )

    return(
        <>
           {allCard.map(card)}
        </>
    )
}

export default CardCity