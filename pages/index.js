import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'

export default function Home() {

  return (
    <Container>
      <Map />
      <Dashboard>Controls</Dashboard>
    </Container>
  )
}

const Container = tw.div`
  flex flex-col bg-blue-100 h-screen
`



const Dashboard = tw.div`
  bg-green-200 flex-1
`