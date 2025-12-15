import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Particles } from "@tsparticles/react";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particles />
      <Container>
    <iframe
      id="JotFormIFrame-253479125847064"
      title="Contact Me"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/253479125847064"
      frameborder="0"
      style={{minWidth:"100%", maxWidth:"100%", height:"1000px", border:"none"}}
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-253479125847064']", "https://form.jotform.com/")</script>
    
      </Container>
    </Container>
  );
}

export default Projects;
