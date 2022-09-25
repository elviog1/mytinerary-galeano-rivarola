import '../styles/NewCity.css'
import Input from '../components/Input'
import axios from 'axios'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function NewCity(){
    const items = [
     {value: 'City', placeholder: ' Enter a new '},
     {value: 'Country', placeholder: ' Enter a new '},
     {value: 'Image', placeholder: ' Enter a new '},  
     {value: 'Population', placeholder: ' Enter a new '},  
     {value: 'Fundation', placeholder: ' Enter a new '},  
    ]
    
    
    const accion = (e)=>{
        e.preventDefault()
        let inputCity= document.getElementById("City").value
        let inputCountry= document.getElementById("Country").value
        let inputImage= document.getElementById("Image").value
        let inputPopulation= document.getElementById("Population").value
        let inputFundation= document.getElementById("Fundation").value

<<<<<<< HEAD
             axios.post(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/`,{           
=======

             axios.post(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities`,{           
>>>>>>> 494c011b04a11f7dfb5814b705517d474303fa58
                  name: inputCity,
                  country : inputCountry,
                  image: inputImage,
                  population: inputPopulation,
                  fundation: inputFundation
                })
                .then(function(response){
                    console.log(response)
                    Toastify({
                        text:"City created succesfully !",
                        destination:"https://my-tinerary-dreamjuan-back.herokuapp.com/newcity"
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
     return(
        <div className='new-city-container'>
            <h1 className='nc-title'>New City</h1>
            <form className='nc-form'>
                <Input data={items}/>
                <button onClick={accion}  id="send" type="submit" className="nc-boton">Add city</button>
            </form>
        </div>
    )
}
