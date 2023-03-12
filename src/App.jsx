//Chaya Tanenbaum
import "./App.css";
import { useReducer } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/Header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todoState/todoContext";
import { todoReducer } from "./state/todoState/todoReducer";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [
      // {
      //   title: "first1",
      //   isComplete: false,
      // },
      // {
      //   title: "second2",
      //   isComplete: true,
      // },
    ],
  });

  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          {/* http://localhost:3000/#/ */}
          <Route path="/" element={<Home />} />
          {/* http://localhost:3000/#/todo */}
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
