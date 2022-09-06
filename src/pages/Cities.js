import React, { Component } from "react"
import { useEffect, useRef, useState, useLocation, useHistory } from "react"
import CardCity from "../components/CardCity"
import axios from 'axios'
import api_url from "../api"


export default function Cities(){

const[items, setItems] = useState([])
const[busqueda, setBusqueda] = useState("")
const search = useRef(null)

useEffect(()=>{
    axios.get(api_url+`/cities?name=` + `${busqueda}`)
        .then(response => setItems(response.data.response))
    },[busqueda])

    const accion =() => setBusqueda(search.current.value)


    return(
            <div className="card-containter">
                <input onKeyUp={accion}  ref={search}  type="search" className="cities-search" placeholder="Search country..." />
               <CardCity  data={items} />
            </div>

    )
    }

    // <input onKeyUp={() => setBusqueda(input.value)}type="text" title="Search" className="cities-search" placeholder="Search country..." />