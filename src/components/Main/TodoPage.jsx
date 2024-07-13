//components

import  {Todo } from "./Todo"

import  TodoInputForm  from "../Forms/TodoInputForm"

export function TodoPage() {
//connect inputform and filters
    return(
        <>
            <TodoInputForm />  
            <Todo/>
        </>
    )
}