import { CiCircleCheck } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

import { useState, memo} from "react";
import useTodos from "../customHooks/useTodos";
import styled from "styled-components";


function TodoCard({title,done,id}) {
    const {todos, setTodos} = useTodos();
    // Delete Todo by Click on Delete-Button
    function handleDeleteOnClick() {
        setTodos(todos.filter(todo => {
            
            return todo.id !== id;
            })
        )
        //handle to backend
        const deleteTodoEvent= new CustomEvent(`delete`, {detail: id});
        window.dispatchEvent(deleteTodoEvent);
            
    }
    // Toggle Todo by Click on Done-Button
    function handleToggleOnClick() {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                
                }
                return todo;
            }) 
        )
        //handle to backend
        const toggleTodoEvent= new CustomEvent(`toggle`, {detail: id});
        window.dispatchEvent(toggleTodoEvent);
            
    }

     
    
    return(
        //1. Styling Container
        //2. Styling Text
        //3. Done Button
        //4. Delete Button
        <StyledTodoContainer done={done}>
            <TodoText className={done? "linkDone":""} done={done}>{title}</TodoText>
            
            <CiCircleCheck onClick={handleToggleOnClick} className="buttons"/>
            <FaRegTrashAlt onClick={handleDeleteOnClick} className="buttons"/>
        </StyledTodoContainer>
    )
   
}



const TodoText  = styled.p`
    display: inline;
`

//Einem Styled Element kann man auch JS Code übergeben
//Hier wird einem anynonyme Funktion aufgerufen, welches auf das props Argument
//zugreift und per tenary operator den CSS - Wert setzt
const StyledTodoContainer = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; ,
    color: red;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 5px;
    color: ${(props) => props.done ? "red" : "green"};
    text-decoration: ${(props) => props.done ? "line-through" : "none"}
    ;
`

export default memo(TodoCard);