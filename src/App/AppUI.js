import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import Swal from "sweetalert2";
function AppUI (){
    const {
            error,
            loading,
            searchedTodos,
            completeTodo,
            onDelete,
            openModal,
            setOpenModal
           } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter /> 

            <TodoSearch />
                    <TodoList>
                        {error && <p>Erorr 404 NOT FOUND...</p>}
                        {loading && <h3 className="font-bold text-center">Cargando...</h3>}
                        {(!loading && !searchedTodos.length) && <h3 className="font-bold text-center">¡Ops... Parece que no tienes tareas pendientes!</h3>}
                        <br></br>
                        {(!loading && !searchedTodos.length) && <h3 className="font-bold text-center">¡Crea tu primer Tarea!</h3>}
                        
                        {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => onDelete(todo.text)}
                        />
                        ))}
                    </TodoList>
                    {!!openModal && (
                        <Modal>
                            <TodoForm />
                        </Modal>
                    )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            <button></button>
        </>
    )
}
export {AppUI};