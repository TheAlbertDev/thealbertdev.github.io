import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Box, Text } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/react"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const theme = useTheme()
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Todas las entradas" />
      <Box my={theme.space[10]}>
        <Bio />
      </Box>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Text as="h2">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </Text>
                  <Text
                    as="div"
                    fontSize="sm"
                    fontFamily="body"
                    color="whiteAlpha.900"
                  >
                    {post.frontmatter.date.charAt(0).toUpperCase() +
                      post.frontmatter.date.slice(1)}
                  </Text>
                </header>
                <section>
                  <Text
                    as="div"
                    fontSize="md"
                    fontFamily="body"
                    color="white"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY", locale: "es")
          title
          description
        }
      }
    }
  }
`
