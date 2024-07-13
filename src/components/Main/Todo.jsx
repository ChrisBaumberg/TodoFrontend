import { Fragment } from "react";
import  MemoizedTodoCard  from "../Card/TodoCard";
import useTodos from "../customHooks/useTodos";

export function Todo(){
  //set filters
  const {todos,currentFilter,filteredTodos}= useTodos();
    return(
    
        <>
        {
          //reset filter
          currentFilter !== "all"
          ?filteredTodos.map((todo)=>{
            return(
              <Fragment key={todo.id}>
                <MemoizedTodoCard
                title={todo.title}
                done={todo.done}
                id={todo.id}
                
              
                />
                </Fragment>
            )
          })
          //show filtered todos
          :todos.map((todo)=>{
              return(
                <Fragment key={todo.id}>
                  <MemoizedTodoCard
                  title={todo.title}
                  done={todo.done}
                  id={todo.id}
                 
                  />
                  </Fragment>
              )
            })
        }
      </>
    )
}