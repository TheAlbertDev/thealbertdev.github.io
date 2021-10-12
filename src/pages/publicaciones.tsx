import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Seo from "../components/seo"
import Bio from "../components/bio"
import LinkIcon from "../images/link-icon.svg"
import publications from "../../static/publications.json"

const InformationSource = styled.p`
  font-family: ${props => props.theme.typography.caption.fontFamily};
  font-weight: ${props => props.theme.typography.caption.fontWeight};
  font-size: ${props => props.theme.typography.caption.fontSize};
  line-height: ${props => props.theme.typography.caption.lineHeight};
  letter-spacing: ${props => props.theme.typography.caption.letterSpacing};
`

const Publication = styled.li``
const Title = styled.h1`
  font-family: ${props => props.theme.typography.h6.fontFamily};
  font-weight: ${props => props.theme.typography.h6.fontWeight};
  font-size: ${props => props.theme.typography.h6.fontSize};
  line-height: ${props => props.theme.typography.h6.lineHeight};
  letter-spacing: ${props => props.theme.typography.h6.letterSpacing};
  margin-bottom: 0;
`
const Journal = styled.h2`
  font-family: ${props => props.theme.typography.body1.fontFamily};
  font-weight: ${props => props.theme.typography.body1.fontWeight};
  font-size: ${props => props.theme.typography.body1.fontSize};
  line-height: ${props => props.theme.typography.body1.lineHeight};
  letter-spacing: ${props => props.theme.typography.body1.letterSpacing};
  margin: 0;
`
const Authors = styled.p`
  font-family: ${props => props.theme.typography.body2.fontFamily};
  font-weight: ${props => props.theme.typography.body2.fontWeight};
  font-size: ${props => props.theme.typography.body2.fontSize};
  line-height: ${props => props.theme.typography.body2.lineHeight};
  letter-spacing: ${props => props.theme.typography.body2.letterSpacing};
  margin-bottom: ${props => props.theme.spacing(1)};
`
const PublicationDate = Authors

const PublicationLink = (props: {
  doi: string
  children: React.ReactNode | React.ReactNode[]
}) => {
  if (props.doi === null) return <>{props.children}</>

  const A = styled.a`
    text-decoration: none;

    &:hover svg {
      opacity: 1;
    }
  `

  const LinkIconContainer = styled.div`
    display: block;
    width: ${props => props.theme.spacing(2)};
    line-height: ${props => props.theme.typography.h6.lineHeight};
    float: left;
    margin-left: ${props => props.theme.spacing(-3)};
    margin-right: ${props => props.theme.spacing(1)};
    & svg {
      fill: ${props => props.theme.palette.common.black};
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }
  `

  return (
    <A
      href={"https://www.doi.org/" + props.doi}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <LinkIconContainer>
        <LinkIcon />
      </LinkIconContainer>
      {props.children}
    </A>
  )
}

const Publications = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Todas las publicaciones" />
      <Bio />
      <InformationSource>
        &#9432; Información obtenida de{" "}
        <a
          href="https://orcid.org/0000-0001-5293-4487"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          ORCiD
        </a>{" "}
        mediante una{" "}
        <a
          href="https://github.com/marketplace/actions/get-orcid-publications"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          GitHub Action
        </a>{" "}
        desarrollada por mí.
      </InformationSource>
      <ol style={{ listStyle: `none` }}>
        {(publications.works as unknown as Array<any>).map((work, index) => {
          const publicationType = (
            work.type.charAt(0).toUpperCase() + work.type.slice(1)
          ).replace("-", " ")

          let publicationDate
          let dateOptions: { year?: string; month?: string; day?: string } = {}

          if (work.publicationDate.year === null) {
            publicationDate = null
          } else if (work.publicationDate.month === null) {
            publicationDate = new Date(work.publicationDate.year)
            dateOptions.year = "numeric"
          } else if (work.publicationDate.day === null) {
            publicationDate = new Date(
              work.publicationDate.year,
              work.publicationDate.month - 1
            )
            dateOptions.year = "numeric"
            dateOptions.month = "long"
          } else {
            publicationDate = new Date(
              work.publicationDate.year,
              work.publicationDate.month - 1,
              work.publicationDate.day
            )
            dateOptions.year = "numeric"
            dateOptions.month = "long"
            dateOptions.day = "numeric"
          }

          const publicationDateString = publicationDate.toLocaleDateString(
            "es-ES",
            dateOptions
          )

          return (
            <Publication key={index}>
              <PublicationLink doi={work.doi}>
                <Title>{work.title.value}</Title>
              </PublicationLink>
              <Journal>
                {publicationType}
                {": "}
                {work.journalTitle}
              </Journal>
              <Authors>{work.authors.join(", ")}</Authors>
              <PublicationDate>
                {publicationDateString.charAt(0).toUpperCase() +
                  publicationDateString.slice(1)}
              </PublicationDate>
            </Publication>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Publications

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
