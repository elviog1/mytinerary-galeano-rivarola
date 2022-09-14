import axios from "axios";

const cityActions = {
    all: (busqueda) =>{
        return async(dispatch,getState) =>{
            const cities = await axios.get(`https://my-tinerary-dreamjuan-back.herokuapp.com/cities/${busqueda ? `?name=${busqueda}`:''}`)
            dispatch({type: 'GET_ALL',payload: cities.data.response})
    // console.log(cities)
            
        }
    }
}

export default cityActions