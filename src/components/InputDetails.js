import { useNavigate } from 'react-router-dom'
import '../styles/Cities.css'

function InputDetails(props){
    const allCard = props.data

    let navigate = useNavigate()
  const back = () =>{
    navigate('/cities')
  }

    const card =(item) =>(
            <div className="CardCity-container">
            <div className='CardCity-info'>
                <div className='cardCity-close'>
                    <p className="CardCity-city">{item.name}</p>
                    <button className='close-button' onClick={back} >X</button>
                </div>
                <img src={item.image} className="CardCity-img img-mobile" />
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