import { graphql} from 'gatsby'
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

const blog =({data}) => {
    
    return (
    <Layout pageTitle="My Blog Posts">
       {
           data.allMdx.nodes.map(node => (
            <artical key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted:{node.frontmatter.date}</p>
                <MDXRenderer>
                    {node.body}
                </MDXRenderer>
            </artical>
          ))
       }
    </Layout>
    )
}

export const query = graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          body
        }
      }
    }`

export default blog
