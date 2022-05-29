import A from './A'
import Head from 'next/head'

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
      <Head>
        <meta keywords={'java-zhara, nextjs' + keywords} />
        <title>{title}</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Главная" />
        <A href={'/users'} text="Пользователи" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: #7d99ff;
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer
