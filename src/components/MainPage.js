import React from "react"
import Wrapper from '../wrappers/MainPage'
import devloperImg from '../images/folks-man-programmer-writing-code.png'

const MainPage = () => {
  return (
    <>
    <Wrapper>
      <div className="row main-page-row">
          <div className="intro-div col-lg-7">
          
            <h1>Hi, I'm <span className="hero-span">Shun Odaki</span></h1>
            <h2>I like building cool apps</h2>
          </div>
          <div className="col-lg-5 devImg">
            <img src={devloperImg} alt="Developer image"/>
          </div>
      </div>
          <p>
            
          </p>
        
      </Wrapper>
    </>
  )
}
export default MainPage