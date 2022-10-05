import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons"
import headshot from "../images/profile-pic.png"



function Banner(){
    

    return(
        <div>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline"> 
                            <h6>Hi, my name is</h6>
                            </span>
                            <h1> Nash Zangio</h1>
                            <p>I am front-end web developer with strong design skills and knowledge. Member of the great Ironhack community. My approach to every single project is to carefully plan, research and test the end result. Never missing a chance to learn something and get hold of new technologies. test</p>
                            <button>Learn more!<a href="#skills"><ArrowDownCircle size={25}/></a> 
                            </button>
                        </Col>
                        <Col xs={10} md={6} xl={5}>
                        <img src={headshot} alt="headshot"/>

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Banner;