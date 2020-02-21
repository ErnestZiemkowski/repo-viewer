/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactChild } from "react"
import styled, { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import { Normalize } from "styled-normalize"

import theme from "../theming/theme"
import { textColor } from "../theming/theme-getters"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-width: 80%;
  padding: 0 1.0875rem 1.45rem;
  font-family: Quicksand;
  color: ${textColor("primary")};
`

const Layout = ({ children }: { children: ReactChild | ReactChild[] }) => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
    </>
  </ThemeProvider>
)

export default Layout
