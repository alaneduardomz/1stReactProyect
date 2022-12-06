import React from "react";
import  {useLocalStorage}  from  "./useLocalStorage" ;

const TodoContext = React.createContext();

function TodoProvider (props){
  
const {item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState(''); 
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(todo => !!todo.completed).length; // obtiene la cantidad de tareas completadas
  const totalTodos = todos.length; // obtiene la cantidad de tareas totales
  let searchedTodos = [];
  
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
   const addTodo = (text) => { //text 
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos);
  }
  const completeTodo = (text) => { //text 
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const onDelete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); // elimina el elemento del array, 1 es la cantidad de elementos a eliminar
    saveTodos(newTodos);
  };

   return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      onDelete,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
