import * as React from "react"
import { useTheme } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Flex, Box, Text } from "@chakra-ui/layout"

const Bio = () => {
  const theme = useTheme()

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <Flex alignItems="center">
      <Box display="inline-block">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpeg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
          imgStyle={{ borderRadius: "100%" }}
        />
      </Box>
      {author?.name && (
        <Box as="div" display="inline-block" ml={theme.space[2]}>
          <Text as="p" fontSize="md" fontFamily="body" color="whiteAlpha.900">
            Escrito por <strong>{author.name}</strong>
            {` `}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              ¡Sígueme en Twitter!
            </a>
          </Text>
        </Box>
      )}
    </Flex>
  )
}

export default Bio
