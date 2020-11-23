import React, { useContext } from 'react'
import CartContext from 'context/CartContext'
import { CartItem, CartHeader, CartFooter, Footer } from './styles'
import { QuantityAdjuster } from '../QuantityAdjuster'
import { RemoveLineItem } from '../RemoveLineItem'
import { Button } from '../Button'
import { navigate } from '@reach/router'


export function CartContents() {
    const {checkout, updateLineItem} = useContext(CartContext)

    const handleAdjustQuantity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId})
    }

    return (
        <div className="container mx-auto mt-8">
            <section>
                <div className="text-3xl font-bold">Your Cart</div>
                {!!checkout?.lineItems && (
                <CartHeader>
                    <div>
                        Product
                    </div>
                    <div>
                        Unit Price
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Amount
                    </div>
                </CartHeader>
                )}
                {checkout?.lineItems?.map(item => {
                    return (
                        <CartItem key={item.variant.id}>
                            <div>
                                <div>
                                    {item.title}
                                </div>
                                <div>
                                    {item.variant.title === 'Default Title' ? '' : item.variant.title}
                                </div>
                            </div>
                            <div>
                                ${item.variant.price}
                            </div>
                            <div>
                                <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity}/>
                            </div>
                            <div>
                                ${(item.quantity * item.variant.price).toFixed(2)}
                            </div>
                            <div>
                                <RemoveLineItem lineItemId={item.id} />
                            </div>
                        </CartItem>
                    )
                })}
                {!!checkout?.lineItems && (
                <CartFooter>
                    <div><strong>Total:</strong></div>
                    <div>
                        <span>${checkout?.totalPrice}</span>
                    </div>
                </CartFooter>
                )}
                {!checkout?.lineItems && <h4>Your cart is empty.</h4>}
                <Footer>
                    <div>
                        <Button onClick={() => navigate(-1)}>
                            Continue Shopping
                        </Button>
                    </div>
                    <div>
                        {!!checkout?.webUrl &&
                            <Button onClick={() => {
                                window.location.href = checkout.webUrl;
                            }}>
                                Checkout
                            </Button>
                        }
                    </div>
                </Footer>
            </section>
        </div>
    )
}