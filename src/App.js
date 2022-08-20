import './App.css';
import WelcomeComponent from './pages/WelcomeComponent';
import LayoutBasico from './layouts/LayoutBasico';
import CountryCarousel from './components/CountryCarousel'
import UnderConstruccion from './pages/UnderConstruction';






function App() {
  return(
      <>
      <LayoutBasico>
      <WelcomeComponent />
      <CountryCarousel />
      {/* <UnderConstruccion /> */}
      </LayoutBasico>
      </>
  ) 

}



export default App;