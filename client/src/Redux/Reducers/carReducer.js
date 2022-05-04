import { GETCARS, GETONECAR } from "../Types/carTypes"


const initialState = {
    Cars : [],
    Car : {}
}

const carReducer=(state = initialState,action)=>{
        switch (action.type) {
            case GETCARS : return {...state,Cars : action.payload.Cars}
            case GETONECAR : return {...state,Car : action.payload.OneCar}
            default: return state
        
        }
}

export default carReducer