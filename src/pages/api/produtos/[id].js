export async function getStaticPaths() {
  return {
    //para cada objeto q colocar aqui, vai ser gerado um path: (site.com/produtos/1 .. 2.)
    // aqui ta na mão, mas pode vir do banco de dados ou API..
    // E se tiver milhões? vai demorar o build... e o fallback resolve isso..
    paths: [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      }
    ],
    fallback: false
  }
}

// pra cada objeto encontrado no 'paths', ele roda essa função getStaticProps,
// passando o contexto cada vez:
// o contexto é justamente o path que esta sendo trabalhado naquele momento..
// por isso conseguimos acessar o id atraves de context.params.id
export async function getStaticProps(context) {
  const id = context.params.id

  return {
    props: {
      id: id
    }
  }
}


export default function Produtos(req, res) {
  const id = req.query.id
  console.log(id)
}

