import React from 'react';
import { Dataprovider } from './Dataprovider';
import FormList from './Todo/TodoList';
import Footer from './Todo/FooterTodo';
import FormTask from './Todo/TodoTask';
import "./index.css";
import "./responsive.css";

TodoTask.propTypes = {

};

function TodoTask(props) {
    return (
        <Dataprovider>
            <div className="container_fuild ">
                <div className="container">
                    <div className="newtask ">
                        <div className="text_center">
                            <h4>New Task</h4>
                        </div>
                        <FormTask />
                    </div>

                    <div className="list">
                        <div className="text_center">
                            <h4>Todo List</h4>
                        </div>
                        <FormList />
                        <Footer />
                    </div>
                </div>
            </div>
        </Dataprovider>
    );
}

export default TodoTask;