import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/authActions"

const Myinfo = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    return (
        <div>
            
            <h1>{user.role}</h1>
            <h1>{user.firstname}</h1>
            <h1>{user.lastname}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
        </div>
    )
}

export default Myinfo