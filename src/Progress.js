import React,{useState,useEffect} from 'react';
import Done from './Done';
import ChildTask from './ChildTask';

function Progress({props}){

    
    const [proList,setProList]=useState([]);
    
  
    useEffect(handleProList,[props])

    function handleProList(){
        const proListTemp=[...proList];
    proListTemp.push(props);
    setProList(proListTemp);
    }

    function deleteProList(index){
        const proListTemp=[...proList];
    proListTemp.splice(index,1);
    setProList(proListTemp);

    }

    const [doneList,setDoneList]=useState([]);


    function addDoneList(item){
        const doneListTemp =[...doneList];
        doneListTemp.push(item);
        setDoneList(doneListTemp);
        
    }



    return(<div className="pro-done">

        <div className='progress'>
        <h1 className='progress-heading heading'>Progrss List</h1>
        <div>
            {handleProList}
            {proList.map((item,index)=><div>
                <div>{index+1}</div>
                <div>{item}</div>
                <ChildTask/>

                <input type="checkbox"
                onChange={()=>{addDoneList(item)}}
                ></input>
                
                <button  onClick={deleteProList}>Delete</button>
                </div>)}
 
        </div>
        
            
        </div>

        <Done props1={doneList}/>

        


        

    </div>)
}

export default Progress;