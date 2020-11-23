import React from 'react'
import { StaticQuery, graphql, Link  } from 'gatsby'
import Img from 'gatsby-image'

function Hero() {
    return (
        <div className="py-20" style={{background: 'url("/heroBgImage.jpg")', 'background-size': '100% 500px', 'background-repeat': 'no-repeat'}}>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mt-6 mb-2 text-white">
                Our stickers rock.
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">
                3 day turnaround, free shipping and great prices.
                </h3>

                <Link to="/collections">
                    <button className="bg-primary-green text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    SHOP NOW
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
