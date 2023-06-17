import React from "react"
import Wrapper from '../wrappers/Skills'
import { Container, Row } from "react-bootstrap"
import Skill from "./Skill"

// imported data
import {skills} from '../data/skillList.js'
import { frameworks } from "../data/frameworks"
import { others } from "../data/others"

const Skills = () => {
  
  console.log(skills)
  return (
      <Wrapper>
        
          <div>
          <h3>&lt;Languages /&gt;</h3>
              <Container>
                <Row className="row">
                  { skills.map((skill, key)=>{
                    const {skillName, url, alt} = skill
                    return (
                      <Skill key={key}
                              name={skill.skillName}
                              url={skill.url}
                              alt={skill.alt}
                              />
                    )
                    })
                  }
                </Row>
              </Container>
            </div>
            <div>
              <h3>&lt;Frameworks /&gt;</h3>
              <Container>
                <Row className="row">
                  {
                    frameworks.map((framework, key)=>{
                      const {name, url, alt} = framework
                      return (
                        <Skill key={key}
                              name={framework.name}
                              url={framework.url}
                              alt={framework.alt}
                              />
                      )
                    })
                  }
                </Row>
              </Container>
            </div>
            
            <div>
                <h3>&lt;Others /&gt;</h3>
              <Container>
                <Row className="row">
                  {
                    others.map((other, key)=>{
                      const {name, url, alt} = other
                      return (
                        <Skill key={key}
                              name={other.name}
                              url={other.url}
                              alt={other.alt}
                              />
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