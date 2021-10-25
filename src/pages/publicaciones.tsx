import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { Tag } from "@chakra-ui/tag"
import Seo from "../components/seo"
import Bio from "../components/Bio"
import LinkIcon from "../images/link-icon.svg"
import { Text, Box } from "@chakra-ui/layout"
import publications from "../../static/publications.json"
import { useTheme } from "@chakra-ui/react"

const PublicationLink = (props: {
  doi: string
  children: React.ReactNode | React.ReactNode[]
}) => {
  const theme = useTheme()

  if (props.doi === null) return <>{props.children}</>

  return (
    <Box
      sx={{
        a: {
          textDecoration: "none",
          "&:hover svg": {
            opacity: 1,
          },
        },
      }}
    >
      <a
        href={"https://www.doi.org/" + props.doi}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Box
          width="24px"
          float="left"
          ml="-30px"
          mr="6px"
          sx={{
            svg: {
              fill: theme.colors.white,
              opacity: 0.5,
              transition: "opacity 0.2s ease-in-out",
            },
          }}
        >
          <LinkIcon />
        </Box>
        {props.children}
      </a>
    </Box>
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
      <Text
        as="div"
        fontFamily={theme.fonts.heading}
        fontWeight={theme.fontWeights.light}
        fontSize={theme.fontSizes.sm}
        mt="32px"
        mb="64px"
      >
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
      </Text>
      <Box
        sx={{
          li: {
            marginLeft: "30px",
            "&:not(:last-of-type)": {
              marginBottom: "64px",
            },
          },
        }}
      >
        <ol style={{ listStyle: `none` }}>
          {(publications.works as unknown as Array<any>).map((work, index) => {
            const publicationType = (
              work.type.charAt(0).toUpperCase() + work.type.slice(1)
            ).replace("-", " ")

            let publicationDate
            let dateOptions: { year?: string; month?: string; day?: string } =
              {}

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
              <li key={index}>
                <Tag size="sm" colorScheme="teal">
                  {publicationType}
                </Tag>
                <PublicationLink doi={work.doi}>
                  <Text as="h3" my={0}>
                    {work.title.value}
                  </Text>
                </PublicationLink>
                <Text as="span" m={0}>
                  {work.journalTitle}
                </Text>{" "}
                |{" "}
                <Text as="span" mb={theme.space[1]}>
                  {publicationDateString.charAt(0).toUpperCase() +
                    publicationDateString.slice(1)}
                </Text>
                <Text mb={theme.space[1]} style={{ textIndent: 0 }}>
                  {work.authors.join(", ")}
                </Text>
              </li>
            )
          })}
        </ol>
      </Box>
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
