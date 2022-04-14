import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <div id="mapa">
      <Layout>
        <LinkWrapper href="/about">
          <InfoOutline size={32} aria-label="About" />
        </LinkWrapper>
        <Map places={[
          {
            id: '1',
            nome: 'Corevali',
            slug: 'corevali',
            location: {
              latitude: -23.0102894,
              longitude: -45.5489503          
            }
          }

        ]}/>
      </Layout>
    </div>
  )
}
