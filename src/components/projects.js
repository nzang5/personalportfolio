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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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