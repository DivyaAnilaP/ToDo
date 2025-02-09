import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api/todoApi'; // Import delete function
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      const response = await createTodo(newTodo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const editTodo = async (id, updatedTodo) => {
    try {
      const response = await updateTodo(id, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id); 
      setTodos(todos.filter((todo) => todo.id !== id)); 
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onEditTodo={editTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
