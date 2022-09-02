import '../styles/UnderConstruccion.css'
import { Link as LinkRouter } from 'react-router-dom' 

export default function UnderConstruccion() {
   return(
   <div className='UC-container'>
      <h1 className='UC-title'>THIS PAGE IS STILL IN DEVELOPMENT</h1>
      <p className='UC-description'>Sorry for the inconvenience</p>
      <LinkRouter to= '/' className='back'>🠸🠸🠸Go back</LinkRouter>
   </div>
   )
}