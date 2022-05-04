import { Badge } from '@chakra-ui/react'
import '../App.css'
import {
  Button as BTN,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons'
import { Icon, createIcon } from '@chakra-ui/react'
import Carouscard from './Carouscard';
import { Button } from 'react-bootstrap';
import {  IconButton, LightMode } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'

const Carinfocard = ({Car}) => {
    return (
      
        <div id='carcard'>
          
          <Center py={6}>
      <Stack borderWidth="1px" borderRadius="lg" w={{ sm: '100%', md: '540px' }} height={{ sm: '476px', md: '20rem' }}direction={{ base: 'column', md: 'row' }} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} padding={4} id='cardinf'>
        <Flex flex={1} bg="blue.200">
        <Carouscard/>
        <Icon viewBox='0 0 200 200' color='red.500'>
  <path
    src='https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1651149252~hmac=e8a1e815f6517c79058258d08ce035eb'
  />
</Icon>
        </Flex>
        <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
        <ViewIcon id='viewicon' style={{margin: "-2% 0 8% 84%",cursor:'pointer',position:"sticky"}}/>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
          {Car.brand} {Car.model}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {`${Car.price} DT`}
          </Text>
          
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {Car.puissance}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {Car.energie}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {Car.transmission}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {`${Car.kilometrage} KM`}
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
         <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{
        transform: 'scale(1.1)',
      }}
      sx={{
        ':hover > svg': {
          transform: 'scale(1.1)',
        },
      }}
      transition="all 0.15s ease"
      icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
      boxShadow="base"
      
    />
  </LightMode>
        <BTN flex={1}fontSize={'sm'}rounded={'full'}bg={'blue.400'}color={'white'}boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}_hover={{bg: 'blue.500',}}_focus={{bg: 'blue.500',}}>
          Regarder
          </BTN>
          </Stack>
        </Stack>
      </Stack>
      </Center>
            
        </div>
    )
}


export default Carinfocard