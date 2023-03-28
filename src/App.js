import React, { useState } from 'react'
import axios from 'axios';

import styled from 'styled-components';

import MovieComponent from './components/MovieComponent';
import MovieInfoComponent from './components/MovieInfoComponent';

export const Api_Key= "18be1790";



const MovieName =styled.div`
display:flex`;
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

const MovieListContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  padding:30px;
  justify-content:space-evenly;
  gap:24px
`

const App = () => {
    const[searchQuery,updateSearchQuery] =useState();
    const[timeoutId,updateTimeoutId] =useState();
    const[movieList,updateMovieList] =useState();
    const[selectedMovie,onSelectedMovie] =useState();

    const fetchData =async (searchString)=>{
      const response =await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${Api_Key}`);
      console.log(response.data.Search);
      updateMovieList(response.data.Search)
    }
    
    const onTextChange = (event) =>{
      clearTimeout(timeoutId);
      updateSearchQuery(event.target.value);
      const timeout =setTimeout(()=> fetchData(event.target.value),500);
      updateTimeoutId(timeout);
    }
  return (
   <Container>

    <Header >
  
      <MovieName >
        <MovieIcon  src="/icon.png" /> Binge Movies
      </MovieName>
      <SearchBar>
        <SearchIcon src="/search-icon.svg" />
        <SearchInput onChange={onTextChange} value={searchQuery} placeholder='Search Movies' />
      </SearchBar>
  
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} /> }
      <MovieListContainer>
        {movieList?.length?
        movieList.map((movie, index)=><MovieComponent key={index} movie={movie} onSelectedMovie ={onSelectedMovie} />)
        : "No Movie Found"}
        
        
      </MovieListContainer>  
   </Container>
    
  )
}

export default App
