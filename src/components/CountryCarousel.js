
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "./Carousel";
import { useAllQuery } from "../features/citiesApi";
import axios from "axios";

function CountryCarousel (){

    // let {
    //     data:cities,
    //     error,
    //     isLoading,
    //     isSuccess,
    //     isFailed
    // } = useAllQuery()
    // let content
    // if(isLoading){
    //     cities = []
    // }else if(isSuccess){
    //     cities = cities.response
    // }else if(isFailed){
    //     cities = []
    // }

const[items, setItems] = useState([])
useEffect(()=>{
axios.get('https://my-tinerary-dreamjuan-back.herokuapp.com/cities/')
    .then(response => setItems(response.data.response))
}, [])


// const items = useSelector((state)=>
//     state.citiesSlice.cities
// )
// const dispatch = useDispatch()
// //console.log(items)
// useEffect(()=>{
//     dispatch(cityActions.all())
// },[])


    return (
        <>
            <h1 className='Carousel-title'>Popular Cities</h1>
            <Carousel data={items} range={4} slides={3} interval={5}/>
        </>
    )
}


export default CountryCarousel