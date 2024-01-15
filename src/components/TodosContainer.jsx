import TodoItems from "./TodoItems.jsx";

const TodosContainer = ({ items, handleAddTodo, handleChangeStatus }) => {
  // console.log(items);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);

    handleAddTodo(event.target.elements.text.value);
    event.target.elements.text.value = "";
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} name="text">
        <input type="text" name = "text" required placeholder="Write your todo" />
        <input type="submit" value="ADD" />
      </form>

      <div>
        <h3>TO DO</h3>
        {items.map((item) => {
          return <TodoItems item={item} key={item.id} handleChangeStatus = {handleChangeStatus}/>;
        })}
      </div>
    </div>
  );
};

export default TodosContainer;
