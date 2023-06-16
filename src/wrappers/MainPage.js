import styled from "styled-components";
import donutImg from '../images/DonutBackground.jpg'

const Wrapper = styled.div`
  .main-page-row {
    margin:0;
    background-color: whitesmoke;
    min-height:400px;
    height: auto;
  }

  .intro-div {
    background-image: url(donutImg);
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

  h1 {
    font-size: clamp(50px, 15vw, 100px);
  }

`

export default Wrapper