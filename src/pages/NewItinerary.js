import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Input from "../components/Input"
import EditInput from "../components/InputEdit"

function NewItinerary(){
    // renderizado de labels con inputs
    const values = [
        {value:"Name", placeholder:"Enter a new "},
        {value:"Price", placeholder:"Enter a new "},
        {value:"Tags", placeholder:"Enter a new "},
        {value:"Duration", placeholder:"Enter a new "},
    ]


    

    // renderizado de <select> cities
    const[items, setItems] = useState([])
    useEffect(()=>{
    axios.get('http://localhost:4000/cities/')
        .then(response => setItems(response.data.response))
    }, [])

    // response.find(){name={select}}
    
    const accion = (e)=>{
        e.preventDefault()
        const inputName = document.getElementById("Name").value
        const inputPrice =document.getElementById("Price").value
        const inputTags = document.getElementById("Tags").value
        const inputDuration =document.getElementById("Duration").value
        const inputCity =document.getElementById("City").value
        let cityID =items.find(city => city.name ==inputCity)._id
        


        axios.post(`http://localhost:4000/itineraries`,{ // chequear esta parte
            city: cityID,
            name: inputName,
            price: inputPrice,
            tags: inputTags,
            duration: inputDuration,
            likes: [],
            user: JSON.parse(localStorage.getItem('user')).id
        }).then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })

    }

    return(
        <div className='new-city-container'>
            <h1 className='nc-title'>New Itinerary</h1>
            <form className="nc-form">
                <select className='nc-input'  id="City">
                    <EditInput data={items}/>
                </select>
                <Input  data={values}/>
                <button onClick={accion} type="submit" className="nc-boton">Create</button>
            </form>
        </div>
    )

}

export default NewItinerary