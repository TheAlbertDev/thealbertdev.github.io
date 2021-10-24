import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { Tag } from "@chakra-ui/tag"
import styled from "@emotion/styled"
import Seo from "../components/seo"
import Bio from "../components/Bio"
import LinkIcon from "../images/link-icon.svg"
import { Box } from "@chakra-ui/layout"
import publications from "../../static/publications.json"
import { useTheme } from "@chakra-ui/react"

const InformationSource = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 32px;
  margin-bottom: 64px;
  display: block;
`

const Publication = styled.li`
  margin-left: 30px;
  &:not(:last-of-type) {
    margin-bottom: 64px;
  }
`
const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`
const Journal = styled.span`
  margin: 0;
`
const Authors = styled.div`
  margin-bottom: ${({ theme }) => theme.space[1]};
`
const PublicationDate = styled.span`
  margin-bottom: ${({ theme }) => theme.space[1]};
`

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
    width: 24px;
    float: left;
    margin-left: -30px;
    margin-right: 6px;
    & svg {
      fill: ${({ theme }) => theme.colors.white};
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }
  `

  return (
    <div>
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
    </div>
  )
}

const Publications = ({
  data,
  location,
}: {
  data: any
  location: PageProps["location"]
}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const theme = useTheme()
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Todas las publicaciones" />
      <Box my={theme.space[10]}>
        <Bio />
      </Box>
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
              <Tag size="sm" colorScheme="teal">
                {publicationType}
              </Tag>
              <PublicationLink doi={work.doi}>
                <Title>{work.title.value}</Title>
              </PublicationLink>
              <Journal>{work.journalTitle}</Journal> |{" "}
              <PublicationDate>
                {publicationDateString.charAt(0).toUpperCase() +
                  publicationDateString.slice(1)}
              </PublicationDate>
              <Authors>{work.authors.join(", ")}</Authors>
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
