import React from 'react'
import tw from "tailwind-styled-components"
import {IoArrowBack} from 'react-icons/io5'
import Link from 'next/link'
import {BsCircle, BsFillSquareFill, BsPlusCircleFill} from 'react-icons/bs'

const Search = () => {
    return (
        <SearchWrapper>

            {/* Back Button for Navigation */}
            <Container>
                <Link href='/' passHref>
                    <BackButton />
                </Link>
            </Container>

            {/* Input Container */}
            <Container>

                {/* from-to icons container */}
                <IconContainer>
                    <Start />
                    <Line  src="https://img.icons8.com/dotty/80/000000/vertical-line.png"/>
                    <End />
                </IconContainer>

                {/* input fields container */}
                <InputContainer>
                    <Input placeholder="Enter pickup location..." />
                    <Input placeholder="Where to?" />
                </InputContainer>

                {/* Add Icon container */}
                <IconContainer>
                    <Plus />
                </IconContainer>

            </Container>
            
        </SearchWrapper>
    )
}

export default Search

const SearchWrapper = tw.div`
    bg-gray-200 h-screen
`

const Container = tw.div`
    bg-white p-2 flex
`

const IconContainer = tw.div`
    flex flex-col items-center h-20 w-12 my-4
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-md p-2 outline-none border-none
`

const InputContainer = tw.div`
    flex flex-col flex-1
`

const BackButton = tw(IoArrowBack)`
    text-4xl ml-2 cursor-pointer
`

const Start =tw(BsCircle)`
    flex-1 text-xs
`

const Line = tw.img`
    h-10 flex-2
`

const End =tw(BsFillSquareFill)`
    flex-1 text-xs
`

const Plus =tw(BsPlusCircleFill)`
    flex-1 text-3xl
`