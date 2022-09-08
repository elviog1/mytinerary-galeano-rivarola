
import {  useRef, useState} from "react"
import CardCity from "../components/CardCity"
import { useAllQuery } from "../features/citiesApi"
export default function Cities(){
    
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
    
    if(isLoading){
        cities = []
    }else if(isSuccess){
        cities = cities.response
    }else if(isFailed){
        cities = []
    }

 

    return(
            <div className="card-containter">
                <input onChange={accion}  ref={search}  type="search" className="cities-search" placeholder="Search country..." />
                <CardCity  data={cities} />
            </div>

    )
    }

   