import styled from "styled-components"
import media from 'styled-media-query'
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
width: 100%;
margin-top: 40px;

${media.lessThan("large")`
  display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.1rem;
  font-weight: 400;
`

export const MenuLinksItem = styled.li`

  .active {
    color: var(--mediumBackground);
    background: var(--highlight);
  }

  &:hover {
    background: var(--highlight);
    color: var(--mediumBackground);
  }
`

export const MenuLinksLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  padding: 6px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    color: var(--mediumBackground);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 29px;
  height: 29px;
`

export const LabelWrapper = styled.div`
  fill: #bbb;
  margin: auto 0;
`