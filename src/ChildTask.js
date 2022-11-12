import React ,{useState} from 'react';

function ChildTask(){
    
    const [count,setCount]=useState(0);
    const [task,setTask]=useState();
    const [taskList,setTaskList]=useState([]);

    function addTask(){
        const taskListTemp=[...taskList];
        taskListTemp.push(task);
        setTaskList(taskListTemp);
    }
    function deleteTask(index){
        const taskListTemp=[...taskList];
        taskListTemp.splice(index,1);
        setTaskList(taskListTemp);
    }

    return(<div>

        <div>
        <div>
                {taskList.map((item,index)=><div>
                
                <div>{index+1+". "}{item}</div>
                <input type="checkBox"
                onChange={()=>{setCount(count+1);} }
                
                ></input>
                </div>)}
                </div>
                <input type="text"
                value={task}
                onChange={(e)=>{setTask(e.target.value)}}
                ></input>
                
                <div>{count+" /"}{taskList.length}</div>
                <button onClick={addTask}>Add Tasks</button>
                <button onClick={deleteTask}>Remove</button>
                

        </div>


    </div>)
}

export default ChildTask;
