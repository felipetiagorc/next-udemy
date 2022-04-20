import L from 'leaflet'
import { useRouter } from 'next/router'
import { MapConsumer, MapContainer, Marker, TileLayer } from 'react-leaflet'
import * as S from './styles'

type Place = {
  id: string
  nome: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}
export type MapProps = {
  places?: Place[]
}

const markerIcon = new L.Icon({
  iconUrl: 'img/pin-red.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20],
  popupAnchor: [0, -40]
})

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <S.MapWrapper>
      <MapContainer
        center={[23.0859, -45.64748]}
        zoom={3}
        minZoom={2}
        // worldCopyJump={true} //roda infinito o globo, mas pisca
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '70vh', width: '50wh' }}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(1)
            }
            return null
          }}
        </MapConsumer>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map(({ id, slug, nome, location }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              icon={markerIcon}
              key={`places-${id}`}
              position={[latitude, longitude]}
              title={nome}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
