import styled from "styled-components";
import backGroundImg from '../images/pexels-henry-&-co-1939485.jpg'

const Wrapper =styled.div`
  background-image: url(${backGroundImg});

    .intro-container {
    margin: 0;
    min-height:400px;
    height: auto;
    padding: 1rem;
  }

  h1, h2 {
    margin: 2rem;
    color: #000;
    text-shadow: 3px 2px #fff;
    
  }

  h1 {
    font-size: clamp(50px, 75px, 5vw);
    font-weight: bold;
  }

  h2 {
    line-height: 120%;
  }

   .hero-span {
    color: #B17CEA;
    white-space: nowrap;
  }

  .intro-div {
    display: inline-block;
    margin: auto;
    
    padding: 24px 2px;
    text-align: center;
  }

  .icons-div {
    display: block;
    flex-flow: row;
    align-items: center;
    justify-content: center;
  }

  a img {
    width: 50px;
    height: auto;
  }



  .intro-img {
    margin: 2rem 1rem;
    min-width: 180px;
    max-width: 75%;
    border-radius: 50%;
  }

  .image-icon-div {
    text-align: center;
  }

`

export default Wrapper