import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { Link } from 'react-router-dom';


const Container = styled.div`
height: 3.5rem;
position: sticky;
top: 0;
background-color: ${({theme}) => theme.bgLighter} 

`
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
justify-content: flex-end;
position: relative;

`
const Search = styled.div`
width: 40%;
display: flex;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
justify-content: space-between;
padding: 0.3125rem;
border-radius: 0.93rem;
border: 1px solid #ccc
`
const Input = styled.input`
border: none;
outline: none;
background-color: transparent;
`
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
cursor: pointer;
display:flex;
align-items: center;
gap: 5px
`

const Navbar = () => {
  return (
<Container >
  <Wrapper >
      <Search>
              <Input  placeholder='search'/>
              <YoutubeSearchedForIcon />
      </Search>
      <Link to="/signup">
       <Button><AccountCircleIcon /> Sign In</Button>
      </Link>

  </Wrapper>
</Container> 

  )
}

export default Navbar