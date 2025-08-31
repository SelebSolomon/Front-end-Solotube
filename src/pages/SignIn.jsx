import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 3.5rem);
color: ${({theme}) => theme.text};
flex-direction: column;
`

const Wrapper = styled.div`
width: 30%;
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({theme}) => theme.bgLighter};
border: 1px soid ${({theme}) => theme.soft};
padding: 1.25rem 3.1rem; 
gap: 0.9rem;
border-radius: 0.5rem;
`
const Title = styled.h1`
font-size: 1.5rem;

`
const SubTitle = styled.h2`
font-size: 1rem;
`
const Input = styled.input`
border: none;
outline: none;
width: 100%;
padding: 0.5rem 1.5rem;
border: 1px solid ${({theme}) => theme.soft};

`
const Button = styled.button`
border: 1px solid ${({theme}) => theme.soft};
padding: 0.9rem 1.5rem;
border-radius: 7px;
cursor: pointer

`

const More = styled.div`
display: flex;
justify-content: space-between;
margin-top: 0.2rem;
`

const Links = styled.div`
margin-left: 3rem
`

const Link = styled.span`
margin-left: 1.3rem;
cursor: pointer

`


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>To continue with SoloTube</SubTitle>
            <Input placeholder='User Name' />
            <Input type="password" placeholder='Password'/>
            <Button>Sign in</Button>
            <Title>Or </Title>
            <Title>Sign Up</Title>
            <SubTitle>To continue with SoloTube</SubTitle>
            <Input placeholder='User Name' />
            <Input type='email' placeholder='Email' />
            <Input type="password" placeholder='Password'/>
            <Button>Sign Up</Button>

        </Wrapper>
        <More>
            English(USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>

            </Links>
        </More>
    </Container>
  )
}

export default SignIn