/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { Layout, ImageGallery, ProductQuantityAdder } from 'components'
import { Grid, SelectWrapper, Price } from './styles'
import CartContext from 'context/CartContext'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'
import StickerDetail from '../../components/StickerDetail'
import ProductBulletPoints from '../../components/ProductBulletPoints'
import ProductReview from '../../components/ProductReviews'
import Instagram from '../../components/Instagram'

export const query = graphql`
    query ProductQuery($shopifyId: String){
        shopifyProduct(shopifyId: {eq: $shopifyId})
        {
            shopifyId
            title
            description
            images {
                id
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

export default function ProductTemplate(props) {
    const { getProductById } = useContext(CartContext)
    const [product, setProduct] = useState(null)
    const [selectedVariant, setSelectedVariant] = useState(null)
    const { search, origin, pathname } = useLocation()
    const variantId = queryString.parse(search).variant

    useEffect(() => {
        getProductById(props.data.shopifyProduct.shopifyId)
            .then((result) => {
                setProduct(result)
                setSelectedVariant(result.variants.find(({id}) => id === variantId) || result.variants[0])
            })
    }, [getProductById, setProduct, setSelectedVariant, props.data.shopifyProduct.shopifyId, variantId])

    const handleVariantChange = (e) => {
        const newVariant = product?.variants.find(v => v.id === e.target.value)
        setSelectedVariant(newVariant)
        navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`, {
            replace: true
        })
    }


    return (
        <Layout>
            <div className="container mx-auto">
                <Grid>
                        <div className="flex-auto text-gray-700 px-4 py-2 m-2 ml-20">
                        <ImageGallery 
                            selectedVariantImageId={selectedVariant?.image.id}
                            images={props.data.shopifyProduct.images} 
                        />
                        </div>
                        <div className="flex-auto text-gray-700 px-4 py-2 m-2">
                            <div className="text-3xl text-gray-700 font-bold mb-5">{props.data.shopifyProduct.title}</div>
                            <p>{props.data.shopifyProduct.description}</p>
                            <div>
                            {product?.availableForSale && !!selectedVariant && (
                            <>
                                {product?.variants.length > 1 && 
                                    <div className="mt-5">
                                        <label for="location" class="block text-lg leading-5 font-medium text-gray-700">Select Variant</label>
                                        <select 
                                            onChange={handleVariantChange}
                                            value={selectedVariant.id}
                                            className="mt-3 w-48 form-select block pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                        >
										{product?.variants.map (v => (
                                                <option key={v.id} value={v.id}>
                                                    {v.title}
                                                </option>
										))}
                                        </select>
                                    </div>
                                }
                                {!!selectedVariant && (
                                    <>
                                        <Price>${selectedVariant.price}</Price>
                                        <ProductQuantityAdder
                                            available={selectedVariant.available} 
                                            variantId={selectedVariant.id}
                                        />
                                    </>
                                )}
                            </>
                            )} 
                        </div>
                        </div>
                    </Grid>
<hr className="border-primary-green border-1 mt-5"/>
                    <div className="py-12 bg-white mt-8">
                        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="lg:text-center">
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                Custom {props.data.shopifyProduct.title} 
                            </h3>
                            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                            </p>
                            </div>
                        </div>
                    </div>
                    <ProductBulletPoints />

                    <StickerDetail />


                    <div className="py-12 bg-white">
                        <div className="lg:text-center mb-16">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                Ordering Is Simple
                            </h3>
                        </div>
                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                            <div>
                                <div className="mt-5">
                                <h5 className="text-center text-3xl leading-6 font-bold text-primary-green mb-5">1</h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                Select your size and quantity, if you need a custom size click “Custom”. Then Upload your artwork if you have some.
                                </p>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <div className="mt-5">
                                <h5 className="text-center text-3xl leading-6 font-bold text-primary-green mb-5">2</h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    After you have added all your stickers to your cart, proceed to checkout. You can add any additional order requirements here.
                                </p>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <div className="mt-5">
                                <h5 className="text-center text-3xl leading-6 font-bold text-primary-green mb-5">3</h5>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Our graphic designers will send you proofs of your images to approve (you can also suggest changes here). Once final the approval is made we will print your stickers and ship them directly to you!
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Instagram />
                    <ProductReview />
                </div>
        </Layout>  
    )
}
