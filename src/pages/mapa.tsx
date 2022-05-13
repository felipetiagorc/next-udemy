import { MapProps } from 'components/Map/'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'
import MapaTemplate from 'templates/Mapa/'

export default function Mapa({ places }: MapProps) {
  return <MapaTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  //todo getStaticProps tem que retornar alguma coisa: (as props), com os 'places':
  // esse places vai subir pro Mapa, ser passado pro MapaTemplate, e lá no template
  // vai receber esse places, jogar pro Mapa, e o Mapa renderiza.
  return {
    revalidate: 5, // só isso pra adicionar "ISR" Incremental Static Reval
    props: {
      places
    }
  }
}
