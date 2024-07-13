import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { initialTodos } from "../../data/todoData";
import todoService from "../../services/todoService";

const TodoContext = createContext();

const TodoProvider = ({children})=>{
  //definieren
  //useCallback memoize handlers, die an subcomponents übergeben werden können
  //useMemo memoize none-side effect functions whitch can cache the result until 
  //the dependency changes
  //use Effect memoize side effect functins based on dependency

    const [todos, setTodos] = useState([]);
  //state um gefilterte Todos auf Basis des "current Filters" später statt allen 
  //todos anzuzeigen
      const [filteredTodos, setFilteredTodos]=useState([]);
      //state für filter, welche in dropdown Liste angezeigt werden sollen
      const[filters, setFilters]= useState([]);
      //state für den gerade ausgewählten Filter aus der Filterliste
      //default eingestellt: dass alle todos angezeigt werden sollen
      const [currentFilter,setCurrentFilter]= useState("all");
      //Initial getten der todos aus der Datenbank
      //Localstorage nicht mehr notwendig

    useEffect(() => {
      todoService.getTodosBackend(setTodos);
    },[])
    //Kann aber weiterhing up-to-date gehalten werden, um eventuell später damit 
    //zu arbeiten

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
      //eventListener und handle function, welche daten aus event message extrahiert
      //aufruf der service function um todo zu adden
      //clean-up(*)
      //Event ausgelöst in: TodoInputform - newTodo(function)
     useEffect(() => {
      const handleAddTodo= async (event)=>{
        
        const newTodo=event.detail;
        try{
          await todoService.addTodoBackend(newTodo);
          await todoService.getTodosBackend(setTodos);
        }
        catch(e){
          console.log(`Failed to add: ${e}`)
        }
      
      }
      window.addEventListener("addTodo",handleAddTodo);
      //(*) clean-up
      return ()=>{
        window.removeEventListener("addTodo", handleAddTodo)
      }
     },[])
     //TODO: Delete
     useEffect( ()=>{
      const handleDeleteTodo = async (event)=>{
      
       const id = event.detail;
      try{
        await todoService.deleteTodoBackend(id);
      }
      catch(e){
        console.log(`Failed to delete: ${e}`)
      }
    }
      window.addEventListener(`delete`,handleDeleteTodo);
     //(*) clean-up
     return ()=>{
       window.removeEventListener(`delete`, handleDeleteTodo);
     }
     },[]
     
    )
     //TODO: Toggle
     useEffect(()=>{
      const handleToggleTodo = async (event)=>{
      
        const id = event.detail;
   
      
        try{
          
          await todoService.toggleTodoDoneBackend(id);
          
        }
        catch (e){

          console.log(`Failed to toggle: ${e}`)
        }
      }
      
      window.addEventListener(`toggle`,handleToggleTodo);
      
      //(*) clean-up
      return ()=>{
        window.removeEventListener(`toggle`, handleToggleTodo);
      }
      
      },[]
     )

      const uniqueCategories = useMemo(()=>{
        return ["all", ...new Set(todos.map((todo) => todo.category))];
      },[todos]);
      //not expensive set the array
      useEffect(()=>{
        setFilters(uniqueCategories);
      },[uniqueCategories]);
    
      //expensive since filtering could occur (imagine thousand of entries)
      const filteredTodosMemo= useMemo(() => {
        return currentFilter === "all" 
        ? todos
        : todos.filter((todo) => todo.category === currentFilter)
      },[currentFilter,todos])

      //not expensive
      useEffect(()=>{
        setFilteredTodos(filteredTodosMemo);
      },[filteredTodosMemo]);

      //because used later as handler in categorySelect "onChange"
      const memoizedSetCurrentFilter = useCallback((newFilter) =>{
        setCurrentFilter(newFilter);
      },[]);

      
    return (
        <TodoContext.Provider
        value={{
            todos,
            setTodos,
            filteredTodos,
            setFilteredTodos,
            filters,
            setFilters,
            currentFilter,
            memoizedSetCurrentFilter
          }}>
            {children}
            </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext};