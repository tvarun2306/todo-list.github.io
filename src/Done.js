import React,{useEffect, useState} from 'react';

function Done({props1}){


    

    const [doneList,setDoneList]=useState(props1);
    function updateList(){
        setDoneList(props1);
    }

    function deleteProp(index){
        const doneListTemp=[...doneList];
        doneListTemp.splice(index,1);
        setDoneList(doneListTemp);

    }

    function deleteList(index){
        const empty=[];
        doneList=empty;

    }

    
    

    return(<div className='done'>

<h1 className='done-heading heading'>Done</h1>
<div className='doneList'>
    <button
    onClick={updateList}
    >Ref</button>
    <button
    onClick={deleteList}
    >Del List</button>

    {doneList.map((item,index)=><div>
        <div>
            {index+" "}{item}</div>

        <button
        onClick={deleteProp}
        >del</button>
        </div>)}
    


</div>
    </div>)
}

export default Done; 
