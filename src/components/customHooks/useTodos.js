import { useContext } from "react";

import { TodoContext } from "../context/TodoContextHandler";

const useTodos = ()=>{
    const context= useContext(TodoContext);
    //not necessary
    if(!context){
        throw new Error("no Context defined, use useTodos within a provider!")
    }
    return context;
};

export default useTodos;