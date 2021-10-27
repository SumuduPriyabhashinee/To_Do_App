import React, { useEffect, useState } from 'react';
import {Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup} from 'react-bootstrap';
import "./ToDoList.css"
import {ToDoAppService} from '../../services/todoapp.service';
import axios from 'axios';
import Swal from 'sweetalert2';
import CONSTANTS from '../../services/constants';

const UserList = () => {
    
    const [ToDoListstate, setToDoListState] = useState();

    
    useEffect(() => {
        ToDoAppService.getAlltasks();
        ToDoAppService
        .getToDoList()
        .subscribe(tasks => {
          console.log(tasks);
          setToDoListState(tasks);
        });
    },[])
    
        const deleteTask = (task) => {
            let data = ToDoListstate.filter(i => i.id !== task.id)
            setToDoListState(data)
            if (task.id !== null) {
              Swal.fire({
                title:'Do you want to remove this task permanently?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, remove permenently!',
                cancelButtonText: 'No,Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
              axios
                .delete(CONSTANTS.API + `/todo/${task.id}`)
                .then((res) => {
                  console.log(res.data);
                })
                .catch(errtag => {
                 Swal.fire({
                   position: 'middle',
                   icon: 'error',
                   title: "Error when removing task",
                   text: errtag,
                   showConfirmButton: false,
                   timer: 1500
                 });
               })
              console.log(task.id)
              console.log(data)
              Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Task removed successfully',
                showConfirmButton: false,
                timer: 1500
              });
            //   window.location.reload();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                icon: 'success',
                title:'Cancelled',
                html:'You have canceled the deletion.',
                showConfirmButton: false,
                timer: 1500
              })
          }
          })
          }
          };

    let renderingToDoList;
    if (ToDoListstate) {
        renderingToDoList = ToDoListstate.map((task) => {
            return (
                <div className="Container" key={task.id}>
                    <h2>{task.title}</h2><hr /><br />
                    <Link to={`/${task.id}`} className="button">View More</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                variant="secondary" onClick={() => deleteTask(task)}>Delete</Button>
                </div>
            );
        });
    }


    return (
        <Container>
            {renderingToDoList}
        </Container>
    );
}

export default UserList;