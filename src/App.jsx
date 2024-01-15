import "./App.css";
import { useState } from "react";

// import Components
import Header from "./components/Header.jsx";
import TodosContainer from "./components/TodosContainer.jsx";
import DonesContainer from "./components/DonesContainer.jsx";

// import context

function App() {
  // const tasksArr = [
  //   { id: 0, text: "Wash my face!", done: false },
  //   { id: 1, text: "Walk the dog", done: false },
  //   { id: 2, text: "Pay the rent", done: false },
  //   { id: 3, text: "Make so moneys", done: false },
  //   { id: 4, text: "Make a website", done: true },
  //   { id: 5, text: "Call my mom", done: true },
  //   { id: 6, text: "Finish reading my book", done: true },
  //   { id: 7, text: "Make more moneys", done: true },
  // ];

  const [tasks, setTasks] = useState([]);

  const addItem = (value) => {

    const newItem = {
      id: tasks.length,
      text: value,
      done: false,
    };

    // console.log([ ...tasks], newItem);
    return setTasks([newItem, ...tasks]);
  };


  
  const updateItem = (id) => {

    const updatedItem = tasks.map((item) => {
      if(item.id === id){
        item.done = !item.done

        return item;
      } else {
        return item;
      }
    })

  return setTasks(updatedItem)

  };


  const todos = tasks.filter((task) => !task.done);
  const dones = tasks.filter((task) => task.done)

  return (
    <div className="app">
      <Header />
      <TodosContainer 
      items = {todos} 
      handleAddTodo = {addItem} 
      handleChangeStatus = {updateItem}/>
      <DonesContainer 
      items = {dones}
      handleChangeStatus = {updateItem}/>
    </div>
  );
}

export default App;
