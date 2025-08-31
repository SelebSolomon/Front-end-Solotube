import styled, { ThemeProvider } from "styled-components"
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import { darkTheme, lightTheme } from '../src/utils/Theme'
import { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import VideoPage from "./pages/VideoPage"
import SignIn from "./pages/SignIn"


const Container = styled.div`
display: flex
`
const Main = styled.div`
flex:7;
background-color: ${({theme}) => theme.bg} 
`


const Wrapper = styled.div`
padding: 1.375rem 6rem;


`


function App() {
const [darkMode, setDarkMode] = useState(true)



  return (
    <>
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container >
    <BrowserRouter>
      <Menu  darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar/>
            <Wrapper >
                <Routes>
                    <Route path="/"/>
                    <Route index element={<HomePage />}/>
                    <Route path="/signup" element={<SignIn />}/>
                    <Route path="/video">
                        <Route path=":id" element={<VideoPage />}/>
                    </Route>
                </Routes>
            </Wrapper>
        </Main>
    </BrowserRouter>
   </Container>
 </ThemeProvider>
    </>
  )
}

export default App
