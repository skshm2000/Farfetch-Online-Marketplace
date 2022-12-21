import axios from 'axios'
import {useState, useEffect} from 'react'
import {Text, Flex,Grid, GridItem, Spacer, Stack, Button} from '@chakra-ui/react'
import ProductViewer1 from './ProductViewer1'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


export default function Recommendations({genderr}) {
    const [data, changeData] = useState([])
    let loco = useLocation()
    const Navigator = useNavigate()
    const {person} = useParams()

    function datGetter() {
        let url = 'https://farfetchbackend.onrender.com/'
        
        axios.get(`${url}${genderr}`).then(res=>changeData(res.data))
    }

    useEffect(()=>{
        datGetter()
    }, [])

    return(
        <>
            <Flex w='95%' m='auto' mb='10px'>
                    <Text fontSize='25px'>Recommendations</Text>
                    <Spacer></Spacer>
                    <Button variant='outline' onClick={()=>{
                        if(person=='men') {
                            Navigator('/men/clothing')
                        } else if (person=='women') {
                            Navigator('/women/clothing')
                        } else if (person=='kids') {
                            Navigator('/kids/clothing')
                        }
                    }}>Shop Now</Button>
            </Flex>
            <Stack direction='row' w='95%' m='auto' mb='70px' overflow='auto' h='fit-content'>
                {data.map((ele)=><GridItem><ProductViewer1 id={ele._id} price={ele.price} image={ele.img_url} title={ele.title} brand={ele.brand} gender={genderr} ></ProductViewer1></GridItem>)}
            </Stack>
        </>
    )
}