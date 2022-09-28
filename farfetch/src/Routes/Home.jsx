import {Text, SimpleGrid,Box, Image, Heading,Flex,Accordion, Stack,
    AccordionItem,Input,
    AccordionButton,InputGroup, InputLeftAddon,
    AccordionPanel,
    AccordionIcon,Button,
    Spacer,Radio, RadioGroup, Checkbox} from '@chakra-ui/react'
import { TbHanger } from "react-icons/tb";
import { RiQuestionLine, RiChat2Line } from "react-icons/ri";
import './Home.css'
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../Components/SignUpForm';


export default function Home() {
    const Navigator = useNavigate()
    return (
        <>
            <Text className='deptText'>Choose a department</Text>
            <SimpleGrid columns='3' row='1' gap='5' w='95%' m='auto' mb='100px'>
                <div onClick={()=>Navigator('/women')} className="mainDiv">
                    <div className="bgImage">
                        <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358584/data/35f063c3600dc83729be3af4597b6349/16x9_three-columns/480/data.png'/>
                    </div>
                    <div className="fgText1">
                        <Heading fontFamily='farfetch'>SHOP WOMEN</Heading>
                    </div>
                </div>
                <div onClick={()=>Navigator('/men')} className="mainDiv">
                    <div className="bgImage">
                        <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358582/data/db104369ad2687b797128ca8a9fa8fbf/16x9_three-columns/480/data.png'/>
                    </div>
                    <div className="fgText">
                        <Heading fontFamily='farfetch'>SHOP MEN</Heading>
                    </div>
                </div>
                <div onClick={()=>Navigator('/kids')} className="mainDiv">
                    <div className="bgImage">
                        <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485568/data/56296828f1ebd020fd4f3eb3fdd3bff7/16x9_three-columns/480/data.png'/>
                    </div>
                    <div className="fgText">
                        <Heading fontFamily='farfetch'>KIDSWEAR</Heading>
                    </div>
                </div>
            </SimpleGrid>
            <Flex w='95%' m='auto'>
                <Box w='48%' >
                   <Text className='deptText1'>Featured Brands</Text> 
                   <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                MEN
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text className="innerText">Comme Des Garçons Play</Text>
                                <Text className="innerText">Brunello Cuchnelli</Text>
                                <Text className="innerText">TOM FORD Eyewear</Text>
                                <Text className="innerText">Thom Browne</Text>
                                <Text className="innerText">visvim</Text>
                                <Text className="innerText">Buscemi</Text>
                                <Text className="innerText">Raf Simons</Text>
                                <Text className="innerText">Axel Arigato</Text>
                                <Text className="innerText">Greg Lauren</Text>
                                <Text className="innerText">Homme Plisse Issey Miyake</Text>
                                <Text className="innerText">Casablanca</Text>
                                <Text className="innerText">Pringle of Scotland</Text>
                                <Text className="innerText">Mastermind Japan</Text>
                                <Text className="innerText">MCM</Text>
                                <Text className="innerText">Maison Kitsune</Text>
                                <Text className="innerText">Grenson</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                WOMEN
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text className="innerText">Paris Texas</Text>
                                <Text className="innerText">Canada Goose</Text>
                                <Text className="innerText">Amina Muaddi</Text>
                                <Text className="innerText">Self Portrait</Text>
                                <Text className="innerText">Amen</Text>
                                <Text className="innerText">MCM</Text>
                                <Text className="innerText">Stella McCartney</Text>
                                <Text className="innerText">Issey Miyake</Text>
                                <Text className="innerText">Jacquemus</Text>
                                <Text className="innerText">Comme Des Garçons</Text>
                                <Text className="innerText">Aquazzura</Text>
                                <Text className="innerText">Herno</Text>
                                <Text className="innerText">Gianvito Rossi</Text>
                                <Text className="innerText">LoveShackFancy</Text>
                                <Text className="innerText">Valextra</Text>
                                <Text className="innerText">ETRO</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                KIDS
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text className="innerText">Fendi Kids</Text>
                                <Text className="innerText">Gucci Kids</Text>
                                <Text className="innerText">Golden Goose Kids</Text>
                                <Text className="innerText">Givenchy Kids</Text>
                                <Text className="innerText">Moschino Kids</Text>
                                <Text className="innerText">Dolce & Gabbana Kids</Text>
                                <Text className="innerText">Bonpoint</Text>
                                <Text className="innerText">Monclear Enfant</Text>
                                <Text className="innerText">Burberry Kids</Text>
                                <Text className="innerText">Balmain Kids</Text>
                                <Text className="innerText">II Gufo</Text>
                                <Text className="innerText">Versace Kids</Text>
                                <Text className="innerText">The Marc Jacobs Kids</Text>
                                <Text className="innerText">Alexander McQueen Kids</Text>
                                <Text className="innerText">Adidas Yeezy Kids</Text>
                                <Text className="innerText">Balenciaga Kids</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    
                </Box>
                <Spacer />
                <Box w='48%'>
                    <Text className='deptText1'>Trending Now</Text>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                MEN
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text className="innerText">Jordan Low-Tops</Text>
                                <Text className="innerText">Off-White T-Shirts</Text>
                                <Text className="innerText">Fendi Boots</Text>
                                <Text className="innerText">Rick Owens Shoes</Text>
                                <Text className="innerText">Brioni Glasses & Frames</Text>
                                <Text className="innerText">Versace Shirts</Text>
                                <Text className="innerText">Palm Angels Hoodies</Text>
                                <Text className="innerText">Lanvin Sneakers</Text>
                                <Text className="innerText">Represent Clothing</Text>
                                <Text className="innerText">Maison Margiela Shoes</Text>
                                <Text className="innerText">MCM Backpacks</Text>
                                <Text className="innerText">Sebago Bags</Text>
                                <Text className="innerText">Supreme Hoodies</Text>
                                <Text className="innerText">Palm Angels Pants</Text>
                                <Text className="innerText">Moncler T-Shirts</Text>
                                <Text className="innerText">Y-3 Sweatpants</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                WOMEN
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text className="innerText">Gucci Belts</Text>
                                <Text className="innerText">ZIMMERMANN Skirts</Text>
                                <Text className="innerText">Fendi Boots</Text>
                                <Text className="innerText">Vivienne Westwood Jewelry</Text>
                                <Text className="innerText">Prada Shoulder Bags</Text>
                                <Text className="innerText">Jimmy Choo Clutch Bags</Text>
                                <Text className="innerText">ZIMMERMANN Blouses</Text>
                                <Text className="innerText">Isabel Marant Sneakers</Text>
                                <Text className="innerText">Ganni Boots</Text>
                                <Text className="innerText">Hogan Shoes</Text>
                                <Text className="innerText">Stella McCartney Tote Bags</Text>
                                <Text className="innerText">Pucci Dresses</Text>
                                <Text className="innerText">Moncler Shoes</Text>
                                <Text className="innerText">Fendi Beachwear</Text>
                                <Text className="innerText">Proenza Schouler Dresses</Text>
                                <Text className="innerText">Fendi Bag Accessories</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                KIDS
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text className="innerText">Moncler Enfant Clothing for Baby Boys</Text>
                                <Text className="innerText">Gucci Kids T-Shirts for Boys</Text>
                                <Text className="innerText">Moschino Kids Clothing for Baby Girls</Text>
                                <Text className="innerText">Moncler Enfant Hats for Boys</Text>
                                <Text className="innerText">Gucci Kids Shoes for Boys</Text>
                                <Text className="innerText">Gucci Kids Clothing for Baby Girls</Text>
                                <Text className="innerText">Givenchy Kids Clothing for Baby Boys</Text>
                                <Text className="innerText">Versace Kids Shoes for Boys</Text>
                                <Text className="innerText">Gucci Kids Jackets for Boys</Text>
                                <Text className="innerText">Moon Boot Kids Shoes for Girls</Text>
                                <Text className="innerText">Burberry Baby Boy Clothing</Text>
                                <Text className="innerText">Gucci Kids Clothing for Baby Boys</Text>
                                <Text className="innerText">Moschino Kids Girls Shoes</Text>
                                <Text className="innerText">Burberry Baby Girl Clothing</Text>
                                <Text className="innerText">KENZO Kids Clothing for Baby Boys</Text>
                                <Text className="innerText">Burberry Girls' Shoes</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                
                
            </Flex>
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
            </Flex>
            <SignUpForm />
        </>
    )
}