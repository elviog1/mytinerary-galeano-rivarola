import { Link } from 'react-router-dom'
import '../styles/Perfil.css'
function Perfil (){

    let info = JSON.parse(localStorage.getItem("user"))

    return(
        <div className='new-city-container'>
            <h1 className='nc-title'>Perfil</h1>
            <div className='nc-form'>
                <img src={info.photo} className="perfi-img"/>
                <div className="perfil-description">
                    <p className='perfil-info'>Name: <span className='perfil-span'>{info.name}</span></p>
                    <p className='perfil-info'>Country: <span className='perfil-span'>{info.country}</span></p>
                    <p className='perfil-info'>Email: <span className='perfil-span'>{info.mail}</span></p>
                    <p className='perfil-info'>Role: <span className='perfil-span'>{info.role}</span></p>
                </div>
            <Link to="/editperfil">
                <button className="nc-boton">Update </button>
            </Link>
            </div>
        </div>

    )
}

export default Perfil