import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import {Heading,Box, Stack,Text, Button} from '@chakra-ui/react'
import SignUpForm from '../Components/SignUpForm'
import {
    Modal,
    ModalOverlay,
    ModalContent,Flex,Spacer,
    ModalHeader,
    ModalBody,
    ModalCloseButton,useDisclosure,
} from '@chakra-ui/react'
import ModalBodyTabs from "../Components/ModalBodyTabs"
import { WishlistContext } from "../Context/WishlistContext"
import WishlistItems from '../Components/WishlistItems'

export default function Wishlist() {
    let checkAuth = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Wishlist = useContext(WishlistContext)


    useEffect(()=>{
        window.scrollTo({top:'0'})
    }, [])

    if(checkAuth.isAuth==false) {
        return (
            <Stack>
                <Stack w='50%' m='auto' mb='80px' pt='80px'>
                    <Heading fontFamily='farfetch'>WISHLIST</Heading>
                    <Text>Looking for your wishlist? Sign in to pick up where you left off.</Text>
                    <Button style={{display:'block', margin:'auto', marginTop:'40px'}} onClick={onOpen} w='50%' color='white' bgColor="#222222">Sign In</Button>
                </Stack>
                <Box>
                    <SignUpForm need='no' />
                </Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Come on in</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    <ModalBodyTabs closer={onClose} />
                </ModalBody>
                </ModalContent>
                </Modal>
            </Stack>
            
        )
    }
    return (
        <>
            <Stack>
            <Heading fontFamily='farfetch'>Wishlist</Heading>
            {/* {Wishlist.wishlistItems.length==0?} */}
            <Text>{Wishlist.wishlistItems.length==1 ? "1 PIECE":Wishlist.wishlistItems.length + " PIECES"}</Text>
            <Flex w='95%' alignSelf='center'>
                
                {Wishlist.wishlistItems.map(ele=><><Spacer></Spacer><WishlistItems title={ele.title} price={ele.price} id={ele._id} image={ele.img_url} category={ele.category}></WishlistItems><Spacer></Spacer></>)}
            </Flex>
            <Box>
                <SignUpForm need='no' />
            </Box>
            </Stack>
        </>
    )
}