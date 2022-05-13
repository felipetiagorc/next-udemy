//para cada objeto q colocar aqui, vai ser gerado um path: (site.com/produtos/1 .. 2.)
// aqui ta na mão, mas pode vir do banco de dados ou API..
// E se tiver milhões? vai demorar o build... e o fallback resolve isso..

export async function getStaticPaths() {
  return {
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
    fallback: 'blocking'
  }
}
//até agora só informamos os caminhos: quem gera é o GetStaticProps:
// pra cada objeto encontrado no 'paths', ele roda essa função getStaticProps,
// passando o contexto cada vez:
// o contexto é justamente o path que esta sendo trabalhado naquele momento..
// por isso conseguimos acessar o id atraves de context.params.id
export async function getStaticProps(context) {
  await delay(2000)
  const id = context.params.id
  //aqui consulta o banco e devolve o 'data' via props:

  return {
    props: {
      id: id
    }
  }
}


export default function Usuarios(props) {

  return <h1>{`Id do usuário ${props.id}`}</h1>
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}