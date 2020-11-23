import React, { useState } from 'react';
import { Layout, SEO } from 'components';
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import FeaturedBlogs from '../components/FeaturedBlogs'
import Newsletter from '../components/Newsletter'
import StickerDetail from '../components/StickerDetail';

const IndexPage = () => {
  
  return (
      <Layout>
        <SEO title="Home" />
          <Hero />
          <FeaturedProducts />
          <StickerDetail />
          <Testimonials />
          <FeaturedBlogs />
          <Newsletter />
      </Layout>
    )
}

export default IndexPage;
