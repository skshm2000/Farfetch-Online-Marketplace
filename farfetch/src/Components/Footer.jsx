import {Flex, Stack, Spacer, Text} from '@chakra-ui/react'
import { BsInstagram,BsFacebook,BsSnapchat, BsTwitter,BsPinterest,BsYoutube  } from "react-icons/bs";

export default function Footer() {
    return (
        <Stack pt='5' pb='5' pr='35' pl='35' bgColor='#222222' color='white'>
            <Flex>
                <Stack>
                    <Text className='heading'>FARFETCH APP</Text>
                    <Text>Farfetch App for iOS and Android</Text>
                </Stack>
                <Spacer />
                <Stack>
                    <Text className='heading'>FOLLOW US</Text>
                    <Flex w='150%'>
                        <BsInstagram size='20px' />
                        <Spacer/>
                        <BsFacebook size='20px' />
                        <Spacer/>
                        <BsTwitter size='20px' />
                        <Spacer/>
                        <BsSnapchat size='20px' />
                        <Spacer/>
                        <BsPinterest size='20px' />
                        <Spacer/>
                        <BsYoutube size='20px' />
                    </Flex>
                </Stack>
                <Spacer />
                <Stack>
                    <Text className='heading'>CUSTOMER SERVICE</Text>
                    <Text className='item'>Contact us</Text>
                    <Text className='item'>Orders & Delivery</Text>
                    <Text className='item'>Payment & Pricing</Text>
                    <Text className='item'>Returns & Refunds</Text>
                    <Text className='item'>FAQs</Text>
                    <Text className='item'>Terms & Conditions</Text>
                    <Text className='item'>Promotion terms & conditions</Text>
                    <Text className='item'>Privacy policy</Text>
                    <Text className='item'>Accessibility</Text>
                </Stack>
                <Spacer />
                <Stack>
                <Text className='heading'>ABOUT FARFETCH</Text>
                    <Text className='item'>About Us</Text>
                    <Text className='item'>Investors</Text>
                    <Text className='item'>Boutique Partners</Text>
                    <Text className='item'>Affiliate Programme</Text>
                    <Text className='item'>Student discount UNiDAYS</Text>
                    <Text className='item'>Youth Discount</Text>
                    <Text className='item'>Careers</Text>
                    <Text className='item'>Customer Promise</Text>
                    <Text className='item'>FARFETCH App</Text>
                    <Text className='item'>Sitemap</Text>
                    <Text className='item'>Positively FARFETCH</Text>
                </Stack>
            </Flex>
            <Text textAlign="left">'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world. <br /> © Copyright 2022 FARFETCH UK Limited. All rights reserved.</Text>
        </Stack>
    )
}