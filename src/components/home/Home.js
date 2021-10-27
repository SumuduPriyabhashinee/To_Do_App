import React, { useState,useEffect } from 'react';
import Footer from '../footer/Footer'
import { Form, Row } from 'react-bootstrap';
import CONSTANTS from '../../services/constants';
import { ToDoAppService } from '../../services/todoapp.service';
import './Home.css'
import ListCount from '../listCount/ListCount';

const Home = () => {

    const [style, setstyle] = useState(CONSTANTS.WelcomeStyles);
    const [ToDoListstate, setToDoListState] = useState();
    const [taskcountState,taskcountSetState]=useState();

    useEffect(() => {
        ToDoAppService.getAlltasks();
        ToDoAppService
            .getToDoList()
            .subscribe(tasks => {
                console.log(tasks);
                setToDoListState(tasks);
                taskcountSetState(tasks.length)
                console.log(tasks.length)
            });
    }, [])
    
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
                        <div style={style.Txt1}>Welcome To Do App <br />&#128515;</div>
                        <button type="button" class="btn btn-warning btn-xl" > {taskcountState?"You Have "+taskcountState+" tasks on your list"
                        : "You have no any task on your list"}</button>
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