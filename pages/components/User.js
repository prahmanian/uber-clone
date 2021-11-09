import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar'
import tw from "tailwind-styled-components"

// This component renders a user's name along with their avatar.

class User extends Component {

    static propTypes = {
        name: PropTypes.object,
        image: PropTypes.string,
        size: PropTypes.string,
        round: PropTypes.bool,
    }

    render() {

        let {image, name, size, round } = this.props
        name = name ? name : "User Name" // Add Placeholder name
        size = size ? size : "50" // set default size
        round = round ? round : true //set default to rounded corners
        // image default in Avatar component is initials of name in colored background
    

        return (

            <UserWrapper>
                <UserName>{name}</UserName>
                <Avatar name={name} src={image} round={round} size={size} textSizeRatio={2.25}/>
            </UserWrapper>
        )
    }
}

const UserWrapper = tw.div`
    flex items-center
`

const UserName = tw.div`
    mr-4 w-20 text-sm
`

export default User