import React, { useState } from 'react';
import Footer from '../footer/Footer'
import { Form, Row } from 'react-bootstrap';
import CONSTANTS from '../../services/constants';
import './Home.css'
import ListCount from '../listCount/ListCount';

const Home = (props) => {


    const [style, setstyle] = useState(CONSTANTS.WelcomeStyles)

    console.log(JSON.stringify(props.match.params))

    return (
        <div>

            <Form className="WelcomeBanner">
                <div style={style.Banner}>
                    <Row>
                        <div class="col-4"> </div>
                        <div class="col-8">
                            <br /><br /><br /><br />
                        </div>
                    </Row>
                    <Row>
                        <div style={style.Txt1}>Welcome To Do App <br /> <h2> {props.count} </h2>	&#128515;</div>
                        <div style={style.Txt2}><br /> Let's Plan your day</div>
                        <br /><br /><br /><br />
                        <br /><br /><br /><br />
                        <br /><br /><br /><br />
                    </Row>
                </div>
            </Form>

            <Footer />

        </div>


    );
}

export default Home;