import styled from "styled-components"
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin: 0 auto;

  ${media.lessThan("large")`
  margin: 0 5px;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  padding: 8px;
  
${media.lessThan("large")`
  padding: 3px;
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
  width: 38px;
  height: 38px;

  ${media.lessThan("large")`
  width: 28px;
  height: 28px;
  `}
`