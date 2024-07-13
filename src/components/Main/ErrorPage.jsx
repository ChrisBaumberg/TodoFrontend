import { styled } from "styled-components";

export function ErrorPage(){
    //if the user is calling an undefined page
    const done=true;
    return(
        <StyledErrorPage>
            <div>
                <h1 style={{textAlign:"Center"}}>Oops </h1>
                <p style={{textAlign:"Center"}}>Sorry, an unexpected Error Occured</p>
            </div>
        </StyledErrorPage>
    )
}

const StyledErrorPage = styled.div`
    font-family: Arial;
    border-radius: 10%;
    background-color: red;
`