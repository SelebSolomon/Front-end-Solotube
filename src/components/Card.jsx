import styled, { ThemeProvider } from "styled-components"
import cardImage from '../img/seeing signs.png'
import { Link } from 'react-router-dom';
import avatar from '../img/seeing signs.png'


const Container = styled.div`
width: ${(props) => props.type !== 'sm' && '22.5rem' };
margin-bottom:   ${(props) => props.type === 'sm' ? '10px' : '2.8125rem'};
cursor: pointer;
display: ${(props) => props.type === 'sm' && 'flex'};
gap: 10px;
`

const Image = styled.img`
width: 100%;
height:   ${(props) => props.type === 'sm' ?'9.3rem' : '12.8125rem'};
background-color: #999;
flex: 1;
`
const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type !== 'sm' && '1rem' };
gap: 0.75rem;
flex: 1;

`

const ChannelImage = styled.img`
width: 3.125rem;
height: 3.125rem;
border-radius: 50%;
display: ${(props) => props.type === 'sm' ? 'none' : 'block'}
`

const Text = styled.div`

`
const Title = styled.h1`
font-weight: 500;
font-size: 1rem;
color: ${({theme}) => theme.text}

`
const ChannelName = styled.h2`
font-size: 0.875rem;
color: ${({theme}) => theme.softText};
margin: 0.625rem 0rem;


`
const Info = styled.div`
font-size: 0.875rem;
color: ${({theme}) => theme.softText}; 
`


const Card = ({type}) => {
  return (
    
    <Link to="video/text" style={{textDecoration: "none"}}>
    
    <Container type={type}>
        <Image type={type}  src={cardImage} />
        <Details type={type}>
            <ChannelImage type={type} src={avatar}/>
            <Text>
                <Title>Title</Title>
                <ChannelName>Solo Content</ChannelName>
                <Info>609,365 views * 1 day ago</Info>
            </Text>
        </Details>
    </Container>
    </Link>
  )
}

export default Card