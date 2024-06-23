import React from "react";
import { Col, Row } from "react-bootstrap";
import './techStack.css'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiNpm,
  DiBootstrap 
} from "react-icons/di";
import {
  SiTailwindcss ,
  SiCss3  
} from "react-icons/si";

function Techstack() {
  return (
    <Row className="techstack-row">
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiJavascript1 size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiNpm size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiNodejs size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiReact size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiMongodb size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiGit size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <SiTailwindcss size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <SiCss3 size={64} />
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons">
        <DiBootstrap size={64} />
      </Col>
    </Row>
  );
}

export default Techstack;
