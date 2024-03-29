import styled from "styled-components";

const Wrapper = styled.div`

padding-top: 2rem;
background: whitesmoke;
padding-bottom: 3rem;

 .skillsContainer{
  background-color: #fff;
  border-radius: 4px;
  max-width: 900px;
  padding: 1rem;
  margin: 2rem auto;
}

  h2 {
    margin-left: 2rem;
    font-weight: bold;
    font-size: 40px;
  }

  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 2.25rem;
    white-space: nowrap;
    text-shadow: 2px 2px #fff;
  }

 .card-body {
  text-align: center;
 }

 .card-text {
  text-align: center;
 }

 .row {
  justify-content: center;
  margin: 2rem 1rem;
 }

.Col {
  justify-content: center;
  max-width: 350px;
  /* width: 200px; */
  height: auto;
}

p {
  text-align: center;
}
` 

export default Wrapper