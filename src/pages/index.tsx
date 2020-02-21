import React from "react"
import { graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import styled from "styled-components"

import AppFunctionComponent from "../types/app-function-component.interface"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BIO from "../components/bio"

const Content = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`
interface Props {
  readonly data: {
    readonly placeholderImage: {
      readonly childImageSharp: {
        readonly fixed: FixedObject
      }
    }
  }
}

const IndexPage: AppFunctionComponent<Props> = ({
  data: {
    placeholderImage: {
      childImageSharp: { fixed },
    },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <BIO image={fixed} />
    </Content>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "appnroll.png" }) {
      childImageSharp {
        fixed(width: 102, height: 102) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
