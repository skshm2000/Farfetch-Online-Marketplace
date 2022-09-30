import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import {Heading,Box, Stack,Text, Button} from '@chakra-ui/react'
import SignUpForm from '../Components/SignUpForm'
import Recommendations from '../Components/Recommendations'

export default function Cart() {
    let checkAuth = useContext(AuthContext)
    
    if(checkAuth.isAuth==false) {
        return (
            <Stack>
                <Stack w='50%' m='auto' mb='150px' pt='80px'>
                    <Heading fontFamily='farfetch'>Shopping List</Heading>
                    <Text>Your bag is empty <u>Sign in or register</u> to sync your bag to any device</Text>
                    <Button style={{display:'block', margin:'auto', marginTop:'40px'}} w='50%' color='white' bgColor="#222222">Shop Women</Button>
                    <Button style={{display:'block', margin:'auto', marginTop:'10px'}} w='50%' color='white' bgColor="#222222">Shop Men</Button>
                </Stack>
                <Box>
                    <Recommendations genderr='men'/>
                </Box>
                <Box>
                    <SignUpForm need='no' />
                </Box>
            </Stack>
            
        )
    }
    return (
        <>
        </>
    )
}