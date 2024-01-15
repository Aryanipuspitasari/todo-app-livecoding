import "./App.css";

// import Components
import Header from "./components/Header.jsx";
import TodosContainer from "./components/TodosContainer.jsx";
import DonesContainer from "./components/DonesContainer.jsx";

// import context

function App() {
  return (
    <>
      <Header />
      <TodosContainer />
      <DonesContainer />
    </>
  );
}

export default App;
