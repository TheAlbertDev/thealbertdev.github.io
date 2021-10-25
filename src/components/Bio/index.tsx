import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Flex, Box, Text } from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/react"

const Bio = () => {
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
            <Tag
              whiteSpace="nowrap"
              size="md"
              key={index}
              variant="solid"
              bg="teal.200"
              color="bgColor"
            >
              {job}
            </Tag>
          ))}
        </Flex>
      </Flex>
      <Box
        flexShrink={0}
        borderRadius="full"
        boxSize={100}
        overflow="hidden"
        borderColor="white"
        borderWidth={2}
        order={{ base: 1, md: 3 }}
      >
        <StaticImage
          src="../../images/profile-pic.jpeg"
          alt="Albert picture"
          imgStyle={{ borderRadius: "100%" }}
        />
      </Box>
    </Flex>
  )
}

export default Bio
