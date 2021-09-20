import { graphql} from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const blog =({data}) => {
    
    return (
    <Layout pageTitle="My Blog Posts">
       {
           data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
       }
    </Layout>
    )
}

export const query = graphql`
  query  {
    allFile {
      nodes {
        name
      }
    }
  }`

export default blog
