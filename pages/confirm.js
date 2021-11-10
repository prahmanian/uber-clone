import React from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'

const Confirm = () => {
    return (
        <ConfirmWrapper>
            <Map />
            <RidesContainer>
                test
            </RidesContainer>
        </ConfirmWrapper>
    )
}

export default Confirm

const ConfirmWrapper = tw.div`
    flex h-screen flex-col
`

const RidesContainer = tw.div`
    flex-1
`