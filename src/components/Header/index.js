import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Cart } from '../Cart'

export function Header() {
    const [navBarOpen, setNavBarOpen] = useState(false)
    const [bannerOpen, setBannerOpen] = useState(false)

    return (
        <StaticQuery
        query = {graphql`
            query {
                Logo: file(relativePath: {eq: "sb-reversed.png"}) {
                    childImageSharp {
                    fixed(width: 275, height: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                } 
            }
        `}
        render={data => (     
            <>       
            <nav className="bg-primary-green relative flex flex-wrap items-center justify-between nabvar-expand-lg h-15">
                <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between items-center">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/" >
                        <Img 
                            fixed={data.Logo.childImageSharp.fixed}
                            alt="logo"
                        />
                        </Link>
                        <button 
                            onClick={() => setNavBarOpen(!navBarOpen)}
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                        </div>
                        <div className={"lg:block" + (navBarOpen ? " flex" : " hidden")}>
                            <ul className="flex flex-col lg:flex-row list-none lg-ml-auto text-white font-bold">
                                <li className="nav-item"><Link className="px-5" to="/stickers">Stickers</Link></li>
                                <li className="nav-item ml-2"><Cart /></li>
                            </ul>
                        </div>
                </div>
            </nav>
            <div className={"bg-indigo-600" + (bannerOpen ? " hidden" : " relative")}>
            <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="pr-16 sm:text-center sm:px-16">
                <p className="font-medium text-white">
                  <span className="md:hidden">
                    10% Off For The Month of November
                  </span>
                  <span className="hidden md:inline">
                    Free Shipping On All Orders! 10% Off For The Month of November
                  </span>
                  <span className="block sm:ml-2 sm:inline-block">
                    <a href="#" className="text-white font-bold underline">
                      Use Promo Code: NOV
                    </a>
                  </span>
                </p>
              </div>
              <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
{/*                 <button 
                  className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150" aria-label="Dismiss">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
          </>
        )}
        />
    )
}