import showNotifications from "../components/Notifications/showNotifications";
import axios from "axios";

//Service Object, welches wir im TodoProvider nutzen werden um unsere Request 
//durchzuführen.
const todoService = {
   getTodosBackend: async(setCallBackFunc)=>{
    //Todos aus der DB auslesen, request wird an "/todos" geschicket
    //content type nur zu Information
    //keine user Nachricht
    try{
        const config={
            method: "get",
            url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_GET_ROUTE}`,
            headers: {
                "Content-Type":"application/json",
            },
           
        }
        const res = await axios(config);
    
        setCallBackFunc(res.data.todos);
        
      
     
    }
    catch(e){
        console.log(e.data)
        showNotifications(e.data.message, "red");
    }
   },

   addTodoBackend: async(newTodo) =>{
    //add new todo to DB
    try{
        const config ={
            method:"post",
            url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_POST_ROUTE}`,
            headers: {
                "Content-Type":"application/json",
            },
            data: JSON.stringify(newTodo),
        };
            
            const res = await axios(config);
            showNotifications(res.data.message,"normal");
    
            
    }
    catch(e){
        console.log(e.data)
        showNotifications(e.data.message, "red");
    }
   },

   deleteTodoBackend: async (todoId)=>{
    //delete todo from backend
    
    try{
        const config = {
            method: "delete",
            url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_DELETE_ROUTE}/${todoId}`,
        
        headers: {
            "Content-Type":"application/json"
        },
     
    };
    
    const res = await axios(config);
    showNotifications(res.data.message,"normal");
   
    
   }
   catch(e){
    console.log(e.data)
    showNotifications(e.data.message, "red");
   }
},

toggleTodoDoneBackend: async(todoId)=>{
    //toggle done-status in DB
        try{
            const config = {
                method: "put",
                url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_PUT_ROUTE}/${todoId}`,
            
            headers: {
                "Content-Type":"application/json"
            },
        }
        
        const res = await axios(config);
        showNotifications(res.data.message,"normal");

        
       }
       catch(e){
        showNotifications(e.data.message, "red");
       }
}
}

export default todoService;