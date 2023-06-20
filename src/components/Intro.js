import React from 'react'
import DeveloperImg from '../images/顔写真 copy.JPG'
import githubImg from '../images/icons8-github-240.png'
import linkedinImg from '../images/icons8-linkedin-240.png'
import Wrapper from '../wrappers/Intro'

const Intro = () => {
  return (
    <>
    <Wrapper>
      <div className='container intro-container'>
      <div className='row'>
        <div className='intro-div col-lg-8 col-md-8'>
          <h1>Hi, I'm <span className="hero-span">Shun Odaki</span></h1>
            <h2>I'm a Software Engineer that welcomes challenges and architects solutions.</h2>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <img src={DeveloperImg} alt="" />
          <div className='row icons-div'>
            <a href=""><img src={githubImg} alt=""></img></a>
            <a href=""><img src={linkedinImg} alt=""></img></a>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
    
    </>
    
  )
}
export default Intro