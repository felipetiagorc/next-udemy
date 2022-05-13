import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/Pages'

//aqui gera cada pagina, através de um template:
export default function Page({ heading, body }) {
  const router = useRouter()

  //aqui retorna um loading enquanto esta sendo criado:
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

// gera as URL´s em build time:
export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3 //só tá gerando as 3 primeiras paginas.. (e usando fallback)
  })
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

// gera os dados da pagina em build time:
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })
  // se os dados não existirem retorna 404:
  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
