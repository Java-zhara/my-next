import {useRouter} from 'next/router'
import MainContainer from '../../components/MainContainer'
import Image from 'next/image'
import styles from '../../styles/user.module.scss'

export default function User({user}) {
  const {query} = useRouter()
  return (
    <MainContainer keywords={user.name} title={`Пользователь ${user.name}`}>
      <div className={styles.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
        <div>
          <Image src="/iconUser.jpg" alt="user img" width={300} height={225} />
        </div>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const user = await response.json()
  return {
    props: {user}, // will be passed to the page component as props
  }
}
