 
import React from 'react';
import './Table.css';

function StateData({states}) {
    return (
        // <div className="table">
        // {console.log(states)}
            
        //    {states.map((state,active)=>(
        //       <tr>
        //           <td>{state}</td>
        //           <td><strong>{active}</strong></td>
        //       </tr>
        //    ))} 
        //  </div>
        
        <div className="table1">
            <tr>
                 <td><b>State</b></td>
                 <td><b>Active Cases</b></td>
                 
             </tr>
         
          {states.map(({ state,active})=>(
               <tr>
                 <td>{state}</td>
                 <td>{active}</td>
                 
             </tr>
          ))} 
        </div>
    );
}

export default StateData;