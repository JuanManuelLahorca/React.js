import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum.js';



const TaskForm = ({ add }) => {

    const nameRef = useRef (" ");
    const descriptionRef = useRef (" ");
    const levelRef = useRef (LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task (
            nameRef.current.value, //current.value trea el valor del input
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-Flex justify-content-conter aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-comtrol-lg' required autoFocus placeholder='nombre de tarea' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-comtrol-lg' required placeholder='descripcion de tarea'/>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgente</option>
                    <option value={LEVELS.BLOCKING}>Bloqueante</option>
                </select>
            </div>
            <button type='submit' className='btn ctn-succes btn-lg ms-3'>Add</button>
        </form>
    );
}

TaskForm.propTypes = {
    add : PropTypes.func.isRequired,
}
export default TaskForm;
