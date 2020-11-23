import React from 'react'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Layout } from '../components/Layout'
import styles from './products.module.css'

const stickers = ({ data }) => {
    const {allShopifyCollection:{nodes:[{products}]}} = data
    return (
        <>
        <Layout>
        <div className="container mb-20">
            <div className="m-5 px-20 text-black font-bold text-5xl">Stickers</div>
            <p className="m-5 px-20 text-gray-700 font-bold text-2xl">Get your custom stickers in all shapes and sizes.</p>
            <p className="m-5 px-20 text-gray-700 font-bold text-1xl">Upload your own artwork or let us help you.</p>
            <section className={styles.page}>
            {products.map((product) => {
                  return <article key={product.id}>
                    <div className="text-center px-4 py-1 mb-20 ml-20">
                      <div className="mb-5">
                        <Img className="object-cover h-48 w-full" fluid={product.images[0].localFile.childImageSharp.fluid} alt={product.title} />
                      </div>
                      <Link to={`/product/${product.handle}`}>
                      <button className="bg-primary-green text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                      {product.title}
                      </button>
                      </Link>
                    </div>
                  </article>

            })}
            </section>
          </div>
        </Layout>
        </>
    )
}

export default stickers

export const query = graphql`
{
  allShopifyCollection(filter: {title: {eq: "Stickers"}}) {
    nodes {
      products {
        title
        id
        handle
        images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`