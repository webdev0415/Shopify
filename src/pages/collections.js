import React from 'react'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Layout } from '../components/Layout'
import styles from './products.module.css'

const collections = ({ data }) => {
    const {allShopifyCollection:{nodes}} = data
    return (
        <>
        <Layout>
        <div className="container mb-20">
            <section className={styles.page}>
            {nodes.map((node) => {
                  return <article key={node.id}>
                    <div className="text-center px-4 py-1 mb-20 ml-20">
                      <div className="mb-5">
                        <Img className="object-cover h-48 w-full" fluid={node.image.localFile.childImageSharp.fluid} alt={node.title} />
                      </div>
                      <Link to="/stickers">
                      <button className="bg-primary-green text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                      {node.title}
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

export default collections

export const query = graphql`
{
  allShopifyCollection {
    nodes {
      title
      image {
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
`

