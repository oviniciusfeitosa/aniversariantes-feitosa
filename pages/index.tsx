import type { NextPage } from 'next'
import Head from 'next/head';
import { Dispatch, SetStateAction } from 'react';
// import Image from 'next/image';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ThemeProvider } from 'styled-components';

import styles from '../styles/Home.module.css';

type ChildProps = {
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  isDarkMode: boolean
};

const Home: NextPage<ChildProps> = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aniversariantes Feitosa</title>
        <meta name="description" content="Aniversariantes Feitosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{textAlign: "center"}}>
        <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
        <h1 >
          Aniversariantes Feitosa
        </h1>

        <p className={styles.description}>
          Próximos aniversários
        </p>
        <iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showNav=0&showPrint=0&showTz=0&showCalendars=0&showDate=0&src=cWFtdHJjZm5ncDdoMTllNHJtcWFjMWUzY3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA" style={{border: 0, height: 500}} scrolling="yes"></iframe>
          
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/oviniciusfeitosa/aniversariantes-feitosa"
          target="_blank"
          rel="noopener noreferrer"
        >
            @oviniciusfeitosa
        </a>
      </footer>
    </div>
  )
}

export default Home
