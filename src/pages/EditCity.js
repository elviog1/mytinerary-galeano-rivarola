import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Input from '../components/Input'
import EditInput from '../components/InputEdit'
import '../styles/NewCity.css'
import '../styles/EditCity.css'
import api_url from '../api'

export default function EditCity(){

const[items, setItems] = useState([])
useEffect(()=>{
axios.get(api_url+'/cities/')
    .then(response => setItems(response.data.response))
}, [])

const values = [
    {value: 'City', placeholder: 'Enter a new '},
    {value: 'Country', placeholder: 'Enter a new '},
    {value: 'Image', placeholder: 'Enter a new '},  
    {value: 'Population', placeholder: 'Enter a new '},  
    {value: 'Fundation', placeholder: 'Enter a new '},  
   ]
   const cityValue = useRef(null)
   const [seleccionada, setSeleccionada] = useState("")

   const selectCity = (e)=>{
    setSeleccionada(cityValue.current.value)
   }
   
   const accion = (e)=>{
       e.preventDefault()
       let inputCity= document.getElementById("City").value
       let inputCountry= document.getElementById("Country").value
       let inputImage= document.getElementById("Image").value
       let inputPopulation= document.getElementById("Population").value
       let inputFundation= document.getElementById("Fundation").value
       

         axios.patch(`http://localhost:4000/cities/${seleccionada}`,{           
               name: inputCity,
               country : inputCountry,
               image: inputImage,
               population: inputPopulation,
               fundation: inputFundation
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })
            }

    return (
        <div className='new-city-container'>
            <h1 className='nc-title'>Edit City</h1>
            <form className='nc-form'>
                <label for='select-city' className='nc-label'>Select City
                <select id='select-city' className='nc-input' ref={cityValue} onChange={selectCity}>
                <EditInput data={items}/>
                </select> 
                </label>
                <Input data={values} />
                <button onClick={accion}  id="send" type="submit" className="nc-boton">Edit city</button>
            </form>
        </div>
)
}
