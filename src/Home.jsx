import "./App.css";
import { TodoHeader } from "./components/Header/TodoHeader";
import { TodoPage } from "./components/Main/TodoPage.jsx";
import { WelcomePage } from "./components/Main/WelcomePage.jsx";
import { ErrorPage } from "./components/Main/ErrorPage.jsx";
import { CurrentTimeHeader } from "./components/Header/CurrentTimeHeader.jsx";


//context, consumer
import { TodoProvider } from "./components/context/TodoContextHandler.jsx";
//import {}

//router
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
export function Home(){
  
  
  return (
    <div className="app">
      <TodoProvider>
      <BrowserRouter>
        <TodoHeader />
        <CurrentTimeHeader/>
        <Routes>
          <Route
            path="/todos"
            element={
            <TodoPage
            />
          }
          />
          
     
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/:path" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </TodoProvider>
    </div>
  );

}


