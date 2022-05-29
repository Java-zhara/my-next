// import Link from 'next/link'
import A from '../components/A'
import MainContainer from '../components/MainContainer'

const Users = ({users}) => {
  return (
    <MainContainer keywords={'users next js'} title="Пользователи">
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <A href={`users/${user.id}`} text={user.name} />
            {/* <Link href={`users/${user.id}`}>
              <a>{user.name}</a>
            </Link> */}
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()

  return {
    props: {users}, // will be passed to the page component as props
  }
}
