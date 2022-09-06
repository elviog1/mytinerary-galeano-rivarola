import '../styles/Cities.css'
import {Link as LinkRouter} from 'react-router-dom'


function CardCity(props){
    const allCard = props.data


    const card =(item) =>(
            <LinkRouter to={item._id} key={item.name}>
            <div className="CardCity-container">
            <div className='CardCity-info city-hover'>
                <img alt={item.name} src={item.image} className="CardCity-img" />
                <p className="CardCity-city">{item.name}</p>
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