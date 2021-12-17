import React from "react"
import { Image } from "@chakra-ui/react"
import { Flex, Text } from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const ProfilePicture = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { eq: "profile-pic" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `)
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gridGap={2}
    >
      <Flex
        width="100%"
        order={2}
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        wrap="nowrap"
        gridGap={1}
      >
        <Text as="h2" marginY={0} marginTop={0} marginBottom={-2}>
          Albert Álvarez Carulla
        </Text>
        <Text as="div">
          Doctor en Ingeniería y Ciéncias Aplicadas (Ingeniero / Desarrollador /
          Diseñador)
        </Text>
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          wrap="wrap"
          gridGap={2}
        >
          {[
            "Ingeniero",
            "Desarrollador",
            "Diseñador",
            "Educador",
            "Papi molón 😎",
          ].map((job, index) => (
            <Tag whiteSpace="nowrap" size="md" key={index}>
              {job}
            </Tag>
          ))}
        </Flex>
      </Flex>
      <Image
        order={{ base: 1, md: 3 }}
        flexShrink={0}
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        maxWidth="100px"
        display="inline-block"
        borderRadius="full"
        alt="Profile image"
        src={ProfilePicture.allFile.nodes[0].childImageSharp.fluid.src}
      />
    </Flex>
  )
}

export default Bio
