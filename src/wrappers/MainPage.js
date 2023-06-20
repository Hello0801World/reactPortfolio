import styled from "styled-components";
import backGroundImg from '../images/pexels-henry-&-co-1939485.jpg'

const Wrapper = styled.div`
display: flex;
  .main-page-row {
    margin: 0;
    background-color: whitesmoke;
    min-height:400px;
    height: auto;
    background-image: url(${backGroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1, h2{
    color: #000;
    text-shadow: 3px 2px #fff;
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
    min-width: 180px;
    max-width: 450px;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    padding: 3rem 3rem;
    
  }

  img {
    
    height: auto;
    height: grid-auto-flow;
    
  }

  .imageMyself {
    border-radius: 50%;
  }

  .icon {
    display: inline-block;
    flex-direction: row;
  }

  .githubIcon, .linkedinIcon {
    padding-top: 2rem;
    text-align: center;
    justify-content: center;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: clamp(50px, 15vw, 100px);
  }
`

export default Wrapper