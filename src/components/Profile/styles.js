import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 8px;
`

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  flex-direction: row;

  ${media.lessThan("large")`
  display: flex;
  text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.5rem;
  margin: 0.5rem auto 0.5rem;
  line-height: 1.2;
  font-weight: 600;

  ${media.lessThan("large")`
  font-size: 1.2rem;
  margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1rem;
  font-weight: 300;

  ${media.lessThan("large")`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 2rem auto 0;
  padding: 0 12px;
  text-align: center;

  ${media.lessThan("large")`
  display: none;
  `}
`