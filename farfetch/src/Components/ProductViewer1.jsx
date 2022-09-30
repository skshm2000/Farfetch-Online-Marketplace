import {Stack, Image, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import '../Components/NewIn.css'

export default function ProductViewer1({id, price, image, details, brand, gender}) {
    const Navigator = useNavigate()

    function takeUsTo() {
        Navigator(`/${gender}/${id}`)
    }

    return(
        <>
            <Stack style={{width:'2000px',border:'1px solid gray', borderRadius:'10px'}} onClick={takeUsTo}>
                <Image w='100px' src={image}></Image>
                <Text textAlign='left'><b>{brand}</b><br />{details}</Text>
                <Text textAlign='left'>{`$${price}`}</Text>
            </Stack>
        </>
    )
}