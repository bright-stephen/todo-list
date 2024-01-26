import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask({modal, toggle, updateTask, taskObj}) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName.toUpperCase();
        tempObj['Description'] = description;
        updateTask(tempObj);
        
    }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, []);


  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
            <form>
                <div className='form-group'>
                    <label>Update Task</label>
                    <input type='text' className='form-control' value={taskName.toUpperCase()} onChange={handleChange} name='taskName'/>
                </div>
                <div className='form-group'>
                    <label className='mt-3'>Update Task Description</label>
                    <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'></textarea>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
    </Modal>
  )
}

export default EditTask