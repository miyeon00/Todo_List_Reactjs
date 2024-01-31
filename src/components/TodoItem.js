import React from "react";
function TodoItem({ task, deleteTask, toggleCompleted }) {

    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
            aria-labelledby="ex1-tab-1">
            <ul class="list-group mb-0">
                <li class="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" bgcolor="#f4f6f7">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" class="form-check-input me-2" checked={task.completed} onChange={handleChange} />
                        {task.text}
                    </div>
                    <button onClick={() => deleteTask(task.id)} type="button" class="btn btn-light"><i class="fas fa-times text-primary"></i></button>
                </li>

            </ul>
        </div>
    );

}

export default TodoItem;
