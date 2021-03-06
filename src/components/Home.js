import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import Heading from "./Heading";
import UnsplashImage from "./UnsplashImage";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import {Link} from "react-router-dom";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = (count = 8) => {
    const rootApi = "https://api.unsplash.com";
    const accesskey = process.env.REACT_APP_API_KEY;

    axios
      .get(`${rootApi}/photos/random?client_id=${accesskey}&count=${count}`)
      .then((response) => setImages([...images, ...response.data]))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Heading />
      <GlobalStyles />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map((image) => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default Home;
