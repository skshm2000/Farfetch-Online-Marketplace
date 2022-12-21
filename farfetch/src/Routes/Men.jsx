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
        axios.get('https://farfetchbackend.onrender.com/men').then(res=>{
            let data = res.data
            changeDisp1(data.splice(10, 4))
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
                        VALENTINO <br /> GARAVANI: ALL <br /> PINK EVERYTHING
                    </Heading>
                    <Text mb='25px' fontSize='20px'>Creative Director Pierpaolo Piccioli's new Valentino <br /> Pink PP collection turns fashion's boldest shade into a <br />versatile modern neutral - discover the runway <br />highlights here </Text>
                    <Button variant='outline'>Explore More</Button>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966294/data/1a5d386d73d925e6f4b523c422406e5c/1x1_messaging-side/637/data.jpeg'></Image>
                </Box>
            </Flex>
            <Stack ml='2.5%' w='45%' mb='80px'>
                <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966270/data/f25509d981329e1da4795bbce53e311e/1x1_two-columns/637/data.jpeg'></Image>
                <Text textAlign='left'>NEW JACKETS FOR ALL WEATHERS</Text>
                <Text textAlign='left'>For rain, shine or anything in between, these transitional jackets are the perfect pieces to help you navigate the seasons</Text>
            </Stack>
            <Stack w='95%' m='auto' mb='80px'>
                <Flex>
                    <Text fontSize='22px'>New in: hand-picked daily from the world’s best brands and boutiques</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'onClick={()=>{
                        nav('/men/clothing')
                    }}>Shop Now</Button>
                </Flex>
                <HStack spacing='25px'>
                    {disp1.map((ele)=><ProductViewer gender="men" brand={ele.category} key={ele._id} title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail}></ProductViewer>)}
                </HStack>
            </Stack>
            <Stack spacing='50px' w='95%' m='auto'>
                <Text fontSize='30px'>This Week's Highlights</Text>
                <Flex>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3969212/data/0c331e37e3a0e6c3adf0c33a2adcf32a/3x4_three-columns/480/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>GUCCI</Text>
                        <Text textAlign='left'>The new Exquisite collection is here</Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966310/data/a94ef12bfc9bdd5c17447a34b96c6748/3x4_three-columns/480/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>ICONS OF THE SEASON</Text>
                        <Text textAlign='left'>Raise the game in Valentino Garavani and more</Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966258/data/26fd1aac47f8ca27de0ea83948524a46/3x4_three-columns/480/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>PRADA</Text>
                        <Text textAlign='left'>Trending now: transitional jackets</Text>
                    </Stack>
                </Flex>
            </Stack>
            <Stack w='95%' m='auto' mb='80px' mt='120px'>
                <Flex>
                    <Text fontSize='22px'>Trending now: transitional jackets</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'onClick={()=>{
                        nav('/men/clothing')
                    }}>Shop Now</Button>
                </Flex>
                <HStack spacing='25px'>
                    {disp2.map((ele)=><ProductViewer gender="men" brand={ele.category} key={ele._id} title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail}></ProductViewer>)}
                </HStack>
            </Stack>
            <SignUpForm />
        </>
    )
}