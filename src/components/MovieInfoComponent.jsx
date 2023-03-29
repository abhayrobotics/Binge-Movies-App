import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Api_Key } from '../App';
const Container =styled.div`
display:flex;
flex-direction:row;
padding:20px 30px;
justify-content:center;
border-bottom:1px solid lightgray;
`
const CoverImage =styled.img`
height:262px;
// width:auto;
object-fit:center;
`
const InfoColumn =styled.div`
display:flex;
flex-direction:column;
margin:20px
`
const MovieName =styled.span`
font-size:18px;
font-weight:400;
color:#000;
margin:15px 0;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
`
const OtherInfo =styled.span`
font-size:16px;
font-weight:400;
color:#000;
margin:5px 0;
overflow:hidden;
text-overflow:ellipsis;
// white-space:nowrap;
& span{
    opacity:0.7;
}
`
const MovieInfoComponent = (props) => {
    const [movieInfo,setMovieInfo] =useState();
    const {selectedMovie}= props;
    useEffect(()=>{axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${Api_Key}`).then((response)=>setMovieInfo(response.data));
},[selectedMovie]);

  return (
  <Container>
    <CoverImage src={movieInfo?.Poster}
/>
    <InfoColumn>
        <MovieName>Movie : <span>{movieInfo?.Title}</span></MovieName>
        <OtherInfo>Release : <span>{movieInfo?.Year}</span></OtherInfo>
        <OtherInfo>Released : <span>{movieInfo?.Released}</span></OtherInfo>
        <OtherInfo>Director : <span>{movieInfo?.Director}</span></OtherInfo>
        <OtherInfo>Actors : <span>{movieInfo?.Actors}</span></OtherInfo>
        <OtherInfo>Genre : <span>{movieInfo?.Genre}</span></OtherInfo>
        <OtherInfo>Language:<span>{movieInfo?.Language}</span></OtherInfo>
        <OtherInfo>Imdb : <span>{movieInfo?.imdbRating}</span></OtherInfo>
        {/* <OtherInfo>Plot : {movieInfo?.Plot}</OtherInfo> */}
        
    </InfoColumn>

  </Container>
  )
}

export default MovieInfoComponent