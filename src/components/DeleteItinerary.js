import axios from "axios"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useByuserQuery } from "../features/itineraiesApi"

function DeleteItinerary (props){
    const itineraryId = props.itinerary
    let id = JSON.parse(localStorage.getItem('user')).id
    let{data: itineraries } = useByuserQuery(id) //retorna un itinerary con ese "id"

    const deleteItinerary = ()=>{
        axios.delete(`https://my-tinerary-dreamjuan-back.herokuapp.com/itineraries/${itineraryId}`)
        Toastify({
            text:"Comment Deleted succesfully !"
        }).showToast()
    }
    return(
        <div>
            {itineraries?.map(itinerary => itinerary.user._id === JSON.parse(localStorage.getItem('user')).id ? /* si soy el dueño del itinerary , puedo borrar el itinerary*/
            <button key={itinerary._id} onClick={deleteItinerary}  className='cardComment-button'>Delete Itinerary</button>  :
            null)}
        </div>

    )
    
}

export default DeleteItinerary