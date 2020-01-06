import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styles"

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.layoutGroup>
      <Profile />
      <MenuLinks />
    </S.layoutGroup>
    <S.layoutGroup>
     <SocialLinks />
    </S.layoutGroup>
  </S.SidebarWrapper>
)

export default Sidebar
