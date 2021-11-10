import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useReducer } from 'react'
import {SiUber} from 'react-icons/si'
import {IoCarSportSharp} from 'react-icons/io5'
import {MdElectricBike} from 'react-icons/md'
import {BsFillCalendarPlusFill} from 'react-icons/bs'
import User from './components/User'
import Link from 'next/link'




export default function Home() {

  return (
    <Container>

      <Map />

      <Dashboard>

        {/* The header of our dashboard shows the app logo and the name and image of the user. */}
        <Header>
          <Logo />
          <User name="Pedram Rahmanian" image={"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/68574398_10157595430107458_1831896932922949632_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Qt9TteTJvRgAX96_mGj&_nc_ht=scontent-sea1-1.xx&oh=2ed2142e9c4a9bf3413e8fcad5b07c16&oe=61B063D2"} />
        </Header>

        {/* This portion of the dashboard contains our three buttons. */}
        <DashboardButtons>
          <Link href="/search" passHref>
            <DashboardBtn>
              <Car />
              <span>Ride</span>
            </DashboardBtn>
          </Link>

          <DashboardBtn>
            <Bike />
            <span>2-Wheels</span>
          </DashboardBtn>
          <DashboardBtn>
            <Calendar/>
            <span>Reserve</span>
          </DashboardBtn>
        </DashboardButtons>

        {/* This is our input Button */}
        <InputButton>
          Where to?
        </InputButton>


      </Dashboard>
    </Container>
  )
}

const Container = tw.div`
  flex flex-col h-screen
`

const Dashboard = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const Logo = tw(SiUber)`
  text-8xl
`

const DashboardButtons = tw.div`
  flex justify-between
`

const DashboardBtn = tw.div`
  flex  flex-col flex-1 bg-gray-200 p-2 items-center justify-center m-2 h-32 rounded-lg transform hover:scale-105 transition text-xl &span:mt-40
`

const Car = tw(IoCarSportSharp)`
  text-5xl text-gray-900 mb-1
`

const Bike = tw(MdElectricBike)`
  text-5xl text-gray-900 mb-1
`
const Calendar = tw(BsFillCalendarPlusFill)`
  text-5xl text-gray-900 mb-1
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
