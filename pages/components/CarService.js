import React from 'react'
import tw from "tailwind-styled-components"
import {services} from '../../carList'

const CarService = (props) => {
    const {service, rate} = props
    console.log('services: ',services[service])
    return (
        <Service>
            <Icon src={services[service].imgUrl} />

            <Details>
                <Name>{service}</Name>
                <Distance>5 min away</Distance>
            </Details>

            <Price>${(rate * services[service].multiplier).toFixed(2)}</Price>

        </Service>
    )
}

export default CarService

const Service = tw.div`flex p-4 items-center`
const Icon = tw.img`h-10 mr-4`
const Details = tw.div`flex-1`
const Name = tw.div`font-medium`
const Distance = tw.div`text-xs text-blue-500`
const Price = tw.div`text-sm`