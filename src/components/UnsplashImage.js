import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const UnsplashImage = ({url, keys}) => {
  return (
        <Img src={url} alt={keys}/>
  )
}

export default UnsplashImage