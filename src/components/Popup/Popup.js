import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import {AiFillTag} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState('');
    const [isTitleChange, setIsTitleChange] = useState(false);

    let priority = ['High', 'Medium', 'Low', 'None'];

    const saveChangesHandler = (id) => {
        props.setTasks(props.tasks.map((item) => {
            if (id === item.id) {
                return {...item, priority: props.check, title: title.length ? title : item.title}
            }
            return item
        }));
        props.onHide();
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Task Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='popup__title-block'>
                    {isTitleChange ?
                        <input type="text" className='popup__title-input' defaultValue={props.obj.title} onChange={(e) => setTitle(e.target.value)}/>
                        : <>
                            <h4>{props.obj.title}</h4>
                            <span className='popup__title-btn' onClick={() => setIsTitleChange(true)}>
                        <FiEdit/>
                    </span>
                        </>
                    }

                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button style={{width: '40%'}} variant="outline-primary">!! Priority</Button>
                    <Button style={{width: '40%'}} variant="outline-primary">
                        <AiFillTag/>
                        Tags
                    </Button>
                </div>

                <div>

                    {
                        priority.map((item) => (
                            <Form.Check type='radio' id={`check-api-${item}`}
                                        style={{display: 'flex', alignItems: 'center', columnGap: '10px'}}>
                                <Form.Check.Input style={{borderColor: "blue"}} checked={item === props.check}
                                                  onChange={() => props.setCheck(item)} name='priority' type='radio'
                                                  isValid/>
                                <Form.Check.Label style={{display: 'flex', alignItems: 'center', color: 'blue'}}>
                                    <span style={{
                                        color: item === 'High' ? 'red' : item === 'Medium' ? 'Yellow' : item === 'Low' ? 'skyBlue' : 'black',
                                        width: '30px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'
                                    }}>
                                        {`${item === 'High' || item === 'None' ? '!!!' : item === 'Medium' ? '!!' : '!'}`}
                                    </span> {`${item} priority`}</Form.Check.Label>
                            </Form.Check>
                        ))
                    }

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-secondary' onClick={props.onHide}>Close</Button>
                <Button variant='outline-primary' onClick={() => saveChangesHandler(props.obj.id)}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal