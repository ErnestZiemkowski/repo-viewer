import React from "react"
import Image, { FixedObject } from "gatsby-image"
import styled from "styled-components"

import AppFunctionComponent from "../types/app-function-component.interface"
import { textColor, breakpoint } from "../theming/theme-getters"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faLink } from "@fortawesome/free-solid-svg-icons"

interface Props {
  readonly image: FixedObject
}

const BioWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: 5em;
`
const Organization = styled.div`
  width: 17em;
  padding-left: 1.5em;
`
const Header = styled.h1`
  font-size: 1.1em;
  font-weight: 500;
  margin: 0.5em 0;
`

const Description = styled.span`
  font-size: 0.8em;
  color: ${textColor("secondary")};
`

const BulletPoints = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-between;
  @media (max-width: ${breakpoint("tablet")}) {
    flex-direction: column;
  }
`
const BulletPoint = styled.li`
  display: inline-block;
  font-size: 0.9em;
  @media (max-width: ${breakpoint("tablet")}) {
    margin: 0.5em 0;
  }
`

const Link = styled.a`
  color: ${textColor("primary")};
  text-decoration: none;
`

// Color theme getters does not work in inline styles so I had to hardcode these values
const imageStyles = {
  backgroundColor: "#0F1436",
  borderRadius: "0.4em",
  border: "1px solid #E3E5E8",
}

const BIO: AppFunctionComponent<Props> = ({ image }) => (
  <BioWrapper>
    <Image fixed={image} style={imageStyles} />
    <Organization>
      <Header>App'n'roll's repositories</Header>
      <Description>We rock IT!</Description>
      <BulletPoints>
        <BulletPoint>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Warsaw, PL
        </BulletPoint>
        <BulletPoint>
          <FontAwesomeIcon icon={faLink} />{" "}
          <Link target="_blank" href="http://appnroll.com">
            http://appnroll.com
          </Link>
        </BulletPoint>
      </BulletPoints>
    </Organization>
  </BioWrapper>
)

export default BIO
