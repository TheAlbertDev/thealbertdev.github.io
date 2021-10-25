import React from "react"
import { useTheme } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/layout"
import SocialNetwork from "./SocialNetwork"
import GitHubIcon from "../../images/github-icon.svg"
import TwitterIcon from "../../images/twitter-icon.svg"
import LinkedinIcon from "../../images/linkedin-icon.svg"
import InstagramIcon from "../../images/instagram-icon.svg"
import YoutubeIcon from "../../images/youtube-icon.svg"

const iconHeightWidth = 7

const SocialNetworks = () => {
  const theme = useTheme()
  return (
    <Flex flexGrow={0} justifyContent="center" gap={theme.space[2]}>
      <SocialNetwork
        to="https://github.com/TheAlbertDev"
        svg={
          <GitHubIcon
            width={theme.space[iconHeightWidth]}
            height={theme.space[iconHeightWidth]}
          />
        }
      />
      <SocialNetwork
        to="https://twitter.com/thealbertdev"
        svg={
          <TwitterIcon
            width={theme.space[iconHeightWidth]}
            height={theme.space[iconHeightWidth]}
          />
        }
      />
      <SocialNetwork
        to="https://www.linkedin.com/in/thealbertdev/"
        svg={
          <LinkedinIcon
            width={theme.space[iconHeightWidth]}
            height={theme.space[iconHeightWidth]}
          />
        }
      />
      <SocialNetwork
        to="https://www.instagram.com/thealbertdev/"
        svg={
          <InstagramIcon
            width={theme.space[iconHeightWidth]}
            height={theme.space[iconHeightWidth]}
          />
        }
      />
      <SocialNetwork
        to="https://www.youtube.com/channel/UCoQmCW4NZVIb6_KyT1bt7bw"
        svg={
          <YoutubeIcon
            width={theme.space[iconHeightWidth]}
            height={theme.space[iconHeightWidth]}
          />
        }
      />
    </Flex>
  )
}

export default SocialNetworks
