import React from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col, NavLink
} from 'reactstrap';
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";
import headshot from "../../Pictures/sterlingduke.jpeg";
import resume from "../../Pictures/Sterling Resume 2019 (1).pdf"
import "./style.css";
import MediaQuery, { useMediaQuery } from 'react-responsive';

const Contact = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div>    
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Sterling Duke
                                </Col>
                                <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col>
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Software Engineer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:Sterlingcduke@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Sterlingcduke@gmail.com </NavLink>
                                    <NavLink href="https://www.linkedin.com/in/sterling-duke-0b47141b5/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Sterling Duke</NavLink>
                                    <NavLink href="https://github.com/Sterlingduke"><img className="logo" src={githubIcon} alt="Logo"/> : Sterlingduke</NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Sterling Duke
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Row>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Software Engineer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    <Button color="secondary" className="mb-3" href={resume} target="_blank">Resume</Button>
                                    <NavLink href="mailto:Sterlingcduke@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Sterling Duke</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/sterling-duke-0b47141b5/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Sterling Duke</NavLink>
                                    <NavLink href="https://github.com/Sterlingduke"><img className="logo" src={githubIcon} alt="Logo"/> : Sterlingduke</NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}

export default Contact;