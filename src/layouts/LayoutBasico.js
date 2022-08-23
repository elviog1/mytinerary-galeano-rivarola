import Header from '../components/Header.js'
import Footer from '../components/Footer.js';
import '../styles/LayoutBasico.css';


function LayoutBasico(props) { 
   return (
    <div>
    <Header />
     { props.children }
     <Footer />
    </div>
) }

export default LayoutBasico
