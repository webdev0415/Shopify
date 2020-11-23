import React from 'react'
import { Link } from 'gatsby'

function Footer() {
    return (
        <footer className="bg-primary-gray">
            <div className="container mx-auto px-6 pt-10 pb-6 mt-10">
                <div className="flex flex-wrap">
{/*                 <div className="w-full md:w-1/4 text-center md:text-left list-none">
                    <h5 className="uppercase mb-6 font-bold text-primary-green">Links</h5>
                    <ul className="mb-4">
                        <li className="mt-2">
                            <a href="#" className="text-white">FAQ</a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="text-white">Help</a>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="text-white">Support</a>
                        </li>
                    </ul>
                </div> */}
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <h5 className="uppercase mb-6 font-bold  text-primary-green">Legal</h5>
                    <ul className="mb-4">
                    <li className="mt-2">
                    <Link to="/terms-conditions" className="text-white">Terms & Conditions</Link>
                    </li>
                    <li className="mt-2">
                    <Link to="/privacy-policy" className="text-white">Privacy</Link>
                    </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <h5 className="uppercase mb-6 font-bold  text-primary-green">Social</h5>
                    <ul className="mb-4">
                    <li className="mt-2">
                        <a href="https://www.instagram.com/_stickerbeat" target="_blank" className="text-white">Instagram</a>
                    </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <h5 className="uppercase mb-6 font-bold  text-primary-green">Company</h5>
                    <ul className="mb-4">
                    {/* <li className="mt-2">
                        <a href="#" className="text-white">Blog</a>
                    </li> */}
                    <li className="mt-2">
                    <Link to="/about" className="text-white">About Us</Link>
                    </li>
                    <li className="mt-2">
                    <Link to="/contact" className="text-white">Contact</Link>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="text-white mt-2">&copy; Stickerbeat Inc. 2020. All Rights Reserved</div>
            </div>
        </footer>
    )
}

export default Footer