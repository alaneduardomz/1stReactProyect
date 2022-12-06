import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";


function TodoForm() {
    
    const [newTodoValue, setNewTodoValue] = React.useState("");
    
    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);

    };
    return (
            <form onSubmit={onSubmit}>
            <label>Agregar una nueva tarea</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe una tarea"> 

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                    >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add" 
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };