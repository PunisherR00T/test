import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { handleShow, register } from "../Redux/Actions/authActions"
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Errors from "./Errors"
const Register = () => { 

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(register({firstname,lastname,email,password,phone},navigate))
    }
    

    return (
              <div id="wrapregis">
        
              <FormControl>
                <FormLabel>Prénom</FormLabel>
                <Input ref={initialRef} placeholder='Prénom' onChange={(e)=>setFirstname(e.target.value)} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Nom</FormLabel>
                <Input onChange={(e)=>setLastname(e.target.value)} placeholder='Nom' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input onChange={(e)=>setEmail(e.target.value)} id='email' type='email' placeholder="Entrez votre email" />
                <FormHelperText>Veuillez utiliser une adresse valide</FormHelperText>
                </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mot de Passe</FormLabel>
                <InputGroup size='md'>
                    <Input onChange={(e)=>setPassword(e.target.value)} pr='4.5rem'type={show ? 'text' : 'password'} placeholder='Entrez un mot de passe'/>
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>{show ? 'Cacher' : 'Montrer'}</Button>
                    </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Numéro</FormLabel>
                <InputGroup id="divnum">
                    <InputLeftAddon children='+216' />
                    <Input onChange={(e)=>setPhone(e.target.value)} type='tel' placeholder='Votre numéro de téléphone' maxLength="8" />
                    
                </InputGroup>
              </FormControl>
              
              
              <Button colorScheme='blue' mr={3} onClick={(e)=>{handleRegister(e);}}>
                Valider
              </Button>
              <Button onClick={onClose} as={Link} to='/'>Annuler</Button>
            
      </div>
    )
  }

  export default Register