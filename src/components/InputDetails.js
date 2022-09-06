import '../styles/Cities.css'
function InputDetails(props){
    const allCard = props.data


    const card =(item) =>(
            <div className="CardCity-container">
            <div className='CardCity-info'>
                <img src={item.image} className="CardCity-img" />
                <p className="CardCity-city">{item.name}</p>
                <p className="CardCity-country">{item.country}</p>
                <div className='cardCity-info'>
                    <p className='cardCity-population'>Population: {item.population/*.toLocaleString("de-DE")*/}</p>
                    <p className='cardCity-fundation'>Fundation: {item.fundation/*.toLocaleString("de-DE")*/}</p>
                </div>
            </div>
        </div>

    )

    return(
        <>
           {card(allCard)}
        </>
    )
}

export default InputDetails