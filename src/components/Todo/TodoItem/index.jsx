import React, { useContext, useState } from "react";
import { DataContext } from '../../Dataprovider';

ListItem.propTypes = {

};

function ListItem({ todo, id, checkComplete }) {
    const [onEdit, setOnEdit] = useState(false);
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState(todo.name);
    const [todoDesc, setTodoDesc] = useState(todo.desc);
    const [todoDate, setTodoDate] = useState(todo.date);
    const [todoPriority, setTodoPriority] = useState(todo.priority);

    const handleOnEdit = () => {
        if (onEdit === false) {
            setOnEdit(true);
        } else {
            setOnEdit(false);
        }
    };
    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleOnClick = () => {
        const index = todos.findIndex((t) => t.id === todo.id);
        // const newTodo
        todos[index] = {
            id: todo.id,
            name: todoName,
            desc: todoDesc,
            date: todoDate,
            pior: todoPriority,
        };
        setTodos([...todos]);
        setOnEdit(false);
    };
    return (
        <>
            <div className="List_item" htmlFor={id}>
                <div>
                    <input type="checkbox" id={id} onChange={() => checkComplete(id)} />
                </div>
                <div className="List_item-name">{todoName}</div>
                <div>
                    <button
                        className="button_detail"
                        disabled={todo.complete}
                        onClick={() => handleOnEdit()}
                    >
                        Detail
                    </button>
                    <button
                        className="button_delete"
                        onClick={() => handleDelete(todo.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
            {onEdit && (
                <div autoComplete="off" className="form_update">
                    <input
                        type="text"
                        name="todos"
                        id="todos"
                        className="text_input"
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                    />
                    <div className="form_group">
                        <label>Desciption</label>
                        <br />
                        <textarea className="textarea" type="text">
                            {todo.desc}
                        </textarea>
                    </div>

                    <div className="option">
                        <div className="date">
                            <label>Date</label>
                            <br />
                            <input type="date" name="date" value={todo.date} />
                        </div>

                        <div className="piority">
                            <label>Piority</label>
                            <br />
                            <select value={todo.priority}>
                                <option value="-1">Low</option>
                                <option value="0">Normal</option>
                                <option value="1">High</option>
                            </select>
                        </div>
                    </div>
                    <button className="button" onClick={() => handleOnClick()}>
                        Update
                    </button>
                </div>
            )}
        </>
    );
}

export default ListItem;