import React from "react";

const TodoList = ({ todos, onEditTodo, onDeleteTodo }) => {
  const listStyle = {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const itemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
  };

  const statusStyle = (completed) => ({
    color: completed ? "green" : "red",
    fontWeight: "bold",
  });

  const buttonStyle = {
    padding: "8px 12px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const toggleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "white",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ff4d4d",
    color: "white",
  };

  return (
    <div style={listStyle}>
      {todos.map((todo) => (
        <div key={todo.id} style={itemStyle}>
          <h3 style={titleStyle}>🔹 {todo.title}</h3>
          <p style={descriptionStyle}>{todo.description}</p>
          <p style={statusStyle(todo.completed)}>
            {todo.completed ? "✅ Completed" : "❌ Incomplete"}
          </p>
          <button
            style={toggleButtonStyle}
            onClick={() => onEditTodo(todo.id, { ...todo, completed: !todo.completed })}
          >
            {todo.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button style={deleteButtonStyle} onClick={() => onDeleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
