import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class.js';
import  TaskComponent from '../pure/task';

//importamos la hoja de estilos task.scss
import '../../styles/task.scss'
const TaskListComponent = () => {
    const defaultTask = new Task('Ejemplo' , 'Descripcion por defecto' , false, LEVELS.NOMRAL);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);


    //control del ciclo de vida del componente

    useEffect(() => {
        console.log("modificacion de tareas");
        setLoading(false);
        return () => {
            console.log("el componente desaparecio");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log("TODO: cambiar estado de una tarea");
    }
    return (
        <div>
            <div>
                <h1> Su tarea :</h1>
            </div>   
            <TaskComponent task= {defaultTask} ></TaskComponent>
        </div>
    );
};

export default TaskListComponent;

