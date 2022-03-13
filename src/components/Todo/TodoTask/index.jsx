import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../../Dataprovider";

FormTask.propTypes = {

};

function FormTask() {
    const today = new Date();
    const numberOfDaysToAdd = 0;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split("T")[0];

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const [todoDate, setTodoDate] = useState(defaultValue);
    const [todoPriority, setTodoPriority] = useState(0);

    const todoInput = useRef();
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Date.now(),
                name: todoName,
                desc: todoDesc,
                date: todoDate,
                priority: todoPriority,
                complete: false,
            },
        ]);

        setTodoName("");
        setTodoDesc("");
        setTodoDate("");
        setTodoPriority(0);
        todoInput.current.focus();
    };
    useEffect(() => {
        todoInput.current.focus();
    }, []);
    return (
        <form autoComplete="off" className="form_task" onSubmit={addTodo}>
            <input
                type="text"
                name="todos"
                id="todos"
                className="text_input"
                placeholder="Add new task....."
                required
                value={todoName}
                onChange={(e) => setTodoName(e.target.value.toLowerCase())}
                ref={todoInput}
            />
            <div className="form_group">
                <label>Desciption</label>
                <br />
                <textarea
                    className="textarea"
                    type="text"
                    onChange={(e) => setTodoDesc(e.target.value)}
                    value={todoDesc}
                ></textarea>
            </div>

            <div className="option">
                <div className="date">
                    <label>Date</label>
                    <br />
                    <input
                        name="duedate"
                        type="date"
                        defaultValue={defaultValue}
                        value={todoDate}
                        className="form-input__date"
                        onChange={(e) => {
                            setTodoDate(e.target.value);
                        }}
                    />
                </div>
                <div className="piority">
                    <label>Piority</label>
                    <br />
                    <select
                        value={todoPriority}
                        onChange={(e) => {
                            setTodoPriority(e.target.value);
                        }}
                    >
                        <option value="-1">Low</option>
                        <option selected="selected" value="0">Normal</option>
                        <option value="1">High</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="button">
                Add
            </button>
        </form>
    );
}

export default FormTask;