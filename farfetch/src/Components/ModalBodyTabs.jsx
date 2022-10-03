import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Input,Checkbox,Text,Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { AiFillGoogleCircle, AiFillApple, AiFillFacebook} from 'react-icons/ai'
import {useEffect, useRef, useState, useContext} from 'react'
import axios from 'axios'
import {AuthContext} from '../Context/AuthContext'

export default function ModalBodyTabs({closer}) {
    const checkAuth = useContext(AuthContext)
    const newEmail = useRef(null)
    const newPass = useRef(null)
    const newName = useRef(null)
    const loginEmail = useRef(null)
    const loginPass = useRef(null)
    const [newEmailErr, changeNewEmailErr] = useState(false)
    const [newPassErr, changeNewPassErr] = useState(false)
    const [users, changeUsers] = useState([])
    const [registerButton, changeRegisterLoad] = useState(false)
    const [emailErr, changeEmailErr] = useState(false)
    const [passErr, changePassErr] = useState(false)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    function newRegister() {
        changeRegisterLoad(true)
        changeNewEmailErr(false)
        changeNewPassErr(false)
        let users1 = users.filter((ele)=>ele.email==newEmail.current.value)
        if(users1.length>0) {
            changeNewEmailErr(true)
            changeRegisterLoad(false)
            return
        } else if(newPass.current.value.length<8) {
            changeNewPassErr(true)
            changeRegisterLoad(false)
            return
        }
        axios.post('https://saksham-farfetch-api.herokuapp.com/profile',{
            "id":Math.random(),
            "name":newName.current.value,
            "email":newEmail.current.value,
            "password":newPass.current.value
        }).then(()=>{
            newName.current.value = ""
            newEmail.current.value = ""
            newPass.current.value = ""
            changeRegisterLoad(false)
            closer()
        })
        
    }

    async function loginer() {
        changePassErr(false)
        changeEmailErr(false)
        let user = await axios.get(`https://saksham-farfetch-api.herokuapp.com/profile?email=${loginEmail.current.value}`).then(res=>res.data)
        if(user.length==0) {
            changeEmailErr(true)
            return
        } else if(loginPass.current.value!=user[0].password) {
            changePassErr(true)
            return
        }
        changeRegisterLoad(false)
        checkAuth.changeAuth(true)
        closer()
    }   

    function dataGetter() {
        axios.get('https://saksham-farfetch-api.herokuapp.com/profile').then(res=>changeUsers(res.data))
    }

    useEffect(()=>{
        dataGetter()
    },[])

    return (
        <>
        <Tabs>
            <TabList>
                <Tab>SIGN IN</Tab>
                <Tab>I'M NEW HERE</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Stack overflowY='scroll'>
                    <label htmlFor="">
                        Email Address
                        <Input isInvalid={emailErr} ref={loginEmail}></Input>
                        {emailErr ? <Text color='red'>Email not found. Sign Up Instead</Text>:null}
                    </label>
                    <label htmlFor="">
                        Password
                        <InputGroup size='md'>
                            <Input
                                isInvalid={passErr}  ref={loginPass}
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {passErr ? <Text color='red'>Password do not match</Text>:null}
                    </label>
                    <Checkbox>Keep me signed in?</Checkbox>
                    <Text>Forgot your password?</Text>
                    <Button color='white' loadingText='Checking Credentials' isLoading={registerButton} bgColor='#222222' onClick={loginer}>Sign in</Button>
                    <Text textAlign='center'>or</Text>
                    <Button variant='outline' leftIcon={<AiFillGoogleCircle/>}>Sign in with Google</Button>
                    <Button variant='outline' leftIcon={<AiFillApple />}>Sign in with Apple</Button>
                    <Button variant='outline' leftIcon={<AiFillFacebook/>}>Sign in with Facebook</Button>
                </Stack>
                </TabPanel>
                <TabPanel>
                <Stack overflowY='scroll'>
                    <label htmlFor="">
                        Name
                        <Input ref={newName}></Input>
                    </label>
                    <label htmlFor="">
                        Email Address
                        <Input isInvalid={newEmailErr} ref={newEmail}></Input>
                        {newEmailErr?<Text color='red'>Email Already Registered</Text>:null}
                    </label>
                    <label htmlFor="">
                        Password
                        <InputGroup size='md'>
                            <Input
                                isInvalid={newPassErr} ref={newPass}
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {newPassErr?<Text color='red'>Password should be minmum 8 characters</Text>:null}
                    </label>
                    <Text>By registering, you agree with our Terms & <br /> Conditions and Privacy and Cookie Policy.</Text>

                    <Checkbox>Sign up for early Sale access plus tailored new arrivals, trends and promotions. Find out more. To opt out, click unsubscribe in our emails.</Checkbox>
                    <Button color='white' bgColor='#222222' onClick={newRegister} isLoading={registerButton} loadingText='Checking Credentials'>Register</Button>
                    <Text textAlign='center'>or</Text>
                    <Button variant='outline' leftIcon={<AiFillGoogleCircle/>}>Sign in with Google</Button>
                    <Button variant='outline' leftIcon={<AiFillApple />}>Sign in with Apple</Button>
                    <Button variant='outline' leftIcon={<AiFillFacebook/>}>Sign in with Facebook</Button>
                </Stack>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </>
    )
}