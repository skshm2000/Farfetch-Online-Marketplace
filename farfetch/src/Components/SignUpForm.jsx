import {Stack, Radio,Checkbox,Flex,Spacer, RadioGroup,Box, Text, Heading, Button, Input, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import { useState, useRef } from 'react'

export default function SignUpForm() {
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
        <Stack w='32%' m='auto' pt='150px' pb='50px' pr='20px' pl='20px'>
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
    )
}