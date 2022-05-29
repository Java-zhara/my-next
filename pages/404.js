import {useEffect} from 'react'
import {useRouter} from 'next/router'
import A from '../components/A'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div>
      <h1>Ой...</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Перехожу на <A href={'/'} text="главную страницу" />
        через 3 секунды...
      </p>
    </div>
  )
}

export default NotFoundPage
