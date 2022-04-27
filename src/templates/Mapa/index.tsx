import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'

const Mapa = dynamic(() => import('components/Map'), { ssr: false })
export default function MapaTemplate({ places }: MapProps) {
  return (
    <div id="mapa">
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Mapa places={places} />
    </div>
  )
}
