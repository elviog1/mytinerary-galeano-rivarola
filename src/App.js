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
import { useEffect, useState } from 'react';
import EditItinerary from './pages/EditItinerary';
import SignInAdmin from './pages/SignInAdmin';
import Perfil from './pages/Perfil';
import EditPerfil from './pages/EditPerfil';

function App() {

  const[logged, setLogged] = useState(false)
  const [admin, setAdmin] = useState(false)

   useEffect(()=>{
    JSON.parse(localStorage.getItem('user'))? setLogged(true):setLogged(false)
   }, [])
   useEffect(()=>{
    JSON.parse(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).role==='admin'&&setAdmin(true):setAdmin(false)
   }, [])

  return(
      <BrowserRouter>
        <ScrollToTop />
          <LayoutBasico>
          <Routes>
            <Route path='/' element={<WelcomeComponent/> }/>
            <Route path='/cities' element={<Cities/>}/>  
            <Route path='/*' element={<UnderConstruccion />}/>
            <Route path='/newcity' element={admin ?<NewCity />: <WelcomeComponent/>}/>
            <Route path='/cities/:id' element={<Details />}/> 
            <Route path='/editcity' element={admin ?<EditCity />: <WelcomeComponent/>}/>
            <Route path='/itineraries/:id' element={logged?<MyTineraries/>: <WelcomeComponent/>}/>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/newadmin' element={admin ? <SignInAdmin /> : <WelcomeComponent/>} />
            <Route path='/join' element={<SocketForm />} />
            <Route path='/newitinerary' element={logged?<NewItinerary />:<WelcomeComponent/>} />
            <Route path='/edititinerary' element={<EditItinerary />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/editperfil' element={<EditPerfil />} />
          </Routes>
        </LayoutBasico>
      </BrowserRouter>
  ) 
}



export default App;