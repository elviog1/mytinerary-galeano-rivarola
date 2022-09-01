import axios from "axios";
import { useState,useEffect } from "react";
import Carousel from "./Carousel";


function CountryCarousel (){


const[items, setItems] = useState([])
useEffect(()=>{
axios.get('http://localhost:4000/cities/')
    .then(response => setItems(response.data.response))
}, [])

    return (
        <>
            <h1 className='Carousel-title'>Popular Cities</h1>
            <Carousel data={items} range={4} slides={3} interval={5}/>
        </>
    )
}


export default CountryCarousel