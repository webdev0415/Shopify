import React, { useState, useContext } from 'react'
import { ProductQuantityAdderWrapper } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import CartContext from 'context/CartContext'


export function ProductQuantityAdder({ variantId, available}) {
    const [quantity, setQuantity] = useState(1)
    const { updateLineItem } = useContext(CartContext)

    const handleQuantityChange = (e) => {
        setQuantity(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        updateLineItem({variantId, quantity: parseInt(quantity, 10)})
    }

    return (
        <ProductQuantityAdderWrapper>
            <strong>Quantity</strong>
            <form onSubmit={handleSubmit}>
                <Input
                    disabled={!available} 
                    value={quantity} 
                    onChange={handleQuantityChange} 
                    type="number"
                    min="1"
                    step="1"
                />
                <Button 
                    disabled={!available} 
                    fullWidth
                    type="submit"
                >
                    Add to cart
                </Button>
            </form>
        </ProductQuantityAdderWrapper>
    )
}

