import React, {useState} from 'react'
import EditTask from '../Modal/EditTask';

function Card({taskObj, index, deleteTask, updateListArray}) {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5093E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#4D8687",
      secondaryColor: "#F2FAF2"
    },
    {
      primaryColor: "#F456F7",
      secondaryColor: "#F3F0FD"
    }
  ]

  const toggle = () => {
    setModal(!modal);
  }

  const updateTask = (obj) => {
    updateListArray(obj, index);
  }

  const handleDelete = () => {
    deleteTask(index);
  }

  return (
    <div className='card-wrapper'>
        <div className='task-holder'>
            <div className='card-top' style={{"background-color": colors[index%5].primaryColor}}></div>
            <span className='card-header h5'  style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px", "fontFamily": "monospace"}}>{taskObj.Name}</span>
            <p className='ms-2' style={{"height": "100%"}}>{taskObj.Description}</p>
            <div className='task-icons p-3'>
                <i class="bi bi-pencil-square h3" style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick={() => setModal(true)}></i>
                <i class="bi bi-trash h3" style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick={handleDelete}></i>
            </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
    </div>
  )
}

export default Card