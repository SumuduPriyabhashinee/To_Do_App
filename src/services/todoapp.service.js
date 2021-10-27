import axios from 'axios';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'
import CONSTANTS from './constants';

const gettingToDoList = new Subject();


export const ToDoAppService = {

    getAlltasks : () => {
        axios.get(CONSTANTS.API + '/todo')
            .then(response => {
                gettingToDoList.next(response.data)
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err,
                    text: 'Something went wrong!',
                })
            });

    },

    addTask :(task) => {
        axios.post(CONSTANTS.API + '/todo', task)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err,
                    text: 'Something went wrong!',
                })
            });

    },

    getTaskById : (id) => {
        axios.get(CONSTANTS.API + '/todo/'+id)
            .then(response => {
                console.log(response.data.data);
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err,
                    text: 'Something went wrong!',
                })
            });

    },

    

    getToDoList: () => gettingToDoList.asObservable()

}
