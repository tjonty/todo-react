import React from 'react';

const Todo = ({ name, key, filteredTodo, todo, setTodo}) => {

    function completeHandler(){
        
        setTodo(filteredTodo.map(item=> {
                if(item.key === todo.key) {
                    return {
                        ...item,
                        completed : !todo.completed
                    } 
                }
                return item;
            })
        );
    }

    function deleteHandler() {
        setTodo(filteredTodo.filter(e => todo.key !== e.key));
    }

    return (
        <li className="todo">
            <p type="text" className={`todo-name ${todo.completed ? "completed " : ''}`}>{name}</p>
            <button className="todo-btn-done" onClick={completeHandler}>Done</button>
            <button className="todo-btn-del" onClick={deleteHandler}>Delete</button>
        </li>
    );
}

export default Todo;