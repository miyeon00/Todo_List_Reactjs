import React, { useCallback, useState } from 'react';
import Filter from './Filter';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';
import Button from 'react-bootstrap/Button';


function TodoList(prop) {
    const [tasks, setTasks] = useState([]);
    const [text, SetText] = useState('');

    const [filter, setFilter] = useState("All");

    const FILTER_MAP = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed,
    };

    const FILTER_NAMES = Object.keys(FILTER_MAP);

    const filterList = FILTER_NAMES.map((name) => (
        <Filter
            key={name}
            name={name}
            setFilter={setFilter} />
    ));

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
            editFlag: false
        };

        setTasks([...tasks, newTask]);
        SetText('');

    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function editTask(id, text) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: text };
            }
        }));
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

    const onChange = (e) => {
            let {value} = {...e.target}
            SetText(value)
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.form}>
                    <input
                        className={classes.form_input}
                        name="todo"
                        id="todoText"
                        type="text"
                        placeholder="new todo"
                        value={text}
                        onChange={onChange}
                    />
                    <Button onClick={() => addTask(text)} className={classes.add_button}>Add</Button>
                </div>
            </div>
            {filterList}
            <div>
                {tasks
                    .filter(FILTER_MAP[filter])
                    .map(task => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            toggleCompleted={toggleCompleted}
                        />
                    ))}
            </div>

        </>
    );

}

export default TodoList;