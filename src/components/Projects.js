import React from "react"
import Wrapper from "../wrappers/Projects"
import { Button, Card, Container } from "react-bootstrap"

const Projects = () => {
  return (
    <>
    <Wrapper>
        <div className="project" id="projects">
          <Container className="container">
            <h2>Projects</h2>
            <div className="cardContent">
              <Card className="card">
                <Card.Body className="cardBody">
                  <Card.Title className="title">Personal Portfolio Website</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">June 2023</Card.Subtitle>
                  <Card.Text>
                    Personal portfolio website where I show my skill sets and past projects
                  </Card.Text>
                  <Card.Link href="https://github.com/Hello0801World/reactPortfolio" target="_blank">Github</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </Wrapper>
    </>
    
    

  )
}
export default Projects