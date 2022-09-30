import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import {Heading,Box, Stack,Text, Button} from '@chakra-ui/react'
import SignUpForm from '../Components/SignUpForm'

export default function Wishlist() {
    let checkAuth = useContext(AuthContext)
    
    if(checkAuth.isAuth==false) {
        return (
            <Stack>
                <Stack w='50%' m='auto' mb='80px' pt='80px'>
                    <Heading fontFamily='farfetch'>WISHLIST</Heading>
                    <Text>Looking for your wishlist? Sign in to pick up where you left off.</Text>
                    <Button style={{display:'block', margin:'auto', marginTop:'40px'}} w='50%' color='white' bgColor="#222222">Sign In</Button>
                </Stack>
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