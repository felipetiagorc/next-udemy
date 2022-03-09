import Layout from '../components/layout'
import { Button } from 'primereact/button'

export default function Home() {
  return (
    <>
      <h1>ji</h1>
      <Button label="Oi"></Button>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
