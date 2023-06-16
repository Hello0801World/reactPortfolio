import React from "react"
import imgLink from '../images/icons8-html-96.png'
import Wrapper from '../wrappers/Skills'
import {skills} from '../data/skillList.js'
import htmlLink from '../images/icons8-html-96.png'
import { Container, Row, Col } from "react-bootstrap"


const Skills = () => {
  
  console.log(skills)
  return (
      <Wrapper>
        <h2>&lt;Languages /&gt;</h2>
          <div>
            <Container>
              <Row className="row">
                { skills.map((skill)=>{
                  const {skillName, url, alt} = skill
                  return (
                    <Col xs='12' sm='6' md='3' lg='2'>
                      <img className="card-img-top" src={url} alt={alt} />
                      <div className="card-body">
                        <p className="card-text">{skillName}</p>
                      </div>
                    </Col>
                  )
                  })
                }
              </Row>
            </Container>
          </div>
      </Wrapper>
  )
}
export default Skills