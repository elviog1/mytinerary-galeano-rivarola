
import {  useRef, useState} from "react"
import CardCity from "../components/CardCity"
import { useAllQuery } from "../features/citiesApi"
export default function Cities(){
    
    // const[items, setItems] = useState([])
    const[busqueda, setBusqueda] = useState()
    const search = useRef("")
    const accion =() => {
        setBusqueda(search.current.value)
    }
    let {
        data:cities,
        error,
        isLoading,
        isSuccess,
        isFailed
    } = useAllQuery(search.current ? search.current.value : "")
    console.log(cities)
    let content
    
    if(isLoading){
        cities = []
    }else if(isSuccess){
        cities = cities.response
    }else if(isFailed){
        cities = []
    }
    // let items = cities

// ciudades
// useEffect(()=>{
//     axios.get(`http://localhost:4000/cities?name=${busqueda}`)
//         .then(response => setItems(response.data.response))
//     },[busqueda])


// const items = useSelector((state)=>
//     state.citiesSlice.cities
// )
// const dispatch = useDispatch()

// useEffect(()=>{
//     dispatch(cityActions.all(busqueda))
// },[busqueda])

 

    return(
            <div className="card-containter">
                <input onChange={accion}  ref={search}  type="search" className="cities-search" placeholder="Search country..." />
                <CardCity  data={cities} />
                
                {/* <Itinerary info={itinerary} /> */}
            </div>

    )
    }

    // <input onKeyUp={() => setBusqueda(input.value)}type="text" title="Search" className="cities-search" placeholder="Search country..." />