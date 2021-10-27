import React, { useState } from 'react';
import Footer from '../footer/Footer'
import { Form, Row } from 'react-bootstrap';
import CONSTANTS from '../../services/constants';
import './Home.css'

const Home = () => {

    const [style, setstyle] = useState(CONSTANTS.WelcomeStyles)


    const clickRegister = (event) => {
        window.location.href = `/users/register`;
    }

    const clickNotices = (event) => {
        window.location.href = `/1`;
    }

    const clickNews = (event) => {
        window.location.href = `/news`;
    }

    return (
        <div>

            <Form className="WelcomeBanner">
                <div style={style.Banner}>
                    <Row>
                        <div class="col-4"> </div>
                        <div class="col-8">
                            <br />
                            <br /><br />
                            
                            
                            
                            <br />
                        </div>
                    </Row>
                    <Row>

                        <div style={style.Txt1}>Welcome To Do App <br /> 	&#128515;</div>
                        <div style={style.Txt2}><br /> Let's Plan your day</div>
                        <br /><br />
                            
                            <br /><br />
                            
                            <br /><br /><br /><br />
                            
                            <br /><br />
                            
                            <br /><br />
                    </Row>
                </div>
            </Form>

            <Footer />

        </div>


    );
}

export default Home;