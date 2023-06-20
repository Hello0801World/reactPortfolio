import styled from "styled-components";
import backGroundImg from '../images/pexels-henry-&-co-1939485.jpg'

const Wrapper =styled.div`
  background-image: url(${backGroundImg});

  h1, h2 {
    margin: 2rem;
    color: #000;
    text-shadow: 3px 2px #fff;
    font-weight:bold;

  }

   .hero-span {
    color: #B17CEA;
    white-space: nowrap;
  }

  .intro-div {
    display: inline-block;
    margin: auto;
  }

  .icons-div {
    display: block;
    flex-flow: row;
    text-align: center;
    justify-content: center;
  }

  a img {
    width: 50px;
    height: auto;
  }

  .intro-container {
    margin: 0;
    min-height:400px;
    height: auto;
    
  }
`

export default Wrapper