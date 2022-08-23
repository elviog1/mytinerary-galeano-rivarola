import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='Footer-div'>
      <p className='Footer-title'><span className='Footer-my'>My</span>Tinerary</p>
      <div>
        <p className='Footer-direccion'>Rivadavia 3472</p>
        </div>
        <div className='Footer-redes'>
          <img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="logo-whatsapp" />
          <img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="logo-whatsapp" />
          <img className='Footer-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="logo-whatsapp" />         
        </div>
    </div>
  )
}
