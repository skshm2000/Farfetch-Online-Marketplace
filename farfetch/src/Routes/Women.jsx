import {Flex, Spacer,HStack, Box, Heading,Stack, Text, Button, Image} from '@chakra-ui/react'
import './Women.css'
import ProductViewer from '../Components/ProductViewer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SignUpForm from '../Components/SignUpForm'

export default function Women() {
    const [disp1, changeDisp1] = useState([])
    const [disp2, changeDisp2] = useState([])

    function dataGetter() {
        axios.get('https://farfetch-backend.herokuapp.com/products2').then(res=>{
            let data = res.data
            changeDisp1(data.splice(0, 4))
            changeDisp2(data.splice(4, 4))
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
                        WHAT TO WEAR <br /> NOW: MEET FALL'S <br /> NEW HEROS
                    </Heading>
                    <Text mb='25px' fontSize='20px'>From modern prep to grown-up glamous, the new season's <br /> most iconic looks have arrived. Explore the highlights for <br /> every style here</Text>
                    <Button variant='outline'>Explore More</Button>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938370/data/df9f215cae9a4e5b8bed7f86e3ee7fb6/1x1_messaging-side/637/data.jpeg'></Image>
                </Box>
            </Flex>
            <Stack ml='2.5%' w='45%' mb='80px'>
                <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3952344/data/f51e81c378fec49e786766b48cd09a3c/1x1_two-columns/637/data.jpeg'></Image>
                <Text textAlign='left'>DIESEL'S NEW ERA OF DENIM</Text>
                <Text textAlign='left'>Creative director Glenn Martens pushes the boundaries of fashion’s favorite <br /> fabric with his latest collection</Text>
            </Stack>
            <Stack w='95%' m='auto' mb='80px'>
                <Flex>
                    <Text fontSize='22px'>New in: hand-picked daily from the world’s best brands and boutiques</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'>Shop Now</Button>
                </Flex>
                <HStack spacing='25px'>
                    {disp1.map((ele)=><ProductViewer gender="women" brand={ele.category} key={ele._id} title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail}></ProductViewer>)}
                </HStack>
            </Stack>
            <Stack spacing='50px' w='95%' m='auto'>
                <Text fontSize='30px'>This Week's Highlights</Text>
                <Flex>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3952312/data/353004a3c04f8054c1274df45eca9665/3x4_three-columns/480/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>DOLCE & GABBANA</Text>
                        <Text textAlign='left'>Elevated monochrome for fall</Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3952302/data/97f265ab856d02eb271abeeb1a56c0e0/3x4_three-columns/480/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>ICONS OF THE SEASON</Text>
                        <Text textAlign='left'>Raise the game in Valentino Garavani and more</Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Stack w='32%'>
                        <Image mb='15px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3952282/data/3dbfe8fc7c406a0dd14be4e0823e1ff9/3x4_three-columns/480/data.jpeg'></Image>
                        <Text fontSize='18px' textAlign='left'>PRADA</Text>
                        <Text textAlign='left'>The go-to for season-transcending pieces</Text>
                    </Stack>
                </Flex>
            </Stack>
            <Stack w='95%' m='auto' mb='80px' mt='120px'>
                <Flex>
                    <Text fontSize='22px'>Trending now: transitional jackets</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'>Shop Now</Button>
                </Flex>
                <HStack spacing='25px'>
                    {disp2.map((ele)=><ProductViewer gender="women" brand={ele.category} key={ele._id} title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail}></ProductViewer>)}
                </HStack>
            </Stack>
            <SignUpForm />
        </>
    )
}