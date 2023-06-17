import React from "react"
import { Container } from "react-bootstrap"

const Experience = () => {
  return (
    <div className="experience">
      <Container>
        <h2>Here's where I've worked at</h2>
        <div classNames="card">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h3 className="card-title">Diamond head Co., Sapporo, Hokkaido</h3>
            <p className="card-text">• Developed a data feed web application that allowed clients to create a structured, and updated list of product information to put an advertisement on e-commerce platforms</p>
            <p className="card-text">• Worked in Agile environment, and fixed bugs both on front-end and back-end</p>
            <p className="card-text">• Collaborated with 2 interns and senior developers to brainstorm and implement ideas</p>
            <a href="https://diamondhead.jp/" target="_blank" className="btn btn-primary">Company website</a>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Experience