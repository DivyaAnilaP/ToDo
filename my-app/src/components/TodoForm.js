import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            onAddTodo({ title, description, completed: false });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(to right, #2C3E50, #4CA1AF)', // Professional blue gradient
                padding: '20px'
            }}
        >
            <h1 style={{ 
                color: '#ffffff', 
                textAlign: 'center', 
                marginBottom: '20px', 
                textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
                fontSize: '28px',
                fontWeight: 'bold'
            }}>
                TO-DO APP
            </h1>
            
            <form 
                onSubmit={handleSubmit} 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '25px',
                    width: '100%',
                    maxWidth: '400px',
                    background: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)'
                }}
            >
                <input
                    type="text"
                    placeholder="Enter Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        outline: 'none'
                    }}
                />
                <textarea
                    placeholder="Enter Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        minHeight: '90px',
                        outline: 'none',
                        resize: 'none'
                    }}
                ></textarea>
                <button 
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#2980B9', // Professional blue
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'background 0.3s, transform 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#2471A3'}
                    onMouseOut={(e) => e.target.style.background = '#2980B9'}
                    onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                    onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
