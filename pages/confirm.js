import React from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
// import ConfirmButton from './components/ConfirmButton'
import RideSelector from './components/RideSelector'
import BackButtonFloat from './components/BackButtonFloat'

const Confirm = () => {
    let ride
    return (
        <ConfirmWrapper>
            <BackButtonFloat to='/search'/>
            <Map />
            <RideSelector />

            

            {/* <RidesContainer> */}
                {/* Ride Selector */}
                {/* <RideSelector /> */}

                {/* Confirm Button */}
                {/* <ConfirmButton text={`Confirm ${ride || 'UberX Placeholder'}`} /> */}
            {/* </RidesContainer> */}
        </ConfirmWrapper>
    )
}

export default Confirm

const Container = tw.div`flex-1`

const ConfirmWrapper = tw.div`
    flex h-screen flex-col
    overflow-hidden

`

const RidesContainer = tw.div`
    flex-1 flex flex-col
`