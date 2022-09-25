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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button onClick={() => console.log('connect')}> 
                            Learn more!<ArrowDownCircle size={25}/></button>
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