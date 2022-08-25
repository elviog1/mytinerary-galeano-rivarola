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

    let fecha = new Date()
    let año = fecha.getFullYear()
  return (
    <div className='Footer-div'>
      <LinkRouter to='/'><p className='Footer-title'><span className='Footer-my'>My</span>Tinerary</p></LinkRouter>
         <div>
            <p className='Footer-nav'>{pages.map(link)}</p>
        </div>
        <div className='Footer-redes'>
          <a href='https://api.whatsapp.com/send/?phone=5491115151515&text&type=phone_number&app_absent=0'><img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="logo-whatsapp" /></a>
          <a href='https://www.instagram.com/mytinerary_/'><img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="logo-whatsapp" /></a>
          <a href='https://twitter.com/MytineraryApp'><img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="logo-whatsapp" /> </a>        
        </div>
        <button onClick={scrollTo} className='top'>▲Bop to the top▲</button>
        <p className='Footer-nav'>{año}</p>
    </div>
  )
}
