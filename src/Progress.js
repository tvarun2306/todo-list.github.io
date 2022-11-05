import React,{useState} from 'react';

function Progress({props}){

    // const [pro,setPro]=useState(props);
    const [proList,setProList]=useState([]);
    
    const proListTemp=[...proList];
    proListTemp.push(props);
    setProList(proListTemp);


    return(<div class="progress">
        <h3>Progrss List</h3>
     {proList}

    </div>)
}

export default Progress;