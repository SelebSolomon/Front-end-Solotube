import React from 'react'
import styled from 'styled-components'
import SoloTube from '../img/youtubeLogo.png'
import HomeIcon from '@mui/icons-material/Home';
import Subscription from '@mui/icons-material/Subscriptions';
import Explore from '@mui/icons-material/Explore';
import Library from '@mui/icons-material/VideoLibrary';
import History from '@mui/icons-material/History';
import Music from '@mui/icons-material/LibraryMusic';
import Sport from '@mui/icons-material/SportsSoccer';
import Gaming from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import News from '@mui/icons-material/Feed';
import Live from '@mui/icons-material/LiveTv';
import Settings from '@mui/icons-material/SettingsApplications';
import Report from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import DarkMood from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';



const Container = styled.div`
flex:1;
background-color: ${({theme}) => theme.bg};
height: 100vh;
color:  ${({theme}) => theme.text};
position: sticky;
top: 0;

`

const Wrapper = styled.div`
padding: 10%

`
const Logo = styled.div`
display:flex;
align-items: center;
gap: 5%;
font-weight: bold;
margin-bottom: 20%;

`

const Img = styled.div`
height: 30px

`
const Hr = styled.div`
margin: 15px 0px;
border: 0.5px solid  ${({theme}) => theme.soft} 

`

const Items = styled.div`
display:flex;
align-items: center;
gap: 10%;
font-weight: bold;
margin-bottom: 5%;
cursor: pointer;
&:hover{
background-color: ${({theme}) => theme.softText}
};

`

const Login = styled.div``
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display:flex;
align-items: center;
gap: 5px
`
const Title = styled.h2`
font-size: 14px;
color: #aaaaaa;
font-weight: 500;
margin-bottom: 10%;

`


const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/"> 
        <Logo>
          <Img />
            <img src={SoloTube} alt="youtube logo" />
            SoloTube       
        </Logo>
        </Link>
        <Items >
          <HomeIcon />
          Home
        </Items>
        <Items >
          <Explore />
          Explore
        </Items>
        <Items >
          <Subscription />
          Subscription
        </Items>
        <Hr />
        <Link to="/signup"> 
          <Login>
              Sign in to like, comment and subscribe
          </Login>
              <Button><AccountCircleIcon /> Sign In</Button>
        </Link>
         <Hr />
        <Title>
          BEST OF SOLOTUBE
        </Title>
        <Hr/>
        <Items >
          <Library />
          Library
        </Items>
        <Items >
          <History />
          History
        </Items>
                <Hr />
        <Items >
          <Music />
          Music
        </Items>
        <Items >
          <Sport />
          Sport
        </Items>
        <Items >
          <Gaming />
          Gaming
        </Items>
        <Items >
          <MovieIcon />
          Movie
        </Items>
        <Items >
          <News />
          News
        </Items>
        <Items >
          <Live />
          Live
        </Items>
                <Hr />
        <Items >
          <Settings />
          Settings
        </Items>
        <Items >
          <Report />
          Report
        </Items>
         <Items >
          <HelpIcon />
          Help
        </Items>
         <Items  onClick={() => setDarkMode(!darkMode)}>
          <DarkMood />
          {darkMode ? 'light mode' : 'dark Mode'}
        </Items>
        
      </Wrapper>
    </Container>
  )
}

export default Menu