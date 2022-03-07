type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  )
}
