//styled import
import styled from "styled-components";



export function TodoInput() {
    //input button with styling
    return(
        <StyledTodoInputContainer>
              <input name="inputTodo" />

        </StyledTodoInputContainer>
    )
}

const StyledTodoInputContainer = styled.div`
    display: flex;
    gap: 10px;
`