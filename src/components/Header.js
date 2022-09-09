import { useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'
const pages = [
    {name: 'Home', to:'/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to:'/newcity'},
    {name: 'Edit city', to:'/editcity'},
    {name: 'My Tineraries', to:'/itineraries/63125913116eb5ae120cb622'}
]

const link = (page) => <LinkRouter key={page.name} to={page.to} className='nav-item'>{page.name}</LinkRouter>

function Header() {
    
    const [isActive,setActive] = useState("false")
    const handleToggle = () =>{
        setActive(!isActive)
    }
    
    const click = ()=>{
        document.getElementById('login').classList.toggle('show')
    }

    return (
        <div className='Header'>
            <div className='Header-nav '>
                <div className={isActive ? 'active': null} id="active"> 
                    {pages.map(link)}
                </div>
                <button className='boton-burger' onClick={handleToggle}><img alt='burger' className='Header-burger ' src='https://img.icons8.com/doodle/344/menu.png' href='burger menu'/></button>
                <h1 className='Header-logo'><span>My</span>Tinerary</h1>
                <div className='Header-links'>
                    {pages.map(link)}
                </div>
            </div>
            <button onClick={click} className='header-button-avatar'>
                <img alt='avatar-login' src='https://cdn-icons-png.flaticon.com/512/3711/3711310.png' className='Header-avatar' />
            </button>
        <div className='header-login' id='login'>
            <p className='header-login-option'>Login</p>
        </div>
        </div>
    )
}

export default Header