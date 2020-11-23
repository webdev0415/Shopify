import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const StickerDetail = () => {
    return (
        <StaticQuery
        query = {graphql`
            query {
                ImageBreakdown: file(relativePath: {eq: "Layer-Breakdown.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                Lamination: file(relativePath: {eq: "lamination.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                Ink: file(relativePath: {eq: "ink.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                VINYL: file(relativePath: {eq: "3m.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                waterproof: file(relativePath: {eq: "waterproof.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                backingLayer: file(relativePath: {eq: "backingLayer.jpg"}) {
                    childImageSharp {
                    fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                peelHere: file(relativePath: {eq: "peelHere.jpg"}) {
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
                            <div className="lg:text-center">
                                <Image fluid={data.ImageBreakdown.childImageSharp.fluid} />
                            </div>

                            <div className="mt-10">
                            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <li>
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Lamination.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">LAMINATION</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Stickers will have a UV layer that is 3.2mil thick. There is a choice of Gloss or Matte lamination. This will protect the sticker from fading and will make it scratch resistant.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.Ink.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">INK</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Stickerbeat uses Epson 3M UltraChrome GS3 inks. These inks combined with our 3M vinyl provides the best solution for outdoor durable stickers. It is the perfect co-branded solution from the most recognized companies in the graphic industry.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.VINYL.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">3M VINYL LAYER</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Our 3M vinyl stickers have a 3.2mil thick block out bubble free adhesive. It is a permanent adhesive but can be removed with no residue left behind.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.waterproof.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">WATERPROOF ADHESIVE</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Our stickers are 100% waterproof and can withstand all the weather elements. They are dishwasher safe and have a 5 year life expectancy with no fading.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.backingLayer.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">3M BACKING LINER</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    The stickers come with a silicon coated backing liner. The 3M markings on the back of your stickers ensure they are the best quality in the industry. When you are ready to use your sticker it will remove smoothly from the liner with no effort.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-20 w-20">
                                        <Image className="h-20 w-20" fluid={data.peelHere.childImageSharp.fluid} />
                                    </div>
                                    </div>
                                    <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">PEEL HERE TAB (Optional)</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    Stickerbeat offers a free and optional Peel Here Tab. This is a great feature to quickly peel the sticker from the liner. 
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

export default StickerDetail
