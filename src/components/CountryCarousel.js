
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../features/cityActions";
import Carousel from "./Carousel";


function CountryCarousel (){


// const[items, setItems] = useState([])
// useEffect(()=>{
// axios.get('http://localhost:4000/cities/')
//     .then(response => setItems(response.data.response))
// }, [])


const items = useSelector((state)=>
    state.citiesSlice.cities
)
const dispatch = useDispatch()
//console.log(items)
useEffect(()=>{
    dispatch(cityActions.all())
},[])


    return (
        <>
            <h1 className='Carousel-title'>Popular Cities</h1>
            <Carousel data={items} range={4} slides={3} interval={5}/>
        </>
    )
}


export default CountryCarousel