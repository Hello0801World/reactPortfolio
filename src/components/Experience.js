import React from "react"
import { Container } from "react-bootstrap"
import Wrapper from "../wrappers/Experience"

const Experience = () => {
  return (
    <Wrapper>
      <div className="experience">
        <Container className="container">
          <h2>Here's where I've worked at</h2>
          <div classNames="card content">
            <div className="card-body">
              <h3 className="card-title">Diamond head Co. Sapporo, Hokkaido</h3>
              <h5>Software Engineer Internship (April 2022 - June 2022)</h5>
              {/* <p className="card-text">• Developed a data feed web application that allowed clients to create a structured, and updated list of product information to put an advertisement on e-commerce platforms</p>
              <p className="card-text">• Worked in Agile environment, and fixed bugs both on front-end and back-end</p>
              <p className="card-text">• Collaborated with 2 interns and senior developers to brainstorm and implement ideas</p> */}
              <ul>
                <li>Developed a data feed web application that allowed clients to create a structured, and updated list of product information to put an advertisement on e-commerce platforms</li>
                <li>Worked in Agile environment</li>
                <li>Collaborated with 2 interns and senior developers to brainstorm and implement ideas</li>
                <li>Used: Python, Django, HTML/CSS, Javascript, PostgreSQL, Git, Docker</li>
              </ul>
              <a href="https://diamondhead.jp/" target="_blank" className="btn btn-primary company-btn">Company website</a>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  )
}
export default Experience