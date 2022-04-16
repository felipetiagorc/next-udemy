import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/Pages'

export default function Page({ heading, body }) {
  const router = useRouter()
  //retorna um loading enquanto esta sendo criado:
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

// gerando 'apenas' as urls das paginas: (sem dados)
// dá erro, pq precisa do getStaticProps pra usar o getStaticPaths
export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 1 })
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
