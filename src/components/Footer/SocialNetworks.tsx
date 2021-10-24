import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import SocialNetwork from "./SocialNetwork"
import GitHubIcon from "../../images/github-icon.svg"
import TwitterIcon from "../../images/twitter-icon.svg"
import LinkedinIcon from "../../images/linkedin-icon.svg"
import InstagramIcon from "../../images/instagram-icon.svg"
import YoutubeIcon from "../../images/youtube-icon.svg"

const Div = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
`

const iconHeightWidth = 7

const SocialNetworks = () => {
  const theme = useTheme()
  return (
    <Div>
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
    </Div>
  )
}

export default SocialNetworks
