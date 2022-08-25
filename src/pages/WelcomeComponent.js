import '../styles/Welcome.css'
import CallToAction from '../components/CallToAction.js'
import CountryCarousel from '../components/CountryCarousel'
import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

function WelcomeComponent(){
    return(
        <>
        <div className='App-container'>
            <h1 className='App-title'><span>My</span>Tinerary</h1>
            <p className='App-title-description'>Take the trip of you always wanted, to the city of your drems</p>
        <CallToAction />
        </div>
        <CountryCarousel/>
        </>
         )
}

export default WelcomeComponent