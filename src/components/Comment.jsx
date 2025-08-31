import React from 'react'
import styled from 'styled-components'
import avatar from '../img/seeing signs.png'


const Container = styled.div`
display: flex;
margin: 1.9rem 0rem;
gap: 0.9rem
`

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 0.9;
color: ${({theme}) => theme.text} 

`



const Avatar = styled.img`
width: 3.125rem;
height: 3.125rem;
border-radius: 50%;

`

const Name = styled.h1`
font-size: 13px;
font-weight: 500;
`
const Date = styled.span`
font-size: 10px;
font-weight: 400
color: ${({theme}) => theme.softText} 
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px
`


const Comment = () => {
  return (
    <Container>
                <Avatar src={avatar}/>
            <Details>
                <Name>Seleb Solomon <Date>1 day ago</Date></Name>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

            </Details>
    </Container>
  )
}

export default Comment