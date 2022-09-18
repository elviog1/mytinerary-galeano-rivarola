import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'

// renderizado de links del nav
const pages = [
    {name: 'Home', to:'/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to:'/newcity'},
    {name: 'Edit city', to:'/editcity'},
    // {name: 'My Tineraries', to:'/itineraries/63125913116eb5ae120cb622'}
]
const link = (page) => <LinkRouter key={page.name} to={page.to} className='nav-item'>{page.name}</LinkRouter>


function Header() {
    const [userId, setUserId] =  useState('')
    
    // const para chequear si un usuario esta logeado
    const [logged,setLogged] = useState(false)
    useEffect(()=>{
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
        const user = JSON.parse(localStorage.getItem('user'))
        user ? setUserId(user.id) : setUserId("")
    },[])
    const mytin = [{name: "My Tineraries", to: `/itineraries/${userId}`}]
    
    const [isActive,setActive] = useState("false")
    const handleToggle = () =>{
        setActive(!isActive)
    }
    
    const click = ()=>{
        document.getElementById('login').classList.toggle('showLogin')
    }

    // function para cerrar sesion y sacar el user del localstorage
    async function signOut (){
        let email = JSON.parse(localStorage.getItem('user')).mail
        try{
            // let response = await axios.post('http://localhost:4000/auth/signout',{email})   // arreglar esto
            console.log(email)
            // setLogged(false)
            // localStorage.removeItem('user')
            setUserId("")
        }catch(error){
            console.log(error)
        }
    }

    return ( !logged ? (

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
                <LinkRouter to='/signin'>
                {/* <p className='header-login-option'>{JSON.parse(localStorage.getItem('user')).name}</p> */}
                <div className='header-login-option' onClick={signOut}>Sign in</div>
                </LinkRouter>
            </div>
        </div>
    ) :(
        <div className='Header'>
            <div className='Header-nav '>
                <div className={isActive ? 'active': null} id="active"> 
                    {pages.map(link)}
                </div>
                <button className='boton-burger' onClick={handleToggle}><img alt='burger' className='Header-burger ' src='https://img.icons8.com/doodle/344/menu.png' href='burger menu'/></button>
                <h1 className='Header-logo'><span>My</span>Tinerary</h1>
                <div className='Header-links'>
                    {pages.map(link)}
                    <LinkRouter key="newitinerary" to="/newitinerary" className='nav-item'>New Tinerary</LinkRouter>
                    {mytin.map(link)}
                </div>
            </div>
            <button onClick={click} className='header-button-avatar'>
                <img alt='avatar-login' src={JSON.parse(localStorage.getItem('user')).photo} className='Header-avatar' />
            </button>
        
            <div className='header-login' id='login'>
                <LinkRouter to='/signin'>
                <p className='header-login-option'>{JSON.parse(localStorage.getItem('user')).name}</p>
                <div className='header-login-option' onClick={signOut}>Sign out</div>
                </LinkRouter>
            </div>
        </div>
    )
    )
}

export default Header