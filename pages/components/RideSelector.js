import React from 'react'
import tw from "tailwind-styled-components"
import CarService from './CarService'
import {carList} from '../../carList'
import ConfirmButton from './ConfirmButton'

const RideSelector = () => {
    let ride
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <Container>
                <List>
                    {carList.map((car) => (
                        <CarService key={car.service} service={car.service} rate={20}/>))} 
                </List>
            </Container>
            
            <ConfirmButton text={`Confirm ${ride || 'UberX Placeholder'}`} />
            
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 flex flex-col h-1/2 
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-1 border-b
`

const Container = tw.div` flex flex-1 overflow-y-scroll`

const List = tw.div`overflow-y-scroll border-b-2 flex flex-col flex-1 `