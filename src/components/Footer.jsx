import {Container, Row, Col} from 'react-bootstrap';
import { FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
    return(
        <div style={{background:"#ddd"}} className='py-5'>
            <Container>
                <Row className='mb-5'>
                    <Col md={6}>
                        <ul className='d-flex'>
                            <li><a href='#1'>Privacy</a></li>
                            <li className='px-3'>/</li>
                            <li><a href='#1'>Team</a></li>
                            <li className='px-3'>/</li>
                            <li><a href='#1'>SiteMap</a></li>
                        </ul>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center justify-content-md-end'>
                        <ul className='d-flex gap-3'>
                            <li><FaGithub/></li>
                            <li><FaFacebook/></li>
                            <li><FaGithub/></li>
                            <li><FaFacebook/></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-md-start px-3'>
                        <p className='small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, animi.</p>
                        <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias dolorum sed eaque, asperiores hic debitis voluptatibus velit minima praesentium!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;