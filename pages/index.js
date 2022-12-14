import Head from 'next/head'
import Navbar from '../components/navbar'
import UserList from '../components/userList'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <UserList />
      </main>
      
    </div>
  )
}
