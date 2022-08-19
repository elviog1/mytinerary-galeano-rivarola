import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './pages/WelcomeComponent';
import Footer from './components/Footer';
import CountryCarousel from './components/CountryCarousel'




function App() {
  return(
      <>
      <WelcomeComponent />
      <CountryCarousel />
      <Footer />
      </>
  ) 

}



export default App;