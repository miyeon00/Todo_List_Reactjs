import React, { useState } from "react";

function TodoItem({ task, deleteTask, editTask, toggleCompleted }) {

    const [editing, setEditing] = useState(false);
    const [todoText, setTodoText] = useState(task.text);

    function handleChange() {
        toggleCompleted(task.id);
    }

    function saveEdit(){
        editTask(task.id, todoText);
        setEditing(false);
    }

    const onEnterPressHandler = (event) => {
        if (event.key === 'Enter') {
            saveEdit();
            return;
        }
      }

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                />
            </div>
            <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
                {!editing && <div >{task.text}</div>}
                {editing && (
                    <input
                        onKeyDown={onEnterPressHandler}
                        type="text"
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    ></input>
                )}
            </div>
            <div>
                <button onClick={() => setEditing(true)}>edit</button>
                <button onClick={() => deleteTask(task.id)}>
                    X
                </button>
            </div>
        </div>
    )
}

export default TodoItem;
