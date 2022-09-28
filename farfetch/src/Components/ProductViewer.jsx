import {Stack, Image, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export default function ProductViewer({title="", id, price, image, details, brand, gender}) {
    const Navigator = useNavigate()

    function takeUsTo() {
        Navigator(`/${gender}/${id}`)
    }

    return(
        <>
            <Stack onClick={takeUsTo}>
                <Image src={image}></Image>
                <Text textAlign='left'>{title} <br /> <b>{brand}</b><br />{details}</Text>
                <Text textAlign='left'>{`$${price}`}</Text>
            </Stack>
        </>
    )
}