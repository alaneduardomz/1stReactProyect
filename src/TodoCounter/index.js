import React from 'react';
import '../index.css'
import { TodoContext } from '../TodoContext';

// const estilos = {
//     color: 'red',
//     backGroundColor: 'yellow',
// }

function TodoCounter(){
    const {totalTodos, completedTodos} =  React.useContext(TodoContext);    
    return (
        <h2 className='text-2xl text-center font-medium mt-2 mb-6 font-extrabold pt-4'>Has completado {completedTodos} de {totalTodos} Tareas</h2>
    );
}

export {TodoCounter}