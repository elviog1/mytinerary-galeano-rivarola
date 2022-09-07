
const initialState = {
    cities: []
}


 const citiesSlice = (state = initialState, action) => {
            switch(action.type){
                case 'GET_ALL':
                    return {
                        ...state,
                        cities: action.payload
                    }

            default: return state
            }
        }

export default citiesSlice


