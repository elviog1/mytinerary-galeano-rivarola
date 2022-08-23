import '../styles/Welcome.css'
import CallToAction from '../components/CallToAction.js'
import React from 'react'

function WelcomeComponent(){
    return(
        <div className='App-container'>
            <h1 className='App-title'>MyTinerary</h1>
            <p className='App-title-description'>The best slogan is No Slogan</p>
            <a href='#' className='App-button'>Let´s Go!</a>
            <CallToAction />
        </div>
         )
}

export default WelcomeComponent