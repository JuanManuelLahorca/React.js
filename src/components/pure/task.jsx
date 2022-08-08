import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//importamos la hoja de estilos task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("tarea creada");
        return () => {
            console.log(`tarea: ${task.name} desaparecera`);
        };
    }, [task]);

    function taskIconCompleted(){
        if (task.completed) {
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style= {{color:'green'}}></i>)
        }else{
            return(<i  onClick={() => complete(task)} className='bi-toggle-off task-action'style= {{color:'grey'}}></i>)
        }
    }

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className=' mb-0'> 
                        <span className='badge bg-primary'>{ task.level }</span>
                    </h6>);
            case LEVELS.URGENT:
            return(
                <h6 className=' mb-0'> 
                    <span className='badge bg-warning'>{ task.level }</span>
                </h6>);
            case LEVELS.BLOCKING:
                return(
                    <h6 className=' mb-0'> 
                        <span className='badge bg-danger'>{ task.level }</span>
                    </h6>);   
            default:
                break;
        }
    }



    return (

        <tr className='fw-normal'>
            <th className='ms 2'> 
                <span> { task.name } </span> 
            </th>
            <td className='aling-middle'> 
                <span> { task.description } </span> 
            </td>
            <td className='aling-middle'> 
                {/*sustituir por un badge */}
                {taskLevelBadge()}
            </td> 
            <td className='aling-middle'> 
                {/*sustituir po un iconos */}
                { taskIconCompleted() }
                <i className='bi-trash task-action' onClick={() => remove(task)} style= {{color:'tomato' }}></i>
            </td> 
        </tr>
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task).isRequired,
    complete : PropTypes.func.isRequired,
    remove :  PropTypes.func.isRequired
};


export default TaskComponent;
