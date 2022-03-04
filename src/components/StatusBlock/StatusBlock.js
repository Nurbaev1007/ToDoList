import React from 'react';
import {Button} from "react-bootstrap";
import styles from './statusBlock.module.css'

const StatusBlock = ({tasks, setStatus}) => {



    return (
        <div className={styles.row}>
            <Button className={styles.btn} variant="primary" onClick={() => setStatus('Total')}>Total : {tasks.length} </Button>
            <Button className={styles.btn} variant="success" onClick={() => setStatus('Success')}>Success : {tasks.filter((item) => item.success).length} </Button>
            <Button className={styles.btn} variant="warning" onClick={() => setStatus('Pending')}>Pending : {tasks.filter((item) => item.pending).length} </Button>
        </div>
    );
};

export default StatusBlock;