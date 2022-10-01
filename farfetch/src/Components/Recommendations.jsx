import axios from 'axios'
import {useState, useEffect} from 'react'
import {Text, Flex,Grid, GridItem, Spacer, Stack, Button} from '@chakra-ui/react'
import ProductViewer1 from './ProductViewer1'

export default function Recommendations({genderr}) {
    const [data, changeData] = useState([])

    function datGetter() {
        let url = 'https://farfetch-backend.herokuapp.com/products'
        if(genderr=='women') {
            url = 'https://farfetch-backend.herokuapp.com/products2'
        }
        
        axios.get(url).then(res=>changeData(res.data))
    }

    useEffect(()=>{
        datGetter()
    }, [])

    return(
        <>
            <Flex w='95%' m='auto' mb='10px'>
                    <Text fontSize='25px'>Recommendations</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'>Shop Now</Button>
            </Flex>
            <Stack direction='row' overflowX='auto' w='95%' m='auto' mb='70px'>
                {data.map((ele)=><GridItem><ProductViewer1 id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail} brand={ele.category} gender={genderr} ></ProductViewer1></GridItem>)}
            </Stack>
        </>
    )
}