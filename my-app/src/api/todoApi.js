import axios from 'axios';


const API_BASE_URL = "https://todoweb-hj4k.onrender.com";

export const fetchTodos=() =>axios.get(API_BASE_URL);
export const createTodo=(todo)=>axios.post(API_BASE_URL,todo);
export const updateTodo =(id,todo)=>axios.put(`${API_BASE_URL}/${id}`,todo);
export const deleteTodo =(id) =>axios.delete(`${API_BASE_URL}/${id}`);



