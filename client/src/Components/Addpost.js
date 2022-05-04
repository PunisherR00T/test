import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react"
import { Button, Form} from "react-bootstrap"
import '../App.css'

const Addpost = () => {
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
    return (
        <div id="Addpost">
            <FormControl>
  <FormLabel htmlFor='country'>Marque</FormLabel>
  <Select id='country' placeholder='Selectioner une marque'>
    <option>Bmw</option>
    <option>Mercedes</option>
  </Select>
</FormControl>

<FormControl>
  <FormLabel htmlFor='country'>Modéle</FormLabel>
  <Select id='country' placeholder='Selectioner le modéle'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>



    <FormControl>
  <FormLabel htmlFor='country'>Année</FormLabel>
  <Select id='country' placeholder="Choisissez l'année">
    <option>2022</option>
    <option>2021</option>
  </Select>
</FormControl>

<FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>kilométrage</FormLabel>
      <Input
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>Description</FormLabel>
      <Input
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>Prix</FormLabel>
      <Input
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>

    

    <FormControl>
  <FormLabel htmlFor='country'>Transmission</FormLabel>
  <Select id='country' placeholder="Type de transmission">
    <option>Manuelle</option>
    <option>Automatique</option>
  </Select>
</FormControl>


    <FormControl>
  <FormLabel htmlFor='country'>Energie</FormLabel>
  <Select id='country' placeholder="Type du carburant">
    <option>Essence</option>
    <option>Diesel</option>
  </Select>
</FormControl>

<FormControl>
  <FormLabel htmlFor='country'>Puissance</FormLabel>
  <Select id='country' placeholder='Puissance du véhicule'>
    <option>350</option>
    <option>120</option>
  </Select>
</FormControl>

<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Choisissez un fichier</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
    

        </div>


    )
}

export default Addpost