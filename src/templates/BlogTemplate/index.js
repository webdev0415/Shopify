import React from 'react'
import { Layout } from 'components'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from 'gatsby-image'

export const query = graphql`
query BlogQuery($id: String) {
  contentfulBlog(id: {eq: $id}) {
    title
    body {
      json
    }
    titleImage {
      fluid(maxWidth: 750) {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`

const BlogTemplate = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={url} />
            },
        },
    }


    return (
        <Layout>
            <div className="container mx-auto">
                <div className="relative px-4 sm:px-6 lg:px-8">
                <div class="text-lg max-w-prose mx-auto mb-6">
                <h1 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{props.data.contentfulBlog.title}</h1>
                </div>
                    <div>
                        {props.data.contentfulBlog.titleImage && (
                        <Image
                            className="featured"
                            fluid={props.data.contentfulBlog.titleImage.fluid}
                            alt={props.data.contentfulBlog.title}
                        />
                        )}
                    </div>
                    <div>
                        {documentToReactComponents(props.data.contentfulBlog.body.json, options)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate