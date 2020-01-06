import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  padding: 1.5rem 0;
  text-align: right;
  width: 18.5rem;

  ${media.lessThan("large")`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 1rem 0.75rem;
  width: 100%;
  `}
`

export const layoutGroup = styled.div`
`