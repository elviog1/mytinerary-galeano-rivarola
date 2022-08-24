import React from 'react'
import '../styles/Footer.css'
import {Link as LinkRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
const pages = [
  {name: 'Home', to:'/'},
  {name: 'Cities', to: '/cities'},
  {name: 'NewCity', to:'/newcity'},
]

const link = (page) => <LinkRouter to={page.to} className='Footer-link'>{page.name}</LinkRouter>

export default function Footer() {

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })}
  return (
    <div className='Footer-div'>
      <LinkRouter to='/'><p className='Footer-title'><span className='Footer-my'>My</span>Tinerary</p></LinkRouter>
         <div>
            <p className='Footer-nav'>{pages.map(link)}</p>
        </div>
        <div className='Footer-redes'>
          <img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="logo-whatsapp" />
          <img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="logo-whatsapp" />
          <img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="logo-whatsapp" />         
        </div>
        <button onClick={scrollTo} className='top'>▲Bop to the top▲</button>
    </div>
  )
}
