import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'



function Header() {

    const [userId, setUserId] =  useState('')
    // const para chequear si un usuario esta logeado
    const [logged,setLogged] = useState(false)

    // renderizado de links del nav
    const pagesNoLogged = [
        {name: 'Home', to:'/'},
        {name: 'Cities', to: '/cities'},
    ]
    const pagesLogged = [
        {name: 'Home', to:'/'},
        {name: 'Cities', to: '/cities'},
        {name: 'New Itinerary', to:'/newitinerary'},
        {name: "My Tineraries", to: `/itineraries/${userId}`}
    ]
    const pagesAdmin = [
        {name: 'Home', to:'/'},
        {name: 'Cities', to: '/cities'},
        {name: 'Edit city', to:'/editcity'},
        {name: 'Edit Itinerary', to:'/edititinerary'},
        {name: 'New City', to:'/newcity'},
        {name: 'New Itinerary', to:'/newitinerary'},
        {name: "My Tineraries", to: `/itineraries/${userId}`},
        {name: "New Admin", to: `/newadmin`}
    ]
    const link = (page) => <LinkRouter key={page.name} to={page.to} className='nav-item'>{page.name}</LinkRouter>
    
    useEffect(()=>{
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
        const user = JSON.parse(localStorage.getItem('user'))
        user ? setUserId(user.id) : setUserId("")
    },[])
    
    const [isActive,setActive] = useState("false")
    const handleToggle = () =>{
        setActive(!isActive)
    }
    
    const click = ()=>{
        document.getElementById('login').classList.toggle('showLogin')
    }

    // function para cerrar sesion y sacar el user del localstorage
    async function signOut (){
        let id = JSON.parse(localStorage.getItem('user')).id
        try{
             let response = await axios.post(`https://my-tinerary-dreamjuan-back.herokuapp.com/auth/signout/${id}`)   
             console.log(response)
            setLogged(false)
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            setUserId("")
        }catch(error){
            console.log(error)
        }
    }

    return ( !logged ? (
        <div className='Header'>
            <div className='Header-nav '>
                <div className={isActive ? 'active': null} id="active"> 
                    {pagesNoLogged.map(link)}
                </div>
                <button className='boton-burger' onClick={handleToggle}><img alt='burger' className='Header-burger ' src='https://img.icons8.com/doodle/344/menu.png' href='burger menu'/></button>
                <h1 className='Header-logo'><span>My</span>Tinerary</h1>
                <div className='Header-links'>
                    {pagesNoLogged.map(link)}
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
                {JSON.parse(localStorage.getItem('user')).role === "admin" ? pagesAdmin.map(link) : pagesLogged.map(link)}
                    
                    
                </div>
                <button className='boton-burger' onClick={handleToggle}><img alt='burger' className='Header-burger ' src='https://img.icons8.com/doodle/344/menu.png' href='burger menu'/></button>
                <h1 className='Header-logo'><span>My</span>Tinerary</h1>
                <div className='Header-links'>
                    {/* {pagesLogged.map(link)} */}
                    {JSON.parse(localStorage.getItem('user')).role === "admin" ? pagesAdmin.map(link) : pagesLogged.map(link)}
                    {/* <LinkRouter key="newitinerary" to="/newitinerary" className='nav-item'>New Tinerary</LinkRouter>
                    {mytin.map(link)} */}
                </div>
            </div>
            <button onClick={click} className='header-button-avatar'>
                <img alt='avatar-login' src={JSON.parse(localStorage.getItem('user')).photo} className='Header-avatar' />
            </button>
        
            <div className='header-login' id='login'>
                <LinkRouter to='/perfil'>
                    <p className='header-login-option'>{JSON.parse(localStorage.getItem('user')).name}</p>
                </LinkRouter>
                <LinkRouter to='/signin'>
                    <div className='header-login-option' onClick={signOut}>Sign out</div>
                </LinkRouter>
                {/* <LinkRouter to='/join'>
                    <div className='header-login-option' >Chat</div>
                </LinkRouter> */}
            </div>
        </div>
    )
    )
}

export default Header