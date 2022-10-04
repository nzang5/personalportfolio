import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import js from "../images/js.png";
import reactjs from "../images/reactjs.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/node.png";
import mongo from "../images/mongodb.png";





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
                    
                    <h2>Technology Stack</h2> 
                        <p>Below is a list of some of the technologies (but not limited to) I've used learned <br/>
                        in my tech journey so far. Please find more details on my resume.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            
                            <div className='item2'>
                                <img src={reactjs} alt='ReactJS logo img'/>
                                <h5>React JS</h5>
                            </div>
                            <div className='item1'>
                                <img src={js} alt='Javascript logo img'/>
                                <h5>Javascript ES6</h5>
                            </div>
                            <div className='item4'>
                                <img src={node} alt='NodeJS logo img'/>
                                <h5>Node JS</h5>
                            </div>
                            <div className='item3'>
                                <img src={html} alt='HTML logo img'/>
                                <h5>HTML 5</h5>
                            </div>
                            
                            <div className='item5'>
                                <img src={mongo} alt='MongoDB logo img'/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className='item6'>
                                <img src={css} alt='CSS logo img'/>
                                <h5>CSS 3</h5>
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