import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Input from '../components/Input'
import EditInput from '../components/InputEdit'
import '../styles/NewCity.css'
import '../styles/EditCity.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useAllQuery } from '../features/citiesApi'
export default function EditItinerary(){

    // PARA RENDERIZAR LOS NOMBRES DE LOS ITINERARIES
    const[itineraries, setItineraries] = useState([])
    useEffect(()=>{
    axios.get('http://localhost:4000/itineraries/')
        .then(response => setItineraries(response.data.response))
    }, [])

    // PARA RENDERIZAR LOS NOMBRES DE LAS CIUDADES
    const[items, setItems] = useState([])
    useEffect(()=>{
    axios.get('http://localhost:4000/cities/')
        .then(response => setItems(response.data.response))
    }, [])

const values = [
    {value: 'Name', placeholder: 'Enter a new '},
    {value: 'Price', placeholder: 'Enter a new '},  
    {value: 'Tags', placeholder: 'Enter a new '},  
    {value: 'Duration', placeholder: 'Enter a new '},  
   ]


   const itineraryValue = useRef(null)
   const [selected, setSelected] = useState("")
   const selectItinerary = ()=>{
    setSelected(itineraryValue.current.value)
   }
   const citiesValue = useRef(null)
   const [selectedCity, setSelectedCity] = useState("")
   const selectCity = ()=>{
    setSelected(citiesValue.current.value)
   }

   let {
    data:cities,
    error,
    isLoading,
    isSuccess,
    isFailed
} = useAllQuery(citiesValue.current ? citiesValue.current.value : "")

if(isLoading){
    cities = []
}else if (isSuccess){
    cities = cities
}else if (isFailed){
    cities = []
}

   const accion = (e)=>{
       e.preventDefault()
       let inputName= document.getElementById("Name").value
    //    let inputCity= document.getElementById("City").value
       let inputPrice= document.getElementById("Price").value
       let inputTags= document.getElementById("Tags").value
       let inputDuration= document.getElementById("Duration").value



         axios.patch(`http://localhost:4000/itineraries/${selected}`,{           
                name: inputName,
                // city : cities.response[0]._id,
                // price: inputPrice,
                // tags: inputTags,
                // duration: inputDuration,
                // user: JSON.parse(localStorage.getItem('user')).id,
            })
            .then(function(response){
                console.log(response)
                Toastify({
                    text:"Itinerary updated succesfully !",
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
            <h1 className='nc-title'>Edit Itinerary</h1>
            <form className='nc-form'>
                <label  className='nc-label' htmlFor='select-city'>Select Itinerary
                <select  className='nc-input' ref={itineraryValue} onChange={setSelected}>
                <EditInput data={itineraries}/>
                </select> 
                </label>
                <label  className='nc-label' htmlFor='select-city'>Select City
                <select  className='nc-input' ref={citiesValue} onChange={setSelectedCity}>
                <EditInput data={items}/>
                </select> 
                </label>
                <Input data={values} />
                <button onClick={accion}   type="submit" className="nc-boton">Edit </button>
            </form>
        </div>
)
}
