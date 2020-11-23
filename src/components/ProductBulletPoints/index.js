import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const ProductBulletPoints = () => {
    return (
        <StaticQuery
        query = {graphql`
            query {
                Calendar: file(relativePath: {eq: "Calendar.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                Chat: file(relativePath: {eq: "Chat.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                Droplet: file(relativePath: {eq: "Droplet.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                Laptop: file(relativePath: {eq: "Laptop.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                Pencil: file(relativePath: {eq: "Pencil.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }          
            }
        `}
            render={data => (
			    <div className="container mx-auto mb-5">
                        <div className="py-12 bg-white">
                        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mt-10">
                            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <li>
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Calendar.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Free Shipping in 3 Days</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    With our 3-day turnaround, you'll be sure to get your stickers fast and shipping is always free.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Droplet.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Weatherproof & UV Resistant</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Our high quality, durable vinyl and Ink is guaranteed to stay strong in all types of conditions and applications.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Laptop.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Fast Online Proofs</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Get your proof after checkout. Approve or request any changes that are needed!
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Pencil.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Free Graphic Design</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    We can help you with any of your artwork needs - Free of charge.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Chat.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Friendly Customer Support</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    The Stickerbeat Team is dedicated to every client. We are always fast and friendly to work with.
                                    </p>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
			    </div>
            )}
            />
    )   
}

export default ProductBulletPoints