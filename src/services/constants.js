import Bannerbg from '../assests/hello.jpg';
import Bannerbg1 from '../assests/todolist.jpg';
import Bannerbg2 from '../assests/addtask.jpg';

const CONSTANTS = {
  API: "https://60a21a08745cd70017576014.mockapi.io/api/v1",

  WelcomeStyles: {
    Banner: {
      backgroundImage: `url(${Bannerbg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      wordBreak: "normal",
    },
    Txt1: {
      fontFamily: "calibri",
      color: "#e7ffe7",
      textShadow: "3px 3px 20px  #000000,3px 3px 10px  #000000,3px 3px 30px  #7a7c08",
      fontWeight: "bold",
      fontSize: "80px",
    },
    Txt2: {
      fontFamily: "calibri",
      color: "#e7ffe7",
      textShadow: "3px 3px 20px  #000000,3px 3px 10px  #000000,3px 3px 30px  #7a7c08",
      fontWeight: "bold",
      fontSize: "60px",
    }
  },

  Todolistbackground: {
    backgroundImage: `url(${Bannerbg1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    wordBreak: "normal",
  },

  AddTaskbackground: {
    backgroundImage: `url(${Bannerbg2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    wordBreak: "normal",
  },
}

export default CONSTANTS;