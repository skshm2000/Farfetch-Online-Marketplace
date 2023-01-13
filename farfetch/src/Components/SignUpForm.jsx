import {Stack, Radio,Checkbox,Flex,Spacer, RadioGroup,Box, Text, Heading, Button, Input, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { TbHanger } from "react-icons/tb";
import { RiQuestionLine, RiChat2Line } from "react-icons/ri";
import '../Routes/Home.css'

export default function SignUpForm({need="yes"}) {
    const [value, setValue] = useState('0')
    const [showEmail, changeShowEmail] = useState(false)
    const [showNumber, changeShowNumber] = useState(true)
    let emailChecker = useRef(null)
    let numberChecker = useRef(null)

    function emailFlipper() {
        changeShowEmail(!emailChecker.current.checked)
    }

    function numberFlipper() {
        changeShowNumber(!numberChecker.current.checked)
    }
    return (
        <>
        {need=='yes'?
        <Flex w='95%' m='auto' mt='150'>
                <Stack className='container1'>
                    <TbHanger size='30px'/>
                    <Text>HOW TO SHOP</Text>
                    <Text>Your guide to shopping and placing orders</Text>
                </Stack>
                <Spacer />
                <Stack className='container1'>
                    <RiQuestionLine size='30px'/>
                    <Text>FAQS</Text>
                    <Text>Your questions answered</Text>
                </Stack>
                <Spacer />
                <Stack className='container1'>
                    <RiChat2Line size='30px'/>
                    <Text>NEED HELP?</Text>
                    <Text>Contact our global customer service team</Text>
                </Stack>
        </Flex>:null}       

        <Stack w={{
            base:'75%',
            sm: '60%',
            md: '45%',
            lg: '40%',
            xl: '32%',
            '2xl': '32%',
            }} m='auto' pt='150px' pb='50px' pr='20px' pl='20px'>
            <Heading fontFamily='farfetch'>SIGN UP AND GET 15% OFF</Heading>
            <Text>Sign up for promotions, tailored new arrivals, stock <br /> updates and more – straight to your inbox</Text>
            <RadioGroup onChange={setValue} value={value}>
                <Flex mt='7' mb='7'>
                    <Spacer />
                    <Radio value='1'>Womens Wear</Radio>
                    <Spacer />
                    <Radio value='2'>Mens Wear</Radio>
                    <Spacer />
                </Flex>
            </RadioGroup>
            <Text textAlign='left'>GET UPDATES BY</Text>
            <Checkbox ref={emailChecker} onChange={emailFlipper} defaultChecked>Email</Checkbox>
            <Input hidden={showEmail} placeholder='large size' size='lg' placeHolder="Email" />
            <Checkbox ref={numberChecker} onChange={numberFlipper}>SMS</Checkbox>
            <InputGroup hidden={showNumber}>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='Your Phone number' />
            </InputGroup>
            <Box mt='100' w='100%'>
                <Button bgColor='#222222' w='100%' color='white'>Sign Up</Button>
            </Box>            
        </Stack>
        </>
    )
}