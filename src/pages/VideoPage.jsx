import styled, { ThemeProvider } from "styled-components"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import ReplyIcon from '@mui/icons-material/Reply';
import channelImg from '../img/seeing signs.png'
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Card from "../components/Card";

const Container = styled.div`
display: flex;
gap: 1.5rem;
`

const Content = styled.div`
flex: 5
`
const VideoWrapper = styled.div``
const Title = styled.h1`
font-size: 1.125rem;
font-weight: 400;
margin: 1.25rem 0px;
color: ${({theme}) => theme.text} 
`

const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Info = styled.span`
color: ${({theme}) => theme.softText} 

`

const Buttons = styled.div`
display: flex;
gap:1.125rem;
color: ${({theme}) => theme.text} 
`

const Button = styled.div`
display: flex;
align-items: center;
gap: 0.3rem;
cursor: pointer;
`
const Hr = styled.hr`
border: 0.5px solid ${({theme}) => theme.softText};
margin: 1rem 0px;
`

const Recommendation = styled.div`
flex:2
`

const Channel = styled.div`
display: flex;
justify-content: space-between;

`

const ChannelInfo = styled.div`
display: flex;
gap: 1.25rem;
`
const ChannelImage = styled.img`
width: 3.125rem;
height: 3.125rem;
border-radius: 50%;
`
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme}) => theme.text} 
`


const ChannelName = styled.span`
font-weight: 500;
`
const ChannelCounter = styled.span`
margin-top: 0.1rem;
margin-bottom: 1.25rem;
color: ${({theme}) => theme.softText} ;
font-size: 0.7rem;
`
const ChannelDescription = styled.p`
font-size: 0.8rem;


`



const SubcribedButton = styled.button`
background-color: red;
color: ${({theme}) => theme.softText}
border: none;
border-radius: 3px;
height: min-content;
padding: 10px 20px;
cursor: pointer;
`


const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          style={{ border: "none" }}
          allowFullScreen
      ></iframe>
        </VideoWrapper>
        <Title > Video Title</Title>
        <Details>
          <Info>7,444,444 view · Jun 3939</Info>
          <Buttons>
            <Button><ThumbUpIcon /> 123</Button>
            <Button><ThumbDownIcon />Dislike</Button>
            <Button><ReplyIcon /> reply</Button>
            <Button><ShareIcon />share</Button>


          </Buttons>
        </Details>
              <Hr />
    <Channel>
      <ChannelInfo>
          <ChannelImage src={channelImg}/>
        <ChannelDetail>
          <ChannelName >SOLO DEV</ChannelName>
          <ChannelCounter >200K Sub</ChannelCounter>
          <ChannelDescription >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ChannelDescription>
        </ChannelDetail>
      </ChannelInfo>
      <SubcribedButton>SUBSCRIBE</SubcribedButton>
    </Channel>
    <Hr/>
    <Comments />
          <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />

      </Content>
      
      <Recommendation >
        <Card type='sm' />
                <Card type='sm' />

        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />

      </Recommendation>
    </Container>
  )
}

export default VideoPage