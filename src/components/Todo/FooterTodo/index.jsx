import React, { useContext, useState } from 'react';
import { DataContext } from '../../Dataprovider';

Footer.propTypes = {

};

function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);
    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach((todo) => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    };
    const deleteTodo = () => {
        const newTodos = todos.filter((todo) => {
            return todo.complete === false;
        });
        setTodos(newTodos);
        setCheckAll(false);
    };
    return (
        <>
            {todos.lenght === 0 ? (
                <h3>Congratulations ! Nothings To Do</h3>
            ) : (
                <div className="Rectangle border">
                    <div htmlFor="all" className="Rectangle_all">
                        <div className="All_checkbox">
                            <input
                                type="checkbox"
                                name="all"
                                id="all"
                                onChange={handleCheckAll}
                                checked={checkAll}
                            />
                            All
                        </div>
                        <div>Bulk Action {todos.lenght}</div>
                        <div>
                            <button
                                className="button_delete"
                                id="delete"
                                onClick={deleteTodo}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;