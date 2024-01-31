import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    const FILTER_MAP={
        All: ()=>true,
        Active:(task) => !task.completed,
        Complted:(task) => task.completed
    };

    const FILTER_NAMES= Object.keys(FILTER_MAP);

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));

    }

    return (
        <div className='todo-list'>
            <div class="d-flex justify-content-center align-items-center mb-4">
                <div class="form-outline flex-fill">
                    <input class="form-control" value={text} onChange={e => setText(e.target.value)} />
                    <label class="form-label">New task...</label>
                </div>
                <button class="btn btn-info ms-2" onClick={() => addTask(text)}>Add</button>
            </div>
            {
                tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;