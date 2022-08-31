import '../styles/Cities.css'
import {Link as LinkRouter} from 'react-router-dom'
import axios from 'axios'

function CardCity(props){
    const allCard = props.data


    const card =(item) =>(
            <LinkRouter to={item._id} >
            <div className="CardCity-container">
            <div className='CardCity-info'>
                <img src={item.image} className="CardCity-img" />
                <p className="CardCity-city">{item.name}</p>
                {/* <p className="CardCity-country">{item.country}</p>
                <div className='cardCity-info'>
                    <p className='cardCity-population'>Population: {item.population.toLocaleString("de-DE")}</p>
                    <p className='cardCity-fundation'>Fundation: {item.fundation.toLocaleString("de-DE")}</p>
                </div> */}
            </div>
        </div>
            </LinkRouter>

    )

    return(
        <>
           {allCard.map(card)}
        </>
    )
}

export default CardCity