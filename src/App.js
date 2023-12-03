import './App.css';
import { useState } from 'react'
import { Task } from './Task';

const App = () => {

    const [task, setTask] = useState('')
    const [list, setList] = useState([]);    

    const taskText = (event) => {
        setTask(event.target.value)
    }

    const updateList = () => {
        if (task.length > 0) {
            const updatedList = list;
            updatedList.push(
                {
                    id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
                    taskName: task,
                    completed: false,
                }
            );
            setList(updatedList);            
            document.getElementById('text').value = '';
            setTask('');
        }
        else {
            alert('enter the input');
        }
    }

    const deleteList = (key) => {        
        setList(list.filter((name) => {
            return name.id !== key
        }));
    }

    const complete = (id) => {

        setList(
            list.map((task) => {
                if (task.id === id) {
                    return {                    
                        ...task,
                        completed: true
                    }
                }
                else{
                    return task;
                }
            })
        ) 

    }

    return (
        <div className="App">
            <div className="addTask">
                <input type="text" id='text' onChange={taskText} />
                <br />
                <button id='addtask' onClick={updateList}>Add Task</button>
            </div>
            <div className="showTask">
                {list.map((taskname) => {
                    return (
                        <Task
                            taskName={taskname.taskName}
                            deleteList={deleteList}
                            complete={complete}
                            id={taskname.id}
                            completed={taskname.completed}
                        />
                    )
                })}

            </div>
        </div>
    );
}

export default App;
