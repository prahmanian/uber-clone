import React from 'react'
import tw from "tailwind-styled-components"

const ConfirmButton = (props) => {
    const {text, onClick} = props
    return (
        <ButtonContainer>
            <Button onClick={onClick} > {text} </Button>
        </ButtonContainer>
    )
}

export default ConfirmButton

const ButtonContainer = tw.div`
    flex items-center my-4 w-screen
`

const Button = tw.button`
    bg-black text-white py-2 rounded-sm flex-1 mx-4 px-4  cursor-pointer text-2xl
`