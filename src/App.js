import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
margin:0;
font-family: 'Josefin Sans', sans-serif;
`;
const Header = styled.div`
  display:flex;
  flex-direction:row;
  background-color: black;
  justify-content: space-between;
  color:white;
  padding:10px;
  margin:0px;
  font-size:25px;
  // font-weight:bold;
  box-shadow:0  3px 6px 0 #555;
  
  `
  const MovieIcon = styled.img`
  width: 25px;
  margin-right:5px
  `
const SearchBar =styled.div`
  display:flex;
  justify-center:center;
  background-color:white;
  // max-width:40vw;
  width:40vw;
  margin: 0 10px;
  border-radius:5px
`
const SearchIcon = styled.img`
  width 20px;
  padding: 0 10px
`;

const SearchInput =styled.input`
padding 0 5px;
outline:none;
border: none;
font-size:17px;
font-weight:500;
border-radius:5px
`
const App = () => {
  return (
   <Container>

    <Header >
      <movieName >
        <MovieIcon  src="/icon.png" /> Binge Movies
      </movieName>
      <SearchBar>
        <SearchIcon src="/search-icon.svg" />
        <SearchInput />
      </SearchBar>
      
      </Header>
    
   </Container>
    
  )
}

export default App
