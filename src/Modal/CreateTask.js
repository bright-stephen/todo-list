import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal, toggle, save}) {
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

    const handleSave = () => {
        let taskObj = {}
        taskObj['Name'] = taskName.toUpperCase();
        taskObj['Description'] = description;
        save(taskObj);
        setTaskName("");
        setDescription("");
    }


  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
            <form>
                <div className='form-group'>
                    <label>Note Title</label>
                    <input type='text' className='form-control' value={taskName.toUpperCase()} onChange={handleChange} name='taskName'/>
                </div>
                <div className='form-group'>
                    <label className='mt-3'>Note Description</label>
                    <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'></textarea>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
    </Modal>
  )
}

export default CreateTask