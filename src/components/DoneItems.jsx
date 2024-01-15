const DoneItem = ({ item, handleChangeStatus }) => {

    return (
        <div className="item">

        <p>{item.text}</p>
        <button onClick={() => handleChangeStatus(item.id)}>↻ </button>
        </div>
    )
}

export default DoneItem