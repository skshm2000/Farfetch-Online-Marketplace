import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import {Flex, Heading} from '@chakra-ui/react' 
import {AiOutlineHeart} from 'react-icons/ai'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    Grid,
    Box,
    GridItem,
    Stack,
    Text,
    Button,
    Select,
    Spacer,Tabs, TabList, TabPanels, Tab, TabPanel, 
} from '@chakra-ui/react'
import {AiFillTag, AiTwotoneStar, AiOutlineDropbox, AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import {ChevronRightIcon} from '@chakra-ui/icons'
import Recommendations from '../Components/Recommendations'
import SignUpForm from '../Components/SignUpForm'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useContext } from "react"; 
import { WishlistContext } from "../Context/WishlistContext";
import { useToast } from '@chakra-ui/react'
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";

export default function ProductPage() {
    const params = useParams()
    const [dispData, changeDisp] = useState([])
    const Wishlist = useContext(WishlistContext)
    const toast = useToast()
    const Auth = useContext(AuthContext)
    const Cart = useContext(CartContext)
    const size = useRef(null)

    function dataGetter() {
        let url = 'https://farfetchbackend.onrender.com'

        axios.get(`${url}/${params.person}`).then(res=>{
            let x = res.data.filter((ele)=>ele.title==params.id)
            changeDisp(x)
        })
    }

    function addToWishlist() {
        if(Auth.isAuth==false) {
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bgColor='#222222' borderRadius='8px'>
                    You need to login first!
                    </Box>
                ),
            })
            return 
        }
        let arr = [...Wishlist.wishlistItems]
        for(let i=0; i<arr.length; i++) {
            if(arr[i]._id==dispData[0]._id){
                toast({
                    position: 'bottom-left',
                    render: () => (
                      <Box color='white' p={3} bgColor='#222222' borderRadius='8px'>
                        Item already in wishlist
                      </Box>
                    ),
                })
                return 
            }
        }
        arr = [...Wishlist.wishlistItems,...dispData]
        Wishlist.changeWishlistItems(arr)
        toast({
            position: 'bottom-left',
            render: () => (
              <Box color='white' p={3} bgColor='#222222' borderRadius='8px'>
                Added to wishlist
              </Box>
            ),
          })
    }

    function addToCart() {
        if(Auth.isAuth==false) {
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bgColor='red' borderRadius='8px'>
                    You need to login first!
                    </Box>
                ),
            })
            return 
        }
        if(size.current.value=="") {
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bgColor='red' borderRadius='8px'>
                    Please select your size
                    </Box>
                ),
            })
            return 
        }
        let obj = dispData[0]
        obj.size=size.current.value
        let arr =[...Cart.cartItems, obj]
        Cart.changeCartItems(arr)
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bgColor='#222222' borderRadius='8px'>
                Item added to cart
                </Box>
            ),
        })
    }

    useEffect(()=>{
        dataGetter()
    }, [])

    useEffect(()=>{
        window.scrollTo({top:'0'})
        dataGetter()
    }, [params])
    
    
    return(
        <>
            <Grid
            w='95%'
            m='auto'
            templateAreas={`"one two five"
                            "three four five"`}
            gridTemplateColumns={'1fr 1fr 1fr '}
            gridTemplateRows={'400px 400px'}
            gap='5'>
                <GridItem area={'one'}>{dispData[0]?<Image boxSize='100%' src={dispData[0].img_url}></Image>:<Skeleton height='100%' />}</GridItem>
                <GridItem area={'two'}>{dispData[0]?<Image boxSize='100%' src={dispData[0].img_url}></Image>:<Skeleton height='100%' />}</GridItem>
                <GridItem area={'three'}>{dispData[0]?<Image boxSize='100%' src={dispData[0].img_url}></Image>:<Skeleton height='100%' />}</GridItem>
                <GridItem area={'four'}>{dispData[0]?<Image boxSize='100%' src={dispData[0].img_url}></Image>:<Skeleton height='100%' />}</GridItem>
                <GridItem area={'five'}>
                    <Stack spacing='12'>
                        {dispData.length!=0?<Text fontSize='16px' textAlign='left'>{dispData[0].title} <br /> <Heading mb='-20px'>{dispData[0].category}</Heading><br />{dispData[0].detail}</Text>:<Skeleton height='100%'/>}
                    <Stack>
                        {dispData[0]?<Text fontSize='30px' textAlign='left'><b>{`${dispData[0]?.price}`}</b></Text>:<Skeleton height='100%' />}
                        <Text textAlign='left'>Import Duties Included</Text> 
                    </Stack>
                    <Stack>
                        <Select w='100%' ref={size} variant='Unstyled' placeholder='Select Size'>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </Select>
                        <Flex>
                            <Button w='70%' color='white' bgColor='#222222' onClick={addToCart} colorScheme='gray'>Add to Bag</Button>
                            <Spacer></Spacer>
                            <Button w='28%' variant='outline' onClick={addToWishlist} rightIcon={<AiOutlineHeart/>}>Wishlist</Button>
                        </Flex>
                        <Text textAlign='left'>ESTIMATED DELIVERY<br />Oct 3 - Oct 10</Text>
                    </Stack>
                    </Stack>
                </GridItem>
            </Grid>
            <Flex w='95%' m='auto' mt='10'>
                <Breadcrumb spacing='15px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/${params.person}`}>
                            {params.person=='women'?"Women":null}
                            {params.person=='men'?"Men":null}
                            {params.person=='kids'?"Kids":null}</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/women/clothing'>Clothing</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href={`/women/${dispData[0]?._id}`}>{dispData[0]?.detail}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
            <Tabs w='95%' m='auto'>
                <TabList>
                    <Tab>THE DETAILS</Tab>
                    <Tab>DELIVERY & RETURNS</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <Flex>
                        <Stack w='30%' spacing='8' textAlign='left'>
                            <Box>
                                <Text size='28px'>New Season<br /><b>YEEZY GAP ENGINEERED BY <br /> BALENCIAGA</b><br />T CUT PUFFER</Text>
                                <Text>Oversized silhouettes convey YEEZY GAP <br /> ENGINEERED BY BALENCIAGA’s minimalist<br /> aesthetic, which combines utilitarian inspiration<br /> with everyday wearability. The voluminous design of<br /> this pullover puffer elevates its understated nature,<br /> defined by dropped wide sleeves whilst the<br /> collection’s discreet logo appears on the front.</Text>
                                
                            </Box>
                            <Box>
                                <Text size={'18px'} fontWeight='bold'>Highlights</Text>
                                <ul style={{marginLeft:'18px'}}>
                                    <li>black</li>
                                    <li>padded design</li>
                                    <li>classic hood</li>
                                    <li>logo print to the front</li>
                                    <li>drop shoulder</li>
                                    <li>long sleeves</li>
                                    <li>drawstring hem</li>
                                    <li>When buying this unisex item, keep in mind that <br /> it is graded in standard men's sizing.</li>
                                </ul>
                            </Box>
                        </Stack>
                        <Spacer></Spacer>
                        <Stack w='30%' textAlign='left'>
                            <Text fontWeight='bold'>Composition</Text>
                            <Text>Nylon 95%, Spandex/Elastane 5%</Text>
                            <Text><b>Brand style ID:</b> 720929TMO90</Text>
                        </Stack>
                        <Spacer></Spacer>
                        <Stack w='30%'>
                            <Image w='90%' src={dispData[0]?.img_url} />
                        </Stack>
                    </Flex>
                    </TabPanel>
    
                    <TabPanel>
                    <Flex>
                        <Stack w='30%' spacing='15px' textAlign='left'>
                            <Box>
                                    <Text size={'18px'} fontWeight='bold'>We've got your back</Text>
                                    <ul style={{marginLeft:'18px'}}>
                                        <li>One delivery fee</li>
                                        <li>Free returns within 14 days (excludes final sale,<br/> customised pieces, face masks and certain<br/> beauty products containing materials or<br/> ingredients that are flammable or may pose a<br/> risk during the return shipping process, such as<br/> fragrances and aerosols)</li>
                                        <li>All our deliveries are climate conscious</li>
                                    </ul>
                            </Box>
                        <Box>
                            <Text size={'18px'} fontWeight='bold'>Import duties information</Text>
                            <Text>Let us handle the legwork. <br />Delivery duties are included in the item price when<br/> shipping to all EU countries (excluding the Canary<br/> Islands), plus The United Kingdom, USA, Canada,<br/> China Mainland, Australia, New Zealand, Puerto<br/> Rico, Switzerland, Singapore, Republic Of Korea,<br/> Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia,<br/> Taiwan Region, Thailand, U.A.E., Japan, Brazil, Isle of<br/> Man, San Marino, Colombia, Chile, Argentina,<br/> Egypt, Lebanon, Hong Kong SAR and Bahrain. All<br/> import duties are included in your order – the price<br/> you see is the price you pay.</Text>                            
                        </Box>
                        </Stack>
                        <Spacer></Spacer>
                        <Stack w='30%' textAlign='left'>
                            <Text fontWeight='bold'>Estimated delivery</Text>
                            <Text>Oct 3 - Oct 10</Text>
                            <Text>Sending from our marketplace seller in Netherlands</Text>
                        </Stack>
                        <Spacer></Spacer>
                        <Stack  w='30%' textAlign='left'>
                        <Box>
                                <Text size={'18px'} fontWeight='bold'>Need more information?</Text>
                                <ul style={{marginLeft:'18px'}}>
                                    <li>Orders & delivery</li>
                                    <li>Returns & refunds</li>
                                    <li>Duties & taxes</li>
                                    <li>Climate Conscious delivery</li>
                                </ul>
                        </Box>
                        </Stack>
                    </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Recommendations genderr={params.person}/>
            <Stack w='95%' m='auto' mt='100'>
                <Text textAlign='left' fontSize='22px'>Why FARFETCH?</Text>
                <Flex>
                    <Stack className='container11'>
                        <AiFillTag size='30px'/>
                        <Text>The one that you want? We've got it.</Text>
                        <Text>Shop over 100,000 styles</Text>
                    </Stack>
                    <Spacer />
                    <Stack className='container11'>
                        <AiTwotoneStar size='30px'/>
                        <Text>4.7/5 stars and 25,000+ reviews</Text>
                        <Text>You know you can trust us</Text>
                    </Stack>
                    <Spacer />
                    <Stack className='container11'>
                        <AiOutlineDropbox size='30px'/>
                        <Text>Free global returns collection service</Text>
                        <Text>Changed your mind? No problem</Text>

                    </Stack>
                </Flex>
            </Stack>
            <Stack w='95%' m='auto' mt='100'>
                <Text textAlign='left' fontSize='22px'>Contact us</Text>
                <Text textAlign='left' fontSize='18px'>Keep this FARFETCH product ID: <b>18482541</b> at hand</Text>
                <Flex>
                    <Stack className='container111'>
                        <AiOutlineMail size='30px'/>
                        <Text>EMAIL US</Text>
                        <Text>Get in touch by email</Text>
                        <Text>customerservice@farfetch.com</Text>
                    </Stack>
                    <Spacer />
                    <Stack className='container111'>
                        <AiOutlinePhone size='30px'/>
                        <Text>ORDER BY PHONE</Text>
                        <Text>Available Monday to Friday, 08:00 - 21:00 EST</Text>
                        <Text>+1 646 791 3768</Text>
                    </Stack>
                </Flex>
            </Stack>
            <SignUpForm need='no'></SignUpForm>
        </>
    )
}