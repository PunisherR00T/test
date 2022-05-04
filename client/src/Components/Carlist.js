import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../Redux/Actions/carActions"
import Carinfocard from "./Carinfocard"
import NavCar from "./NavCar"

const Carlist = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
    const Cars = useSelector(state=> state.carReducer.Cars)
    return (
        <div>
            <NavCar/>
        
        <section id="Section" style={{textAlign:"center"}}>
            
            {
                Cars.map(Car => <Carinfocard key={Car._id} Car={Car}/>)
            }
            
        </section>
        </div>
    )
}

export default Carlist