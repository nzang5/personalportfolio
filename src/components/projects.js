import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./projectcard";
import projImg1 from "../images/dummy.png";
import TrackVisibility from 'react-on-screen';


function Projects(){

    const projects = [
        {
          title: "Ready2work",
          description: "Find work in Germany",
          imgUrl: projImg1,
        },
        {
          title: "Vegginers",
          description: "Find your favorite vegan recipe!",
          imgUrl: projImg1,
        },
        {
          title: "Not available",
          description: "Not available",
          imgUrl: projImg1,
        },
        {
          title: "Not available",
          description: "Not available",
          imgUrl: projImg1,
        },
        {
          title: "Not available",
          description: "Not available",
          imgUrl: projImg1,
        },
        {
          title: "Not available",
          description: "Not available",
          imgUrl: projImg1,
        },
       
      ];
    return(
        <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Over the past few months, I've completed an immersive full-time Web Development bootcamp at <a href="https://www.ironhack.com/en/web-development" style={{color:"#64ffda"}}>IRONHACK</a>. We learned how to build apps with HTML, CSS, JavaScript, and React. Below are small projects that were design and built within a week each to showcase the technologies we've learned.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                 )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    )
}

export default Projects;