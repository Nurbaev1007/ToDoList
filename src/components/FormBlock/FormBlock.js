import React from 'react';
import {InputGroup, FormControl, Button} from "react-bootstrap";
import {v4 as uuid4} from 'uuid'

const FormBlock = ({tasks, setTasks, change, setChange}) => {

    const toDate = (date) => {
        return new Intl.DateTimeFormat('en-En', {
            day:'2-digit',
            month:'short'
        }).format(new Date(date))
    };

    const addTask = () => {
        if (change.trim().length) {
            setTasks([...tasks, {
                id: uuid4(),
                title: change,
                date: toDate(new Date()),
                priority: 'None',
                success: false,
                pending: true,
                Tags: [],
                description: ''
            }]);
            setChange('')
        }
    };

    const addTask2 = (e) => {
        if (e.key === 'Enter' &&  change.trim().length){
            setTasks([...tasks, {
                id: uuid4(),
                title: change,
                date: toDate(new Date()),
                priority: 'None',
                success: false,
                pending: true,
                Tags: [],
                description: ''
            }]);
            setChange('')
        }
    };


    function handleChange(event) {
        setChange(event.target.value)
    }

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    onKeyPress={addTask2}
                    placeholder="Enter new To Do"
                    aria-label="Enter new To Do"
                    aria-describedby="basic-addon2"
                    value={change}
                    onChange={handleChange}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={() => addTask()}>
                    Add
                </Button>
            </InputGroup>
        </>
    );
};

export default FormBlock;