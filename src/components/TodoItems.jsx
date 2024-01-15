const TodoItems = ({ item, handleChangeStatus }) => {

    return (
        <div>

        <p>{item.text}</p>
        <button onClick={() => handleChangeStatus(item.id)}>&#10004;</button>
        </div>
    )
}

export default TodoItems