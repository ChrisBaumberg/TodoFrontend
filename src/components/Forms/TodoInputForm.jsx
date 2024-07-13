import { styled} from "styled-components";
import { TodoInput } from "../Input/TodoInput";
import  CategorySelect  from "../Input/CategorySelect";
import { useRef, memo, useCallback } from "react";
import useTodos from "../customHooks/useTodos";
import {v4 as uuidv4} from "uuid";


function TodoInputForm(){
    //define variables
    const {memoizedSetCurrentFilter,currentFilter,filters,todos,setTodos}=useTodos();
    const formRef=useRef();
    //define newTodo
    const newTodo = useCallback(() => {
       
        if(formRef.current.inputTodo.value !== "" && formRef.current.chooseCategory.value !=="") {
            //set attributes of new Todos
            const newTodo =
            {
            
                id: uuidv4(), //unique ID
                title: formRef.current.inputTodo.value, //get title from input
                done: false, //default
                category: formRef.current.chooseCategory.value //get category from input
            }
            //handle to backend
            const addTodoEvent= new CustomEvent("addTodo", {detail: newTodo});
            window.dispatchEvent(addTodoEvent);
        }
        //empty title, if there's no input
        formRef.current.inputTodo.value = ""; 
    },[setTodos]);

   const handleAddOnSubmit = useCallback(()=>{
    //add new Todo, when the Submit-Button is pressed
        newTodo();
    },[newTodo]);

    const handleCurrentFilter = useCallback(()=>{
        //set filter
        memoizedSetCurrentFilter(formRef.current.categorySelect.value);
    },[memoizedSetCurrentFilter]);

    const handleOnClickSubmit = useCallback((e)=>{
        //when button is pressed
        e.preventDefault();
        handleAddOnSubmit();
    },{handleAddOnSubmit});
    
    return(
        <>
        <form ref={formRef}onSubmit={handleOnClickSubmit}>
        
            <StyledFormDiv multiple={false}>
                <TodoInput/>
                <input type="text" name="chooseCategory"/>
            </StyledFormDiv>
            <StyledFormDiv multiple={true}>
                <CategorySelect handleCurrentFilter={handleCurrentFilter} filters={filters} currentFilter={currentFilter}/>
                <input type="submit" name="submit" value="Einfügen"/>
                <input type="submit" name="change" value="Ändern" />
            </StyledFormDiv>
        </form>
        </>
    );
}


const StyledFormDiv = styled.div `
display: flex;
gap: ${props => props.multiple ? "10px":"0px"};
`

export default memo(TodoInputForm);