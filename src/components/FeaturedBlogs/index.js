import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'

const FeaturedBlogs = () => {
    const featuredBlogsData = useStaticQuery(graphql`
        query featuredBlogsData {
            blogs:allContentfulBlog(limit: 3) {
                nodes {
                title
                slug
                extract {
                    extract
                }
                titleImage {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                    createdAt
                }
                }
                totalCount
            }
        }
    `)

    return (
        <>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                    Articles & Inspiration
                </h2>
                <p className="mt-3 max-w-5xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                    Peeling and placing stickers is fun! At Stickerbeat, our custom die cut stickers and custom sticker sheets allow you to think outside the sticker book! Our process grants you the freedom to use your own artwork to create stunning, high-quality stickers, decals and magnets. You can then utilize your custom creations to tell your own sticker story.
                </p>
                </div>
                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">

                    {/* START OF BLOG CARD */}
                    {featuredBlogsData.blogs.nodes.map((blog) => {
                        return (
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                            <Img fluid={blog.titleImage.fluid} alt={blog.title} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to={`blog/${blog.slug}`} className="block">
                                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                    {blog.title}
                                </h3>
                                <p className="mt-3 text-base leading-6 text-gray-500">
                                    {blog.extract.extract}
                                </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                <a href="#">
                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </a>
                                </div>
                                <div className="ml-3">
                                <p className="text-sm leading-5 font-medium text-gray-900">
                                    <a href="#" className="hover:underline">
                                    Roel Aufderhar
                                    </a>
                                </p>
                                <div className="flex text-sm leading-5 text-gray-500">
                                    <time datetime="2020-03-16">
                                    Mar 16, 2020
                                    </time>
                                    <span className="mx-1">
                                    &middot;
                                    </span>
                                    <span>
                                    6 min read
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        )
                    })}
                    {/* END OF BLOG CARD */}    
                </div>
            </div>
        </div>
        </>
     )
}

export default FeaturedBlogs