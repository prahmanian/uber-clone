import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import {useEffect} from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhaG1hbmlhbiIsImEiOiJja3ZyOWJncXEyNjRxMnZxbjZoZHlvcmNiIn0.F-BqiwcErtMQ_i619_YG9Q';

export default function Home() {

  return (
    <Container>
      <Map id='map' />
      <Dashboard>Controls</Dashboard>
    </Container>
  )
}

const Container = tw.div`
  flex flex-col bg-blue-100 h-screen
`

const Map = tw.div`
  bg-red-300 flex-1
`

const Dashboard = tw.div`
  bg-green-200 flex-1
`