import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"

// TODO: change this query to your own
const query = graphql`
  query AllMenucardsPdfs {
    prismic {
      allMenucardpdfs {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`

export const Example = () => {
  return (
    <StaticQuery
      query={query}
      render={withPreview(data => {
        console.log(data)
        console.log(
          data?.prismic?.allMenucardpdfs?.edges?.[0]?.node?.name?.[0]?.text
        )
        return <h1>renders example. check console logs</h1>
      }, query)}
    />
  )
}
