import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StarRatings from 'react-star-ratings'

const ProductReview = () => {
    const data = useStaticQuery(graphql`
    {
      allGooglePlacesReview(sort: {
          fields: time
          order: DESC
      }) {
        nodes {
          text
          author_name
          relative_time_description
          rating
          time
        }
      }
    }
  `)
  return (
    <div className="container mx-auto">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
            Reviews
        </h3>
        {data.allGooglePlacesReview.nodes.map(review => {
            return (
                <div className="container mx-auto">
                <div class="flex lg:max-w-full lg:flex">
                <div class="p-4 flex flex-col justify-between leading-normal">
                <hr className="border-primary-green border-1 mt-5 mb-5"/>
                    <div class="mb-8">
                    <p class="text-gray-700 text-base">"{review.text}"</p>
                    </div>
                    <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{review.author_name}</p>
                        <p class="text-gray-600">{review.relative_time_description}</p>
                        <p>
                            <StarRatings 
                                starRatedColor="#99ca3b"
                                numberOfStars={5}
                                rating={review.rating}
                                starDimension="20px"
                            />
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductReview

