import axios from 'axios'
import {useState, useEffect} from 'react'
import {Text, Flex, Spacer, Stack, Button} from '@chakra-ui/react'
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
            <Stack w='95%' m='auto' mt='25px'>
                <Flex>
                    <Text fontSize='25px'>Recommendations</Text>
                    <Spacer></Spacer>
                    <Button variant='outline'>Shop Now</Button>
                </Flex>
                <Flex style={{overflowX:'scroll'}}>
                    {data.map((ele)=><ProductViewer1 id={ele._id} price={ele.price} image={ele.img_url} details={ele.detail} brand={ele.category} gender={genderr} ></ProductViewer1>)}
                </Flex>
            </Stack>
        </>
    )
}