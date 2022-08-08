import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class.js';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

//importamos la hoja de estilos task.scss
import '../../styles/task.scss'
const TaskListComponent = () => {
    const defaultTask1 = new Task('Ejemplo1' , 'Descripcion1 por defecto' , true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Ejemplo2' , 'Descripcion2 ' , false, LEVELS.URGENT);
    const defaultTask3 = new Task('Ejemplo3' , 'Descripcion3' , false, LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    //control del ciclo de vida del componente

    useEffect(() => {
        console.log("modificacion de tareas");
        setLoading(false);
        return () => {
            console.log("el componente desaparecio");
        };
    }, [tasks]);

    function completeTask(task){
        console.log("completar esta tarea: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks]; // [...tasks] trae todo lo que tiene tasks
        tempTask[index].completed = !tempTask[index].completed;
        // actualizamos el estado del componente "use state"
        //con una nueva lista de tareas
        //y esto actualiza la iteracion de las tareas "tasks"
        //en orden de aparicion de las tareas actializadas
        //generamos un nuevo estado, por que son inmutables
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log("borar esta tarea: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1); //splice necesita saber de cual partimos para borra un elemeto, y cuantos queremos borrar.
        setTasks(tempTask);
    }

    function addTask (task){
        console.log("añadir esta tarea: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/*card header (title) */}
                    <div className='car-header p-3'>
                        <h5>Su tarea :</h5>
                    </div>
                </div>
                {/*card body (content) */}
                <div className='car-body' data-mdb-perfect-scrollbar='true' style={ {position : 'relative', height: '400px' } }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Titulo</th>
                                <th scope='col'>Descripcion</th>
                                <th scope='col'>Prioridad</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*  iterar sobre una lista de taeas */}
                            {tasks.map((task, index) =>{
                                return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task} 
                                            complete={completeTask}
                                            remove={deleteTask}
                                            >
                                            </TaskComponent>  
                                    )
                                } 
                            )}
                        </tbody>
                    </table>
                </div>   
            </div>
            <TaskForm add={addTask}></TaskForm>   
        </div>
    );
};

export default TaskListComponent;

