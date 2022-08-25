import { useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'
const pages = [
    {name: 'Home', to:'/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to:'/newcity'},
]

const link = (page) => <LinkRouter to={page.to} className='nav-item'>{page.name}</LinkRouter>

function Header() {
    
    const [isActive,setActive] = useState("false")
    const handleToggle = () =>{
        setActive(!isActive)
    }
    

    return (
        <div className='Header'>
            <div className='Header-nav '>
                <div className={isActive ? 'active': null} id="active"> 
                    {pages.map(link)}
                </div>
                <button className='boton-burger' onClick={handleToggle}><img className='Header-burger ' src='https://img.icons8.com/doodle/344/menu.png'/></button>
                <h1 className='Header-logo'><span>My</span>Tinerary</h1>
                <div className='Header-links'>
                    {pages.map(link)}
                </div>
            </div>
        <img src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-login-web-store-flaticons-lineal-color-flat-icons-3.png' className='Header-avatar'></img>
        </div>
    )
}

export default Header