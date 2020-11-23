import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const FeaturedProducts = () => {
    const featuredProductsData = useStaticQuery(graphql`
        query featuredProductsData {
            featuredProducts:allContentfulFeaturedProducts(limit: 3) {
                nodes {
                title
                body
                productImage {
                    fluid {
                    ...GatsbyContentfulFluid
                    }
                }
            }
        }
}
    
    `)


    return (
        <>
            <div className="py-12 bg-white">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                        <div className="relative p-4">
                        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10">
                            Custom stickers, decals, labels, and magnets of all shapes and sizes.
                        </h3>
                        <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                            Stickerbeat is your place to shop for high quality custom stickers. Whether you have your own artwork or need a design, we’re here to help. Our goal is to get your stickers out the door within 3 business days.
                        </p>
                        </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <div className="flex items-center justify-center h-20 w-20">
                            <Image className="h-20 w-20" fluid={featuredProductsData.featuredProducts.nodes[0].productImage.fluid} />
                        </div>
                        <div className="mt-5">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">{featuredProductsData.featuredProducts.nodes[0].title}</h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                            {featuredProductsData.featuredProducts.nodes[0].body}
                        </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="flex items-center justify-center h-20 w-20">
                            <Image className="h-20 w-20" fluid={featuredProductsData.featuredProducts.nodes[1].productImage.fluid} />
                        </div>
                        <div className="mt-5">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">{featuredProductsData.featuredProducts.nodes[1].title}</h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                            {featuredProductsData.featuredProducts.nodes[1].body}
                        </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="flex items-center justify-center h-20 w-20">
                            <Image className="h-20 w-20" fluid={featuredProductsData.featuredProducts.nodes[2].productImage.fluid} />
                        </div>
                        <div className="mt-5">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">{featuredProductsData.featuredProducts.nodes[2].title}</h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                            {featuredProductsData.featuredProducts.nodes[2].body}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts
