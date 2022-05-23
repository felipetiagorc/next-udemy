import { MapProps } from 'components/Map/'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'
import Mapa from 'templates/Mapa'

export default function Home({ places }: MapProps) {
  return <Mapa places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  //todo getStaticProps tem que retornar alguma coisa: (as props), com os 'places':
  // esse places vai subir pro Home, ser passado pro HomeTemplate, e lá no template
  // vai receber esse places, jogar pro Mapa, e o Mapa renderiza.
  return {
    revalidate: 5, // só isso pra adicionar "ISR" Incremental Static Reval
    props: {
      places
    }
  }
}
