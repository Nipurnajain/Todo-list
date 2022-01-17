import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from "./components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {//if there are no todos in the list 
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="MY TODO LIST" searchBar={false}/>
        <Switch>
          <Route
            exact path="/"
            render={() => {
              return (
                <>
                  
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
