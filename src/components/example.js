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
      query={`${query}`}
      render={withPreview(
        data =>
          // TODO: change this data path to your own
          data?.prismic?.allMenucardpdfs?.edges?.[0]?.node?.name?.[0]?.text && (
            <h1>
              renders example. check console logs
              {console.log(
                // TODO: change this data path to your own
                data?.prismic?.allMenucardpdfs?.edges?.[0]?.node?.name?.[0]
                  ?.text
              )}
            </h1>
          ),
        query
      )}
    />
  )
}
