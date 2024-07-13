import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {styled} from "styled-components";
import useTodos from "../customHooks/useTodos";


export function WelcomePage(){
    //first page, when user is starting app
    const {todos} = useTodos();
    const[title, setTitle]=useState("");
    function checkNumberTodoAvaible(){
        if (todos.length >3){
            //many tasks
            setTitle(`Heute Hast du noch sehr viel zu erledigen! \nOffene Todos: ${todos.length}`)
        }
        else if(todos.length ==0){
            //no tasks
                setTitle(`Alles erledigt!`)
            
        }
        else
        {
            //up to 3 tasks
            setTitle(`Du hast heute nicht mehr viel zu tun! \nOffene Todos: ${todos.length}`)
        }
    }
        useEffect(()=>{
            checkNumberTodoAvaible();
        },[todos])
    
    
    return(
        //link shows the todos
        <>
        <Link to="/todos" style={{textDecoration:"none"}}>
        <StyledWelcomeHeader>{title}</StyledWelcomeHeader>
        </Link>
        </>
    )
}

const StyledWelcomeHeader = styled.h1`
    fontSize: clamp(2rem, calc(4vw + 0rem), 5rem);
    fontFamily: cursive;
    color: #fe89ca;
    textAlign: center;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #bfbcba;
    transistion: all 0.25s ease-out;
    &:hover {
        text-shadow: -16px 6px 15px #E27D60;
    }
`