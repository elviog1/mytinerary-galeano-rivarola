import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'
const pages = [
    {name: 'Home', to:'/'},
    {name: 'Cities', to: '/cities'},
    {name: 'NewCity', to:'/newcity'},
]

const link = (page) => <LinkRouter to={page.to} className={page.name}>{page.name}</LinkRouter>

function Header() {
    return (
        <div className='Header'>
            <div className='Header-nav'>
                <h1 className='Header-logo'>DreamJuan</h1>
                <div className='Header-links'>
                    {pages.map(link)}
                </div>
            </div>
        <img src='https://cdn-icons-png.flaticon.com/512/3293/3293331.png' className='Header-avatar'></img>
        </div>
    )
}

export default Header