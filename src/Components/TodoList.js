import React from 'react';
import Todo from './Todo';

const TodoList = ({ filteredTodo, setTodo}) => {
    return (
        <div>
            <ul className="todo-list-ul">
                {filteredTodo.map(todo => {
                    return <Todo name={todo.name} setTodo={setTodo} filteredTodo={filteredTodo} todo={todo} key={todo.key} />
                })}
            </ul>
        </div>        
    );
}

export default TodoList;