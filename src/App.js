import './App.css';
import WelcomeComponent from './pages/WelcomeComponent';
import LayoutBasico from './layouts/LayoutBasico';
import UnderConstruccion from './pages/UnderConstruction';
import Cities from './pages/Cities'
import NewCity from './pages/NewCity';
import Details from './components/Details';
import EditCity from './pages/EditCity';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return(
      <BrowserRouter>
        <ScrollToTop />
          <LayoutBasico>
          <Routes>
            <Route path='/' element={<WelcomeComponent/> }/>
            <Route path='/cities' element={<Cities/>}/>  
            <Route path='/*' element={<UnderConstruccion />}/>
            <Route path='/newcity' element={<NewCity />}/>
            <Route path='/cities/:id' element={<Details />}/> 
            <Route path='/editcity' element={<EditCity />}/>
          </Routes>
        </LayoutBasico>
      </BrowserRouter>
  ) 
}



export default App;