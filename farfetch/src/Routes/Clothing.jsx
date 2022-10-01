import { useParams } from "react-router-dom";
import axios from "axios";
import ProductViewer from '../Components/ProductViewer'
import { useEffect, useState, useRef } from "react";
import {SimpleGrid, Flex, Heading,Spacer, filter} from '@chakra-ui/react' 
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    Text
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
    VStack,Spinner,
    Select
} from '@chakra-ui/react'
import '../Routes/Home.css'
import SignUpForm from '../Components/SignUpForm'





let mainData = []
export default function Clothing() {
    let params = useParams()
    const [data, changeData] = useState([])
    const [brands, changeBrands] = useState([])
    const [filterBrands, changeFilterBrand] = useState([])
    const sortbyPrice = useRef(null)

    function dataGetter() {
        let url = 'https://farfetch-backend.herokuapp.com/products'
        if(params.person=='women') {
            url = 'https://farfetch-backend.herokuapp.com/products2'
        }

        axios.get(url).then(res=>{
            mainData = res.data
            changeData(res.data)
            brandsSort(res.data)
        })
        
    }

    function brandsSort(x) {
        let arr = []
        for(let i=0; i<x.length; i++) {
            let stat = false
            for(let j=0; j<arr.length; j++) {
                if(x[i].category==arr[j]) {
                    stat = true
                    break
                }
            }
            if(stat==false) {
                arr.push(x[i].category)
            }
        }
        changeBrands(arr)
    }

    function brandFilter(x) {
        let arr = [...filterBrands]
        let stat = true
        arr = arr.filter((ele)=> {
            if(ele != x) {
                return true
            } else if (ele==x) {
                stat=false
            }
        })

        if(stat==true) {
            arr.push(x)
        }
        

        let dat = [...mainData]
        if(arr.length==0) {
            changeData(dat)
            changeFilterBrand(arr)
            return
        }
        dat = dat.filter((ele)=>{
            for(let i=0; i<arr.length; i++) {
                if(ele.category==arr[i]) {
                    return (ele.category==arr[i])
                }
                
            }
        })
        changeData(dat)
        changeFilterBrand(arr)
    } 

    function sorter(x) {
        let arr = new Array(...data)
        if(x=='l2h'){
            arr.sort((a,b)=>a.price - b.price)
        } else if(x=='h2l') {
            arr.sort((a,b)=>b.price - a.price)
        }
        changeData(arr)
    }

    useEffect(()=>{
        dataGetter()
    }, [])

    return (
        <>
            <Flex w='95%' m='auto' mb='30px'>
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

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='/women/clothing'>Clothing</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
            <Flex w='95%' m='auto' mb='30px'>
                <Heading fontFamily='farfetch'>DESIGNER CLOTHING FOR {params.person.toUpperCase()}</Heading>
            </Flex>
            <Flex w='95%' fontFamily='farfetch' pl='3.7%'> 
                <Text >Filter</Text>
                <Spacer></Spacer>
                <Select w='20%' variant='Unstyled' ref={sortbyPrice} onChange={()=>sorter(sortbyPrice.current.value)} placeholder='Sort by price'>
                    <option value="l2h">Low To High</option>
                    <option value="h2l">High to Low</option>
                </Select>
            </Flex>
            
            <Flex w='95%' m='auto'>
                <Box fontFamily='farfetch' w='22%'>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align='left'>
                            {brands.map((ele)=><Checkbox onChange={()=>brandFilter(ele)}>{ele}</Checkbox>)}
                            </VStack>                            
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                </Box>
                <Spacer></Spacer>
                <SimpleGrid  w='75%'columns='3' gap='105px'>
                    {data.length==0 ?   <Spinner size='xl' />:null}
                    {data.map((ele)=><ProductViewer title={ele.title} id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail} brand={ele.category} gender={params.person}></ProductViewer>)}
                </SimpleGrid>
            </Flex>
            <SignUpForm need='no'/>
        </>       
        
    )
}