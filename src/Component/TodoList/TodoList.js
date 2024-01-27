import React, { useEffect } from "react";
import './TodoList.css';
import { useState } from "react";
import CreateTask from "../../Modal/CreateTask";
import Card from "../Card";
import IMG from "../../assets/todo-image.png";

function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem('taskList');
        if(arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal)
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    }


  return (
    <>
        <div className="header text-center">
            <img className="image" src={IMG} alt="..."></img>
            <h3>Create, Edit & Delete Notes</h3>
            <button className="btn btn-primary mt-2" onClick={()=>setModal(true)}>Create Notes</button>
        </div>
        <div className="task-container">
            {taskList && taskList.map((obj, index) => 
                <Card className="card" taskObj = {obj} index = {index} deleteTask={deleteTask} updateListArray={updateListArray}/>
            )}
        </div>
        <div className="footer text-center">
            <h6 className="text-white">design by xbot-tech</h6>
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
  )
}

export default TodoList