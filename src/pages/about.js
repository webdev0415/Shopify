import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'gatsby'

const About = () => {
    return (
        <Layout>
        <div className="container mx-auto">
            <div class="relative py-16 bg-white overflow-hidden">

            <div class="relative px-4 sm:px-6 lg:px-8">
                <div class="text-lg max-w-prose mx-auto mb-6">
                <h1 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">About Us</h1>
                </div>
                <div class="prose prose-lg text-gray-500 mx-auto">
                <p>
                    At Stickerbeat we print super high quality stickers, decals, and magnets of all shapes and sizes. We have been in the decal business for over 30 years. Our goal is to get your stickers out the door within 3 business days. We strive for 100% satisfaction. Our staff is always ready to give you a wonderful experience. We have made our website very user friendly and we hope that you enjoy the experience. We love your feedback, so please feel free to contact us.
                </p>
                <h1 class="mt-10 mb-8 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">How can I use custom die cut stickers and vinyl decals?</h1>
                <p>
                    Stickerbeat’s custom die cut stickers and custom die cut vinyl decals serve a myriad of uses for work and play!

Since our stickers and decals are weatherproof and UV resistant, they stick to any surface, inside or outside, and they will last for years without fading. Our high quality, durable vinyl and ink are guaranteed to stay strong in all types of conditions and applications.
                </p>
                <Link to="/collections">
                    <button className="bg-primary-green text-white font-bold rounded-full py-4 px-8 shadow-lg mt-10 uppercase tracking-wider">
                    SHOP NOW
                    </button>
                </Link>
                </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}

export default About