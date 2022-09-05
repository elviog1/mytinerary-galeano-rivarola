
import { useEffect, useRef, useState} from "react"
import CardCity from "../components/CardCity"
import axios from 'axios'
import Itinerary from "../components/Itinerary"
import { useDispatch,useSelector } from "react-redux"
import cityActions from "../features/cityActions"

export default function Cities(){

// const[items, setItems] = useState([])
const[busqueda, setBusqueda] = useState("")
const search = useRef(null)

// ciudades
// useEffect(()=>{
//     axios.get(`http://localhost:4000/cities?name=${busqueda}`)
//         .then(response => setItems(response.data.response))
//     },[busqueda])

const accion =() => setBusqueda(search.current.value)

const items = useSelector((state)=>
    state.citiesSlice.cities
)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(cityActions.all(busqueda))
},[busqueda])

    
// itinerarios
// const [itinerary,setItinerary] = useState([])

// useEffect(()=>{
//     axios.get(`http://localhost:4000/itineraries`)
//         .then(response =>console.log(response.data.response))
//       }, [])


    return(
            <div className="card-containter">
                <input onKeyUp={accion}  ref={search}  type="search" className="cities-search" placeholder="Search country..." />
                <CardCity  data={items} />
                {/* <Itinerary info={itinerary} /> */}
            </div>

    )
    }

    // <input onKeyUp={() => setBusqueda(input.value)}type="text" title="Search" className="cities-search" placeholder="Search country..." />