import React from "react"
import { Col } from "react-bootstrap"

const Skill = ({name, url, alt}) => {
  return (
      <Col xs='4' sm='4' md='3' lg='2'>
        <img className="card-img-top" src={url} alt={alt} />
        <div className="card-body">
          <p className="card-text">{name}</p>
        </div>
      </Col>
  )
}
export default Skill