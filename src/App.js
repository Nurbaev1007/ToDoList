import React, {useState} from 'react'
import StatusBlock from "./components/StatusBlock/StatusBlock";
import FormBlock from "./components/FormBlock/FormBlock";
import ListBlock from "./components/ListBlock/ListBlock";
import {MdDelete} from 'react-icons/md'
import MyVerticallyCenteredModal from "./components/Popup/Popup";

import { v4 as uuid4 } from 'uuid'
import './Fonts/Montserrat/stylesheet.css'
import './style.css'


function App() {

    const [tasks, setTasks] = useState([
        {
            id : uuid4,
            title : 'Сходить в кино',
            date : 'jul 10',
            priority : 'Medium',
            success : false ,
            pending : true,
            Tags : ['home'],
            description : ''
        }
    ]);

    const [change, setChange] = useState('');
    const [status, setStatus] = useState('Total');//
    const [modalShow, setModalShow] = useState(false); // статус открытия Popup
    const [modalShowObj, setModalShowObj] = useState({ // объект который в Popup
        success: null,
        pending: null,
        title: '',
        isOpen: false,
        description: '',
        priority: '',
        tags: [],
        id: null
    });
    const [check, setCheck] = useState(''); // приоритет в Popup




  return (
    <div className="App">
       <div className="container">
           <div className="App__content">
               <h1 className="App__title">TODO-LIST</h1>

               <StatusBlock tasks={tasks}  setStatus={setStatus}/>
               <FormBlock tasks={tasks} setTasks={setTasks} change={change} setChange={setChange}/>

               {
                   tasks.length === 0 && status === 'Total'  ? <p>List is empty</p>
                       : tasks.filter(el => el.pending).length === 0 && status === 'Pending' ?
                       <p>Pending list is empty</p>
                       : tasks.filter(el => el.success).length === 0 && status === 'Success' ?
                           <p>Success list is empty</p> :
                           <>
                               <ListBlock tasks={tasks} setTasks={setTasks} status={status} setModalShow={setModalShow} modalShow={modalShow} setModalShowObj={setModalShowObj} setCheck={setCheck}/>

                               <p className="App__clear" onClick={() => setTasks([])}>Clear All  <MdDelete/></p>
                           </>

                       // <h2>List is Empty</h2>
               }
           </div>
       </div>
        <MyVerticallyCenteredModal
            tasks={tasks}
            setTasks={setTasks}
            setCheck={setCheck}
            check={check}
            obj={modalShowObj}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </div>
  );
}

export default App;
