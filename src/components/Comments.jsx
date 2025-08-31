import React from 'react'
import styled from 'styled-components'
import avatar from '../img/seeing signs.png'

const Container = styled.div``

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
const Avatar = styled.img`
width: 3.125rem;
height: 3.125rem;
border-radius: 50%;

`
const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid ${({theme}) => theme.softText}
  background-color: transparent
  width: 100%
`;


const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={avatar} />
            <Input  placeholder='Add A Comment'/>
        </NewComment>
        
    </Container>
  )
}

export default Comments