import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

const ImageView = ({data}) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <Img loading = "lazy" src={data.urls.raw} alt={data.urls.description} />
    </a>
  )
}

export default ImageView;