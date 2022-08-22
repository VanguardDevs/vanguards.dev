import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>VanguardDevs</title>
                <meta name="description" content="¡Desarrolladores de vanguardia!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div class="container">
              <div class="wrapper">
                <div class="content">
                  <div class="item">
                    <h1>{'<EN CONSTRUCCIÓN />'}</h1>
                    <p>Nuestro sitio web está en construcción.</p>
                    <p>#SomosVanguardDevs</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
