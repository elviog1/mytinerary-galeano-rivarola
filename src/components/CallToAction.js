import '../styles/Welcome.css'
import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

function CallToAction() {
    return (
        <>
        <LinkRouter to='cities' className='App-button'>Let´s Go!</LinkRouter>
        <img src='/img/ArrowUp.gif' alt='Arrow Up' className='Arrow-up'/>
        <p className='App-button-description'>Click here to see the best destinys</p>
        </>
    )

}

export default CallToAction