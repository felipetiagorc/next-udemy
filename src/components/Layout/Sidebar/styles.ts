import styled from 'styled-components'

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 13%;
  min-width: 180px;
  background-color: rgb(251, 251, 255);
  background-color: red;
`
export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`
export const SidebarSearch = styled.input`
  font-size: 1.3rem;
  border: none;
  background: papayawhip;
`

export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`
export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`
export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`

// export const MyTimeline = styled(Timeline)`
//   ${sharedStyle}
// `
// export const MyTrendingUp = styled(TrendingUp)`
//   ${sharedStyle}
// `
// export const MyPermIdentity = styled(PermIdentity)`
//   ${sharedStyle}
// `
// export const MyStorefront = styled(Storefront)`
//   ${sharedStyle}
// `
// export const MyAssessment = styled(Assessment)`
//   ${sharedStyle}
// `
// export const MyLocalAtm = styled(LocalAtm)`
//   ${sharedStyle}
// `
// export const MyDrafts = styled(Drafts)`
//   ${sharedStyle}
// `
// export const MyFeedback = styled(Feedback)`
//   ${sharedStyle}
// `
// export const MyForum = styled(Forum)`
//   ${sharedStyle}
// `
// export const MyWork = styled(Work)`
//   ${sharedStyle}
// `
// export const MyPieChart = styled(PieChart)`
//   ${sharedStyle}
// `
// export const MyReceipt = styled(Receipt)`
//   ${sharedStyle}
// `
