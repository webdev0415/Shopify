const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const {data} = await graphql(`
    {
      allShopifyProduct{
        edges{
          node{
            shopifyId
            handle
          }
        }
      }
    }
  `)

  const blogData = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  data.allShopifyProduct.edges.forEach(({node}) => {
    createPage({
      path: `product/${node.handle}`,
      context: {
        shopifyId: node.shopifyId
      },
      component: path.resolve('./src/templates/ProductTemplate/index.js'),
    })
  })

  blogData.data.allContentfulBlog.edges.forEach(({node}) => {
    createPage({
      path: `blog/${node.slug}`,
      context: {
        id: node.id
      },
      component: path.resolve('./src/templates/BlogTemplate/index.js'),
    })
  })

}