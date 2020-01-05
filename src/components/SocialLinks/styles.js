import styled from "styled-components"
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("large")`
  width: 50%;
  margin: 0 5px;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;

  ${media.lessThan("large")`
  justify-content: flex-end;
  `}
`

export const SocialLinksItem = styled.li`
${media.lessThan("large")`
  padding-left: 7px;
  `}
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;

  ${media.lessThan("large")`
  width: 35px;
  height: 35px;
  `}
`