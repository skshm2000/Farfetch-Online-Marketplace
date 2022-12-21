import {Stack, Image, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import '../Components/NewIn.css'

export default function ProductViewer1({title, price, image, brand, gender}) {
    const Navigator = useNavigate()

    function takeUsTo() {
        Navigator(`/${gender}/${title}`)
    }

    return(
        <>
            <Stack style={{width:'200px',border:'1px solid gray', borderRadius:'10px', height:'380px', padding:'10px'}} onClick={takeUsTo}>
                <Image src={image}></Image>
                <Text textAlign='left'><b>{brand}</b><br />{title}</Text>
                <Text textAlign='left'>{`$${price}`}</Text>
            </Stack>
        </>
    )
}