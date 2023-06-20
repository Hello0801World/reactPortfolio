import React from "react"
import Wrapper from '../wrappers/MainPage'
import devloperImg from '../images/顔写真 copy.JPG'
import devImg from '../images/folks-man-programmer-writing-code.png'
import githubImg from '../images/icons8-github-240.png'
import linkedinImg from '../images/icons8-linkedin-240.png'


const MainPage = () => {
  return (
    <>
    <Wrapper>
    <div className="container-fluid">
      <div className="row main-page-row">
          <div className="intro-div col-xl-7 col-lg-12 col-md-9">
            <h1>Hi, I'm <span className="hero-span">Shun Odaki</span></h1>
            <h2>I'm a Software Engineer that welcomes challenges and architects solutions.</h2>
          </div>
          <div className="col-xl-5 col-lg-12 col-md-4 devImg align-self-center">
            {/* <div className="row"> */}
              <img src={devloperImg} alt="Developer image" className="imageMyself"/>
            {/* </div> */}
            {/* <div className="row">
              <div className="col-6 icon githubIcon">
                <a href=""><img src={githubImg} width={'75px'}></img></a>
              </div>
              <div className="col-6 icon linkedinIcon">
                <a href=""><img src={linkedinImg} width={'75px'}></img></a>
              </div>
            </div> */}
          </div>
        </div>
    </div>
      
      </Wrapper>
    </>
  )
}
export default MainPage