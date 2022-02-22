import React from 'react';
import styles from './listBlock.module.css'
import {AiFillTag} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'

const ListBlock = ({tasks, setTasks, status}) => {

    const {list, item, itemLeft, itemRight, priority, priorityCircle, date, dateIcon ,action, actionDelete, title, titleTitle} = styles;

    const successHandler = (id) => {
        setTasks(tasks.map(( el ) => {
            if (el.id === id) {
                return {...el, success: !el.success, pending: !el.pending}
            } else {
                return el
            }
        }))
    };

    const delTask = (id) => {
        setTasks(tasks.filter((elem) => {
            return id !== elem.id
        }))
    };

    return (
        <>
            <ul className={list}>

                {tasks.filter((element) => {
                    if (status === 'Total'){
                        return element
                    } else if(status === 'Success') {
                        return element.success
                    } else if (status === 'Pending') {
                        return element.pending
                    }
                }).map((task) =>
                    <li style={{opacity: task.success ? '50%' : '100%'}} className={item} key={task.id}>
                        <div className={itemLeft}>
                            <p style={{textDecoration: task.success ? 'red line-through' : 'none'}} className={titleTitle} >{task.title}</p>
                        </div>

                        <div className={itemRight}>
                            <div className={priority}>
                                <div className={priorityCircle} style={{color: 'aqua'}}/>
                                <span className={title}>{task.priority}</span>
                            </div>

                            <div className={date}>
                                <div className={dateIcon}>
                                    <AiFillTag/>
                                </div>
                                <span className={title}>{task.date}</span>
                            </div>

                            <div className={action}>
                                <input type="checkbox" checked={task.success} onChange={() => successHandler(task.id)} />
                                <div onClick={() => delTask(task.id)} className={actionDelete}>
                                    <MdDelete/>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
};

export default ListBlock;