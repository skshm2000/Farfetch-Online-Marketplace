import {Flex, Stack,Text,Box,SimpleGrid, Spacer, Button, Image, Input} from '@chakra-ui/react'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiFillGoogleCircle, AiFillApple, AiFillFacebook} from 'react-icons/ai'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './NewIn.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,Checkbox,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure
} from '@chakra-ui/react'
import ModalBodyTabs from "../Components/ModalBodyTabs"

export default function Navbar1() {
    const Navigator = useNavigate()
    const [newIn, changenewIn] = useState(true)
    const [shopBy, changeshopby] = useState(true)
    const [brands, changebrands] = useState(true)
    const [clothing, changeclothing] = useState(true)
    const [shoes, changeshoes] = useState(true)
    const [bags, changebags] = useState(true)
    const [accessories, changeaccess] = useState(true)
    const [jewelry, changejewelry] = useState(true)
    const [preowned, changepreowned] = useState(true)
    const [sale, changesale] = useState(true)
    let loco = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()

    function takeHome() {
        Navigator('/')
    }

    function displayer(x) {
        let arr = [changenewIn, changeshopby, changebrands, changeclothing, changeshoes, changebags, changeaccess, changejewelry, changepreowned, changesale]

        for(let i=0; i<arr.length; i++) {
            if(arr[i]==x) {
                arr[i](false)
            }else {
                arr[i](true)
            }
            
        }
    }

    function clothingTaker() {
        changeclothing(true)
        if(loco.pathname=='/men') {
            Navigator('/men/clothing')
        } else if (loco.pathname=='/women') {
            Navigator('/women/clothing')
        } else if (loco.pathname=='/kids') {
            Navigator('/kids/clothing')
        }
    }

    let activeStyle = {
        fontWeight: 'bold'
    }

    return (
        <Stack bgColor='white' alignContent='center' p='5' pb='0.8' className='mainNavbar'>
            <Flex>
               <Flex>
                    <Button variant='ghost'><NavLink style={({isActive})=>isActive?activeStyle:null} to='/women'>Women</NavLink></Button>
                    <Button variant='ghost'><NavLink style={({isActive})=>isActive?activeStyle:null} to='/men'>Men</NavLink></Button>
                    <Button variant='ghost'> <NavLink style={({isActive})=>isActive?activeStyle:null} to='/kids'>Kids</NavLink></Button>
                </Flex>
                <Spacer />
                <Image onClick={takeHome} w='210px' h='30px' src="https://www.farfetch.com/static/images/logo.png" alt='Main Logo'/>
                <Spacer />
                <Flex>
                    <Button variant='ghost' onClick={onOpen}><AiOutlineUser size='30px'/> </Button>
                    <Button variant='ghost' onClick={()=>Navigator('/wishlist')}><AiOutlineHeart  size='30px' /></Button>
                    <Button variant='ghost' onClick={()=>Navigator('/cart')}><AiOutlineShoppingCart  size='30px' /></Button>
                </Flex> 
            </Flex>
            <Flex alignContent='center' p='4'>
                <Flex hidden={(loco.pathname=="/men" ||loco.pathname=="/kids" || loco.pathname=="/women")?false:true} w='70%'>
                    <Text onMouseEnter={()=>displayer(changenewIn)}>New In</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changeshopby)}>Shop By</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changebrands)}>Brands</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changeclothing)} onClick={clothingTaker}>Clothing</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changeshoes)}>Shoes</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changebags)}>Bags</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changeaccess)}>Accessories</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changejewelry)}>Jewelry</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changepreowned)}>Pre-Owned</Text>
                    <Spacer />
                    <Text onMouseEnter={()=>displayer(changesale)} textColor='red'>Sale</Text>
                </Flex>                
            <Spacer />
            <Input w='19%' fontSize='16px' p='5' pl='3' placeholder='Search' size='xs'/>
            </Flex>
            <SimpleGrid className='grider' onMouseLeave={()=>changenewIn(true)} hidden={newIn} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changeshopby(true)} hidden={shopBy} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changebrands(true)} hidden={brands} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changeclothing(true)} hidden={clothing} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changeshoes(true)} hidden={shoes} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changebags(true)} hidden={bags} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changeaccess(true)} hidden={accessories} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changejewelry(true)} hidden={jewelry} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changepreowned(true)} hidden={preowned} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
            <SimpleGrid className='grider' onMouseLeave={()=>changesale(true)} hidden={sale} columns={5}>
                <Box>
                    <Text className='heading'>Whats New</Text>
                    <Text className='item'>New In Today</Text>
                    <Text className='item'>New: Classic</Text>
                    <Text className='item'>New: Expressionist</Text>
                    <Text className='item'>New: Glamour</Text>
                    <Text className='item'>New: Hype Streetwear</Text>
                    <Text className='item'>New: Minimalism</Text>
                    <Text className='item'>New: Modern Feminity</Text>
                </Box>
                <Box>
                    <Text className='heading'>Trending Now</Text>
                    <Text className='item'>All Pink Everything</Text>
                    <Text className='item'>High-Shine accessories</Text>
                    <Text className='item'>Leather outerwear</Text>
                    <Text className='item'>The Fall boot edit</Text>
                    <Text className='item'>Sweater Weather</Text>
                    <Text className='item'>The Browns Fashion Edit</Text>
                </Box>
                <Box>
                    <Text className='heading'>Discover</Text>
                    <Text className='item'>99 new season must-haves</Text>
                    <Text className='item'>Back by popular demand</Text>
                    <Text className='item'>Exclusives & Collabs</Text>
                    <Text className='item'>25 names to know</Text>
                </Box>
                <Box>
                    <Text className='heading'>The Highlights</Text>
                    <Text className='item'>All articles</Text>
                    <Text className='item'>Street Styles</Text>
                    <Text className='item'>How to</Text>
                    <Text className='item'>Brands We love</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Trends</Text>
                    <Text className='item'>Boutique directory</Text>
                    <Text className='item'>Conscious fashion</Text>
                </Box>
                <Stack>
                    <Image src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/21_09_22/WW/14-09-WW-NEW_IN-BEST_OF_BROWNS.jpg' />
                    <Text style={{textAlign:'left'}}>Spotlight On</Text>
                    <Text className='heading'>Best of Browns</Text>
                    <Text className='item'>Discover Now</Text>
                </Stack>
            </SimpleGrid>
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