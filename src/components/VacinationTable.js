import React from 'react';
import './Table.css';

function VacinationTable({timeline}) {
    return (
        <div className="table1">
         {console.log(timeline)}
         {<tr>
                <td ><b>Total</b></td>
                <td><b>Daily</b></td>
                <td ><b>Date</b></td>
                 </tr>
              } 
           {timeline.map(({total,daily,date})=>(
                <tr>
                  <td>{total}</td>
                  <td>{daily}</td>
                  <td type="date">{date}</td>
              </tr>
           ))} 
         </div>
    );
}
export default VacinationTable;