import { Fragment, memo } from "react";
import {v4 as uuidvd4} from "uuid";
import useTodos from "../customHooks/useTodos";

function CategorySelect({handleCurrentFilter}){
    //select category and filter the todos, that are set in this category
    const {filters} = useTodos();
    return(
        <>
            <label htmlFor="category">
                Wähle eine Kategorie
            </label>
            <select onClick={handleCurrentFilter} name="categorySelect" id="category">
                {
                    filters.map(el =>{
                        return(
                            <Fragment key={uuidvd4()}>
                            <option value={el}>{el}</option>
                            </Fragment>
                        )
                    })
                }
            
            </select>
        </>
    )
}

export default memo(CategorySelect);