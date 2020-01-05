import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  height: auto;
  padding: 1rem 0.75rem;
  width: 100%;
  `}
`