import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'

const Instagram = () => {
    const data = useStaticQuery(graphql`
    {
      allInstaNode(limit: 9) {
        nodes {
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
  `)

  return (
    <div className="container mx-auto">
    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
        See our latest work
    </h3>
    <div className="grid grid-cols-3 gap-2 my-10">
    {data.allInstaNode.nodes.map(instaImage => {
        return <Image fluid={instaImage.localFile.childImageSharp.fluid} alt="" />
    })}
    </div>
    </div>
  )
}

export default Instagram