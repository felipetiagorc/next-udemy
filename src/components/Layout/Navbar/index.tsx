import React from 'react'
import * as S from './styles'
const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarTitle>Dashboard</S.SidebarTitle>
          <S.SidebarList>
            <S.SidebarListItem>Home</S.SidebarListItem>
            <S.SidebarListItem>Analytics</S.SidebarListItem>
            <S.SidebarListItem>Sales</S.SidebarListItem>
          </S.SidebarList>
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  )
}
export default Sidebar
