import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { School } from "styled-icons/material/School"

import * as S from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isLightMode = theme === 'light'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return(
    <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
    <S.MenuBarLink to="/cursos" title="Cursos">
        <S.MenuBarItem>
          <School />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar tema" onClick={() => {
        window.__setPreferredTheme(isLightMode ? "dark" : "light")
      }}
      className={theme}
      >
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
  )
}

export default MenuBar
