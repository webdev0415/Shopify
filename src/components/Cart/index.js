import React, { useContext } from 'react'
import { CartWrapper } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import CartContext from 'context/CartContext'

export function Cart() {
    const {checkout} = useContext(CartContext)
    console.log(checkout)

    let totalQuantity = 0
    if(checkout){
        checkout.lineItems.forEach(lineItem => {
            totalQuantity = totalQuantity + lineItem.quantity
        })
    }

    return (
        <CartWrapper>
            <FaShoppingCart size="1.5em" />
            <div>
                {totalQuantity} item(s) / ${checkout?.totalPrice || '0.00'}
            </div>
        </CartWrapper>
    )
}