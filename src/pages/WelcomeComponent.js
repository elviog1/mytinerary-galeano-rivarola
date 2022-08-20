import '../styles/Welcome.css'
import CallToAction from '../components/CallToAction.js'

function WelcomeComponent(){
    return(
        <div className='App-container'>
            <h1 className='App-title'>MyTinerary</h1>
            <p className='App-title-description'>The best slogan is No Slogan</p>
            <a href='#' className='App-title-button'>Let´s Go!</a>
            {/* <CallToAction />no se por que no anda  */}
        </div>
         )
}

export default WelcomeComponent