import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import design from "../images/rwd-icon.png";
import uxui from "../images/ui-ux-icon.png";
import webdev from "../images/dev-icon.png";
import branding from "../images/star-icon.png";





function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>What I do</h2>
                        <p>Lorem ipsum</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item1'>
                                <img src={design} alt='image1'/>
                                <h5>Responsive Web Design</h5>
                            </div>
                            <div className='item2'>
                                <img src={uxui} alt='image2'/>
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className='item3'>
                                <img src={webdev} alt='image3'/>
                                <h5>Development</h5>
                            </div>
                            {/* <div className='item'>
                                <img src={projImg1} alt='image4'/>
                                <h5>Web Development</h5>
                            </div> */}
                            <div className='item4'>
                                <img src={branding} alt='image5'/>
                                <h5>Branding</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>

        </section>
    )
}
export default Skills;