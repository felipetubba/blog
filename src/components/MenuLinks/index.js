import React from "react"
import { Link } from "gatsby"

import links from "./content"
import Icons from "./Icons"

import * as S from "./styles"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink to={link.url} activeClassName="active">
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
              <S.LabelWrapper>
              {link.label}
              </S.LabelWrapper>
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        )
      })}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
