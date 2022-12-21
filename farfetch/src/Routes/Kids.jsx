import {Flex, Spacer,HStack, Box, Heading,Stack, Text, Button, Image} from '@chakra-ui/react'
import './Women.css'
import ProductViewer from '../Components/ProductViewer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SignUpForm from '../Components/SignUpForm'
import { useNavigate } from 'react-router-dom'

export default function Men() {
    const [disp1, changeDisp1] = useState([])
    const [disp2, changeDisp2] = useState([])
    const nav = useNavigate()

    function dataGetter() {
        axios.get('https://farfetchbackend.onrender.com/kids').then(res=>{
            let data = res.data
            changeDisp1(data.splice(10, 3))
            changeDisp2(data.splice(15, 4))
        })
    }

    useEffect(()=>{
        dataGetter()
    }, [])

    return (
        <>
            <Flex m='auto' w='95%' mb='100px'>
                <Box id='box1' pt='180px'>
                    <Heading mb='25px' fontSize='45px' fontFamily='farfetch'>
                        FALL'S BEST <br /> OUTERWEAR
                    </Heading>
                    <Text mb='25px' fontSize='20px'>Layer up in the new season's best styles from Stand <br />Studio, Amiri and more</Text>
                    <Button variant='outline' onClick={()=>{
                        nav('/kids/clothing')
                    }}>Shop Now</Button>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965680/data/1493d066b69d04f7eb7f69b1ebf4d9fc/1x1_messaging-side/637/data.jpeg'></Image>
                </Box>
            </Flex>
            <Stack w='95%' spacing='50px' m='auto' mb='80px'>
                <Text fontSize='30px'>The best of new in</Text>
                <HStack spacing='25px'>
                    {disp1.map((ele)=><ProductViewer gender="kids" brand={ele.category} key={ele._id} title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail}></ProductViewer>)}
                </HStack>
            </Stack>
            <Stack spacing='50px' w='95%' m='auto'>
                <Text fontSize='30px'>This Week's Highlights</Text>
                <Flex>
                    <Spacer></Spacer>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965648/data/5b86ebffdb6e11dbb7217d93039bdccf/1x1_two-columns/637/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>NEW KICKS</Text>
                        <Text textAlign='left'>Explore our sneaker edit, courtesy of fashion’s biggest names</Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965758/data/467ff31f68b8e8c2e761ee2c52358788/1x1_two-columns/637/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>CONSCIOUS FASHION</Text>
                        <Text textAlign='left'>Little clothes made with the bigger picture in mind</Text>
                    </Stack>
                    <Spacer></Spacer>
                </Flex>
            </Stack>
            <Stack w='95%' m='auto' mb='80px' mt='120px'>
                <Flex>
                    <Text fontSize='22px'>Trending now: 150 most-wanted pieces</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'onClick={()=>{
                        nav('/kids/clothing')
                    }}>Shop Now</Button>
                </Flex>
                <HStack spacing='25px'>
                    {disp2.map((ele)=><ProductViewer gender="kids" brand={ele.category} key={ele._id} title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail}></ProductViewer>)}
                </HStack>
            </Stack>
            <Stack ml='2.5%' w='45%'>
                <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965740/data/6ee964c35a7d4526d278bf7089f2bebc/1x1_two-columns/637/data.jpeg'></Image>
                <Text textAlign='left'>GIVENCHY KIDS</Text>
                <Text textAlign='left'>Reenergized closet staples for fall</Text>
            </Stack>
            <SignUpForm />
        </>
    )
}