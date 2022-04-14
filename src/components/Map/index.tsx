import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

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

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[51.505, -0.09]}
    zoom={3}
    style={{ height: '100vh', width: '100wh' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, nome, location }) => {
      const { latitude, longitude } = location
      return (
        <Marker
          key={`places-${id}`}
          position={[latitude, longitude]}
          title={nome}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )
    })}
  </MapContainer>
)

export default Map
