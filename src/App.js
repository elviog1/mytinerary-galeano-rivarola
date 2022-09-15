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
import MyTineraries from './pages/MyTineraries';
import SignIn from './pages/SignIn';
import SocketForm from './components/SocketForm';
import NewItinerary from './pages/NewItinerary';

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
            <Route path='/itineraries/:id' element={<MyTineraries/>}/>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/join' element={<SocketForm />} />
            <Route path='/newItinerary' element={<NewItinerary />} />
          </Routes>
        </LayoutBasico>
      </BrowserRouter>
  ) 
}



export default App;