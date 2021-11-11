import React from 'react'
import tw from "tailwind-styled-components"
import {IoArrowBack} from 'react-icons/io5'
import Link from 'next/link'

const BackButtonFloat = (props) => {
    const {to} = props
    return (    
        <Link href={to} passHref>
            <Container>
                <BackButton />
            </Container>
        </Link>
                    
        
    )
}

export default BackButtonFloat

const Container = tw.div`
    bg-white rounded-full w-12 h-12 p-2 flex items-center justify-center fixed top-4 left-4 z-10 filter drop-shadow-lg
`

const BackButton = tw(IoArrowBack)`
    text-4xl cursor-pointer
`