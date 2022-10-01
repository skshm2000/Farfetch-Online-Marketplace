import {Stack, Image, Text, Button, Select} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import '../Components/NewIn.css'
import { CartContext } from '../Context/CartContext'
import { WishlistContext } from '../Context/WishlistContext'
import { useContext } from 'react'

export default function WishlistItems({title, category, price, id, detail, image}) {
    const wishlistCon = useContext(WishlistContext)
    const Cart = useContext(CartContext)
    

    function addToCart() {
        let cart = [...Cart.cartItems]
        let wishlist = [...wishlistCon.wishlistItems]

        let item = []
        for(let i=0; i<wishlist.length; i++) {
            if(wishlist[i]._id==id) {
                cart.push(wishlist[i])
                wishlist.splice(i,1)
                break
            }
        }
        wishlistCon.changeWishlistItems(wishlist)
        Cart.changeCartItems(cart)
    }

    console.log(Cart)
    console.log(wishlistCon)
    return(
        <Stack className='productCard'>
            <Image w='210px' src={image}></Image>
            <Text textAlign='left'>{title}<br/><b>{category}</b><br/>{detail}</Text>
            <Text textAlign='left'>{`$${price}`}</Text>
            <Select w='100%' colorScheme='gray' variant='outline' placeholder='Select Size'>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </Select>
            <Button onClick={addToCart}>Add to bag</Button>
        </Stack>
    )
}