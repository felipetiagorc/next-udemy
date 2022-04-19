import { useRouter } from 'next/router'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

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

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[23.0859, -45.64748]}
      zoom={3}
      style={{ height: '70vh', width: '50wh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, slug, nome, location }) => {
        const { latitude, longitude } = location
        return (
          <Marker
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
  )
}

export default Map
