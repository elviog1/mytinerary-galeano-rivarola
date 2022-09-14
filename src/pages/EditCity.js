import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Input from '../components/Input'
import EditInput from '../components/InputEdit'
import '../styles/NewCity.css'
import '../styles/EditCity.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function EditCity(){

const[items, setItems] = useState([])
useEffect(()=>{
axios.get('http://localhost:4000/cities/')
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
   const [selected, setSelected] = useState("")

   const selectCity = (e)=>{
    setSelected(cityValue.current.value)
   }
   
   const accion = (e)=>{
       e.preventDefault()
       let inputCity= document.getElementById("City").value
       let inputCountry= document.getElementById("Country").value
       let inputImage= document.getElementById("Image").value
       let inputPopulation= document.getElementById("Population").value
       let inputFundation= document.getElementById("Fundation").value
       

         axios.patch(`http://localhost:4000/cities/${selected}`,{           
               name: inputCity,
               country : inputCountry,
               image: inputImage,
               population: inputPopulation,
               fundation: inputFundation
            })
            .then(function(response){
                console.log(response)
                Toastify({
                    text:"City updated succesfully !",
                    destination:"http://localhost:3000/editcity"
                }).showToast()
            })
            .catch(function(error){
                console.log(error)
                if (error.response.data.message === "name to short") {
                    Toastify({
                        text:"Your name is too short, please try again(minimum 4 characters)"
                    }).showToast()
                }else{
                    Toastify({
                        text:"Invalid request please try again"
                    }).showToast()
                }
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
