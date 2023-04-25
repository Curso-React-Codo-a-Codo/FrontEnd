import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/componentes/card'
import { useEffect, useState } from 'react'
import Clock from '@/componentes/Clock'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  /* esto es una promesa para obtener datos desde un backend */

  const [info, setInfo] = useState()
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/136')
      .then(response => response.json())
      .then(data => setInfo([data]))
  }, [])
  if (info === undefined) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Clock> </Clock>
        Hola Mundo
        {
          info.map(element => (
            <Card key={element.name} name={element.name} img={element.image} ></Card>
          ))
        }
        xd
      </main>
    </>
  )
}

// setInterval( sadfsfsdf ,1000) //Cada x segundos llama a esa funcion
