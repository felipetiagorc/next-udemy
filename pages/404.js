import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(1);
      router.push('/')
    }, 3000)
    console.log('use effect ran')
  })
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <p>
        Va pra <Link href="/">Home</Link>
      </p>
    </div>
  )
}

export default NotFound
