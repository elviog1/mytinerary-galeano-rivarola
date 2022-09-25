import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Input from '../components/Input'
import EditInput from '../components/InputEdit'
import '../styles/NewCity.css'
import '../styles/EditCity.css'
<<<<<<< HEAD
import api_url from '../api'
=======
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useAllQuery, useEditCityMutation, useGetIDQuery } from '../features/citiesApi'
>>>>>>> 494c011b04a11f7dfb5814b705517d474303fa58

export default function EditCity(){

const[items, setItems] = useState([])
useEffect(()=>{
<<<<<<< HEAD
axios.get(api_url+'/cities/')
=======
axios.get('https://my-tinerary-dreamjuan-back.herokuapp.com/cities/')
>>>>>>> 494c011b04a11f7dfb5814b705517d474303fa58
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
console.log(selected)


    const {data:city} = useAllQuery(selected)
    
    const cityID = city ? city.response[0]._id : null
   const selectCity = (e)=>{
    setSelected(cityValue.current.value)
   }
   const [editCity,{data:cityUpdate,isSuccess,error}] = useEditCityMutation()

   console.log(error)
   const accion = (e)=>{
       e.preventDefault()
        let data;
       let inputCity= document.getElementById("City").value
       let inputCountry= document.getElementById("Country").value
       let inputImage= document.getElementById("Image").value
       let inputPopulation= document.getElementById("Population").value
       let inputFundation= document.getElementById("Fundation").value
       data={
           name: inputCity,
           country : inputCountry,
           image: inputImage,
           population: inputPopulation,
           fundation: inputFundation
        }
        console.log(data)

<<<<<<< HEAD
         axios.patch(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/${seleccionada}`,{           
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
=======
        editCity({name:cityID,data})
        if(cityUpdate?.success){
            Toastify({
                    text:cityUpdate.message,
                     destination:"https://my-tinerary-dreamjuan-back.herokuapp.com/editcity"
                    }).showToast()
        }else{
            Toastify({
                    text:error.data.message
                    }).showToast()
        }
        
        //  axios.patch(`http://localhost:4000/cities/${selected}`,{           
        //        name: inputCity,
        //        country : inputCountry,
        //        image: inputImage,
        //        population: inputPopulation,
        //        fundation: inputFundation
        //     })
        //     .then(function(response){
        //         console.log(response)
        //         Toastify({
        //             text:"City updated succesfully !",
        //             destination:"http://localhost:3000/editcity"
        //         }).showToast()
        //     })
        //     .catch(function(error){
        //         console.log(error)
        //         if (error.response.data.message === "name to short") {
        //             Toastify({
        //                 text:"Your name is too short, please try again(minimum 4 characters)"
        //             }).showToast()
        //         }else{
        //             Toastify({
        //                 text:"Invalid request please try again"
        //             }).showToast()
        //         }
        //     })
>>>>>>> 494c011b04a11f7dfb5814b705517d474303fa58
            }

    return (
        <div className='new-city-container'>
            <h1 className='nc-title'>Edit City</h1>
            <form className='nc-form'>
                <label  className='nc-label' htmlFor='select-city'>Select City
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
