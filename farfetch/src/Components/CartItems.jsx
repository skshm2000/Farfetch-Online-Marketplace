import {Flex, Spacer,Button, Box, Text, Stack, Image} from '@chakra-ui/react'
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

export default function CartItems({size, category,detail, price, id, image, title}) {

    const {cartItems:bag, changeCartItems:changeBag} = useContext(CartContext)

    
    function deleteFromCart() {
        let arr = [...bag]
        for(let i=0; i<arr.length; i++) {
            if(arr[i]._id==id) {
                arr.splice(i, 1)
                changeBag(arr)
                return
            }
        }
    }

    return (
        <>
            <Flex textAlign='left'>  
                <Box>
                    <Image w='100px' src={image}></Image>
                </Box>
                <Spacer></Spacer>
                <Stack w='20%'>
                    <Text>{title}<br/><b>{category}</b><br/>{detail}</Text>
                    <Text>Last 1 left</Text>
                </Stack>
                <Spacer></Spacer>
                <Stack>
                    <Text><b>${price}</b></Text>
                    <Text>Import duties included</Text>
                </Stack>
                <Spacer></Spacer>
                <Stack>
                    <Text>Size<br/><b>{size}</b></Text>
                    <Text>Quantity<br/><b>1</b></Text>
                </Stack>
                <Spacer></Spacer>
                <Button variant='ghost' onClick={deleteFromCart}>
                    <AiOutlineClose />
                </Button>
            </Flex>
        </>
    )
}