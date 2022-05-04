import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { current } from "../Redux/Actions/authActions"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import ProfileBtns from "./ProfileBtns"
const Profile = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    return (
        <div style={{textAlign:"center"}} id='profile'>
            
        <ProfileBtns linki={'/ajouter-une-annonce'} name={'Ajouter une annonce'}/>
        <ProfileBtns linki={'/mes-informations'} name={'Mes informations'}/>
        <ProfileBtns linki={'/mes-favoris'} name={'Mes Favoris'}/>
        <ProfileBtns linki={'/mes-annonces'} name={'Mes Annonces'}/>
    

        </div>  
        
    )
}

export default Profile