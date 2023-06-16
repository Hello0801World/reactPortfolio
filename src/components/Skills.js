import React from "react"
import imgLink from '../images/icons8-html-96.png'
import Wrapper from '../wrappers/Skills'
import skills from '../data/skillList.js'


const Skills = ({key, skillName, url}) => {
  console.log('in Skills', url)
  return (
    <>
      <Wrapper>
      <img src='../../images/icons8-javascript-96.png' alt='java'/>
      <div className="row">
          <div className="card col-lg-2">
            <img className="card-img-top" src={url} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{skillName}</p>
            </div>
          </div>
      </div>
        
      </Wrapper>
    </>
    
  )
}
export default Skills