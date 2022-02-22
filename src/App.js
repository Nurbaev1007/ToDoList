import React, {useState} from 'react'
import StatusBlock from "./components/StatusBlock/StatusBlock";
import FormBlock from "./components/FormBlock/FormBlock";
import ListBlock from "./components/ListBlock/ListBlock";
import {MdDelete} from 'react-icons/md'

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
    const [status, setStatus] = useState('Total');



  return (
    <div className="App">
       <div className="container">
           <div className="App__content">
               <h1 className="App__title">TODO-LIST</h1>

               <StatusBlock tasks={tasks}  setStatus={setStatus}/>
               <FormBlock tasks={tasks} setTasks={setTasks} change={change} setChange={setChange}/>

               {
                   tasks.length ? <>
                       <ListBlock tasks={tasks} setTasks={setTasks} status={status} />

                       <p className="App__clear" onClick={() => setTasks([])}>Clear All<MdDelete/></p>
                   </> : <h2>List is Empty</h2>
               }


           </div>
       </div>
    </div>
  );
}

export default App;
