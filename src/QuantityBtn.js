import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

const {cartItems, setCartItems} = useContext(CartContext)


let productIndexInCart = cartItems.findIndex((element)=>{
    return element.id === productInfo.id
})

let [numInCart,setNumInCart] = useState(
    (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
)


const handleAdd = ()=>{

    if(productIndexInCart===-1)
    {
        //購物車本身沒有，在cartItems array中加個新element (object)
        setCartItems(
            [{
                id : productInfo.id,
                name:productInfo.name,
                image:productInfo.image,
                price:productInfo.price,
                description:productInfo.description,
                quantity:1
            },
            ...cartItems]
        )
    }
    else
    {
        //購物車有該產品，只加個quantity
        let newCartArray = [...cartItems]
        newCartArray[productIndexInCart].quantity++
        setCartItems(newCartArray)
    }

    setNumInCart(numInCart+1)
}


const handleSubtract = ()=>{

    if(cartItems[productIndexInCart].quantity===1)
    {
        //購在物車中只剩一件的話，remove object
        let newCartArray = [...cartItems]
        newCartArray.splice(productIndexInCart,1)
        setCartItems(newCartArray)
    }
    else
    {
        //只減個quantity
        let newCartArray = [...cartItems]
        newCartArray[productIndexInCart].quantity--
        setCartItems(newCartArray)
    }

    setNumInCart(numInCart-1)
}

    return (
        <div>{
            (numInCart === 0) ?
            <div onClick={handleAdd}>add {productInfo.name} to cart</div>
            :<div>
                <span onClick={handleSubtract}>-</span>
                {numInCart}
                <span onClick={handleAdd}>+</span>
            </div>}
        </div>
    )
}
