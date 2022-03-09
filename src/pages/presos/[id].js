export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((preso) => {
    return {
      params: { id: preso.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { preso: data }
  }
}

const Details = ({ preso }) => {
  return (
    <div>
      <h1>Detalhes</h1>
      <p>{preso.name}</p>
      <p>{preso.email}</p>
      <p>{preso.address.city}</p>
    </div>
  )
}

export default Details
