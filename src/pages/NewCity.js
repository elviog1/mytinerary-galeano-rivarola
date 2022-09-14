import '../styles/NewCity.css'
import Input from '../components/Input'
import axios from 'axios'

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
        //let valor = { City: inputCity , Country : inputCountry, Image: inputImage,Population:inputPopulation, Fundation: inputFundation}
        //let resJson = valor
        //console.log(resJson)

             axios.post(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/`,{           
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
