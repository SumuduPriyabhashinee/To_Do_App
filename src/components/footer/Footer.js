import React, { useState, useEffect } from "react";
import './Footer.css';
import logo from "../../assests/logo.png"
import { Navbar, Container} from "react-bootstrap";

const Footer = () => {
    const [fullYear, setFullYear] = useState();

    useEffect(() => {
        setFullYear(new Date().getFullYear());
    }, [fullYear]);

    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <div class="col-4">
                    <img className="footerlogo" src={logo} alt="" />
                </div>
                <div class="col-8">
                    <div className="text">

                        &copy; {new Date().getFullYear()} Copyright: TodoApp

                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Footer;