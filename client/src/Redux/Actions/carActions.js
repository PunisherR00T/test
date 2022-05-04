import axios from "axios"
import { GETCARS, GETONECAR } from "../Types/carTypes"

export const getCars=()=>async (dispatch)=>{
        try {
            const res = await axios.get('/api/car/GetCars')
            dispatch({
                type : GETCARS,
                payload : res.data
            })
        } catch (error) {
            console.log(error)
        }
}

export const addCar=(newCar)=>async(dispatch)=>{
        try {
            await axios.post('/api/car/AddCar',newCar)
            dispatch(getCars())
        } catch (error) {
            console.log(error)
        }
}

export const deleteCar=(id)=>async(dispatch)=>{
        try {
        
            await axios.delete(`/api/car/DeleteCar/${id}`)
            dispatch(getCars())
        } catch (error) {
            console.log(error)
        }
}

export const updateCar=(id,data)=>async(dispatch)=>{
        try {
            await axios.put(`/api/car/UpdateCar/${id}`,data)
            dispatch(getCars())
        } catch (error) {
            console.log(error)
        }
}

export const getOneCar=(id)=>async(dispatch)=>{
        try {
            const res = await axios.get(`/api/car/GetUserCar/${id}`)
            dispatch({
                type : GETONECAR,
                payload : res.data
            })
        } catch (error) {
            console.log(error)
        }
}

