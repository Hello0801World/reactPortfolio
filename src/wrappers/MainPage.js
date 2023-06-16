import styled from "styled-components";
import donutImg from '../images/annie-spratt-EACvtuV2k2E-unsplash.jpg'

const Wrapper = styled.div`
  .main-page-row {
    margin: 0;
    background-color: whitesmoke;
    min-height:400px;
    height: auto;
    background-image: url(${donutImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1, h2{
    color: #fff;
    text-shadow: 3px 2px #000;
  }

  .intro-div {
    height: 250px;
    display: flex;
    flex-flow: column;
    margin: auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    padding-left: 24px;
  }
  .hero-span {
    color: #B17CEA;
    white-space: nowrap;
  }

  .main-page-row .devImg {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 3rem 3rem;
    
  }

  img {
    min-width: 150px;
    max-width: 350px;
    height: auto;
    height: grid-auto-flow;
    border: 2px solid #B17CEA;
    border-radius: 60%;
  }

  h1 {
    font-size: clamp(50px, 15vw, 100px);
  }

`

export default Wrapper