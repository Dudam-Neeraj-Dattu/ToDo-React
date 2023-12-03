export const Task = (props) => {
    return (
        <div className='taskName'>
            <div className="task">
                <h3
                    style={{
                        color: props.completed ? 'green' : 'black',
                        textDecoration: props.completed ? 'line-through' : 'none'
                    }}
                >{props.taskName}</h3>
            </div>
            <div className="buttons">
                <button onClick={() => props.deleteList(props.id)}>Delete</button>
                <button onClick={() => props.complete(props.id)} >Complete</button>
            </div>
        </div>
    )
}