import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome React Hooks</title>
        <meta
          name="description"
          content="A collection of awesome React hooks to speed-up your components and hooks development.
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Awesome React Hooks</h1>
        <p className={styles.description}>
          A collection of awesome React hooks to speed-up your components and
          hooks development.
        </p>

        <p>This is the start of something awesome.</p>
      </main>
    </>
  )
}
