import React from 'react'
import tw from "tailwind-styled-components"
import {IoArrowBack} from 'react-icons/io5'
import Link from 'next/link'

const Search = () => {
    return (
        <SearchWrapper>

            {/* Back Button for Navigation */}
            <Container>
                <Link href='/' passHref>
                    <BackButton />
                </Link>
            </Container>

            
            
            
        </SearchWrapper>
    )
}

export default Search

const SearchWrapper = tw.div`
    bg-gray-200 h-screen
`

const Container = tw.div`
    bg-white p-2
`

const BackButton = tw(IoArrowBack)`
    text-4xl ml-2 cursor-pointer
`