
import {  useRef, useState} from "react"
import CardCity from "../components/CardCity"
import { useAllQuery } from "../features/citiesApi"
export default function Cities(){
    
    const[searching, setSearching] = useState()
    const search = useRef("")
    const accion =() => {
        setSearching(search.current.value)
    }
    let {
        data:cities,
        error,
        isLoading,
        isSuccess,
        isFailed
    } = useAllQuery(search.current ? search.current.value : "")
    
    return(
            <div className="card-containter">
                <input onChange={accion}  ref={search}  type="search" className="cities-search" placeholder="Search country..." />
                <CardCity  data={cities} />
            </div>

    )
    }

   