import DoneItem from "./DoneItems.jsx"

const DonesContainer = ({items, handleChangeStatus }) => {

    return (
        <>

        <h3>Done</h3>
        {items.map((item) => {
            return (
                <DoneItem item = {item} key = {item.id} handleChangeStatus={handleChangeStatus}/>
            )
        })}
        
        
        </>
    )
}

export default DonesContainer