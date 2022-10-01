import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import {Heading,Box,Flex,Spacer, Stack,Text, Button} from '@chakra-ui/react'
import SignUpForm from '../Components/SignUpForm'
import Recommendations from '../Components/Recommendations'
import {
    Modal,
    ModalOverlay,
    ModalContent,Checkbox,
    ModalHeader,
    Input,
    ModalBody,
    ModalCloseButton,useDisclosure,Divider
} from '@chakra-ui/react'
import ModalBodyTabs from "../Components/ModalBodyTabs"
import { useNavigate } from "react-router-dom"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CartContext } from "../Context/CartContext"
import CartItems from "../Components/CartItems"

export default function Cart() {
    let checkAuth = useContext(AuthContext)
    const Navigator = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bag = useContext(CartContext)

    useEffect(()=>{
        window.scrollTo({top:'0'})
    }, [])

    if(checkAuth.isAuth==false) {
        return (
            <Stack>
                <Stack w='50%' m='auto' mb='150px' pt='80px'>
                    <Heading fontFamily='farfetch'>Shopping List</Heading>
                    <Text>Your bag is empty <u onClick={onOpen}>Sign in or register</u> to sync your bag to any device</Text>
                    <Button style={{display:'block', margin:'auto', marginTop:'40px'}} w='50%' color='white' onClick={()=>Navigator('/women/clothing')} bgColor="#222222">Shop Women</Button>
                    <Button style={{display:'block', margin:'auto', marginTop:'10px'}} w='50%' color='white' onClick={()=>Navigator('/men/clothing')} bgColor="#222222">Shop Men</Button>
                </Stack>
                <Box>
                    <Recommendations genderr='men'/>
                </Box>
                <Stack alignSelf='center' textAlign='left' bgColor='lightgray' direction='row' w='95%' spacing='15px' p='15px'>
                    <Box>
                        <Text fontWeight='bold'>Need Help?</Text>
                        <Text>Contact our global Customer Service team, you can reach us by phone or email. Alternatively, you may find the answer in our Frequently Asked Questions page.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight='bold'>Call Us</Text>
                        <Text fontWeight='bold'>+1 646 791 3768</Text>
                        <Text>Available Monday to Friday, 08:00 - 21:00 EST</Text>
                    </Box>
                    <Box>
                        <Text fontWeight='bold'>Email us</Text>
                        <Text><u>Click here to send us an email</u></Text>
                    </Box>
                    <Box>
                        <Text fontWeight='bold'>FAQs</Text>
                        <Text>Find the answers you need in our FAQs</Text>
                    </Box>
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
                <ModalBodyTabs  closer={onClose} />
                </ModalBody>
                </ModalContent>
            </Modal>
            </Stack>
        )
    }
    return (
        <>
            <Stack>
                <Heading mb='30px' fontFamily='farfetch'>SHOPPING BAG</Heading>
                <Flex  w='95%' alignSelf='center'>
                    <Stack alignItems='left' w='77%' spacing='10px'>
                        <Flex>
                            <Text>Sending from <b>United States</b></Text>
                            <Spacer></Spacer>
                            <Spacer></Spacer>
                            <Text>Import duties are included</Text>
                            <Spacer></Spacer>
                            <AiOutlineInfoCircle />
                        </Flex>
                        <Divider orientation='horizontal' />
                        <Stack spacing='20px'>
                            {bag.cartItems.map(ele=><CartItems detail={ele.detail} title={ele.title} size={ele.size} category={ele.category} price={ele.price} id={ele._id} image={ele.img_url}></CartItems>)}
                        </Stack>
                    </Stack>
                    <Spacer></Spacer>
                    <Stack w='21%' spacing='25px' mt='20px'>
                        <Text textAlign='left' fontSize='18px' fontWeight='bold'>Summary</Text>
                        <Box>
                            <Flex>
                            <Text>Subtotal</Text>
                            <Spacer></Spacer>
                            <Text>${bag.cartItems.reduce((acc,ele)=>acc+ele.price,0)}</Text>
                            </Flex>
                            <Flex>
                                <Text>Delivery</Text>
                                <Spacer></Spacer>
                                <Text>$24</Text>
                            </Flex>
                        </Box>
                        <Divider mt='20px' mb='20px' orientation='horizontal' />
                        <Flex>
                            <Text>Total</Text>
                            <Spacer></Spacer>
                            <Stack textAlign='right'>
                                <Text>USD$ {bag.cartItems.reduce((acc,ele)=>acc+ele.price,0) + 24}<br/>Import duties included</Text> 
                            </Stack>
                        </Flex>
                        <Button bgColor='#222222' color='white'>Go to checkout ></Button>
                    </Stack>
                </Flex>

                <Box>
                    <SignUpForm />
                </Box>
                
            </Stack>
        </>
    )
}