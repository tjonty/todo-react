import React from 'react';
import uniqid from 'uniqid';

const Form = ({ inputText, setInputText, todos, setTodos}) => {
    
    function inputTextHandler(e) {
        setInputText(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if(inputText.length <= 0)
            return alert("Please Enter Valid Task..")
        setTodos([
            ...todos,
            {
                key: uniqid(),
                name: inputText,
                completed: false
            } 
        ]);
        setInputText('');
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input className="form-input" type="text" placeholder="Enter your next Todo..." onChange={inputTextHandler} value={inputText}></input>
                <button className="form-btn-submit" type="submit">ADD</button>
            </form>
        </div>
    );
}

export default Form;