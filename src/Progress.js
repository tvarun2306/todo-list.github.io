import React,{useState,useEffect} from 'react';

function Progress({props}){

    
    const [proList,setProList]=useState([]);
    
    useEffect(handleProList,[props])
    function handleProList(){
        const proListTemp=[...proList];
    proListTemp.push(props);
    setProList(proListTemp);


    }
    

    return(<div className="progress">
        <h3>Progrss List</h3>
        <div>
            {handleProList}
            {proList.map((item,index)=><div>{item}</div>)}
 
        </div>

    </div>)
}

export default Progress;