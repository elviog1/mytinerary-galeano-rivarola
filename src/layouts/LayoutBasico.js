import Footer from '../components/Footer';
import '../styles/LayoutBasico.css'

function LayoutBasico(props){
   return(
    <>
    <div className='main'>
     { props.children }
    </div>
     <Footer />
    </>
) }

export default LayoutBasico
