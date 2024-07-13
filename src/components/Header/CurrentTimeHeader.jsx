import styled from "styled-components";
import  useTime  from "../customHooks/useTime";
import useDate from "../customHooks/useDate";

export function CurrentTimeHeader(){
    const time=useTime() //time
    const date=useDate() //date
    return(
        <StyledCurrentTimeHeader>
        <h1>{date} <br />{time}</h1>
        </StyledCurrentTimeHeader>
    )
}

const StyledCurrentTimeHeader=styled.h1 `
font-family: Arial, Helvetica, sans-serif;
    color: #99a11b;
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #5e7a8e;
    transition: all 0.25s ease-out;
    &:hover{
   
    text-shadow: -10px 10px 25px #45e74a;
    }
`