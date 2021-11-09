import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useReducer } from 'react'
import {SiUber} from 'react-icons/si'
import User from './components/User'

export default function Home() {

  return (
    <Container>
      <Map />
      <Dashboard>
        <Header>
          <Logo><SiUber /></Logo>
          <User name="Pedram Rahmanian" image={"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/68574398_10157595430107458_1831896932922949632_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Qt9TteTJvRgAX96_mGj&_nc_ht=scontent-sea1-1.xx&oh=2ed2142e9c4a9bf3413e8fcad5b07c16&oe=61B063D2"} />


        </Header>
      </Dashboard>
    </Container>
  )
}

const Container = tw.div`
  flex flex-col h-screen
`

const Dashboard = tw.div`
  bg-green-200 flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const Logo = tw.div`
  large
`

