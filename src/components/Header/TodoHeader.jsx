import styled from "styled-components";
import { Link } from "react-router-dom";

export function TodoHeader(){
    //header with styling
    return (
        <>
       <Link to="/" style={{ textDecoration: "none" }}>
            
                <StyledTodoHeader>
                    Awesome Todo
                </StyledTodoHeader>
            
                </Link>
        </>
    )
}

const StyledTodoHeader=styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: aqua;
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px orange;
    transition: all 0.25s ease-out;
    &:hover{
   
    text-shadow: -10px 10px 25px purple;
    }

`