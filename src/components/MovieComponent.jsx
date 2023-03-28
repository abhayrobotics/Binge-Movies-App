import React from 'react'
import styled from "styled-components"
import { Api_Key } from '../App'

const MovieContainer =styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    width: 220px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor:pointer;
`
const CoverImage =styled.img`
height:262px;
object-fit:center;
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

const InfoCol = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between`

const MovieInfo = styled.div`
display:flex;
font-size:16px;
`
const MovieComponent = (props) => {
    const {Title, Year ,Type, imdbID , Poster} =props.movie;
  return (
    <MovieContainer onClick={()=>props.onSelectedMovie(imdbID)} >
        <CoverImage src= {Poster} />
        <MovieName>{Title}</MovieName>
        <InfoCol>
            
            <MovieInfo>Release: {Year}</MovieInfo>
            <MovieInfo>Type: {Type}</MovieInfo>
            
        </InfoCol>
    </MovieContainer>
  )
}

export default MovieComponent