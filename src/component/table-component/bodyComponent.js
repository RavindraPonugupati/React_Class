import React from 'react';
const TableBody = (props) => { 
    
    return (
        <tbody>
            {props.bodyValues && props.bodyValues.map((item,index) => 
                <tr>
                    {Object.keys(item).map((key,index) => <td>{item[key]}</td> )}
                    {/* {item.index && <td>{item.index}</td>}
                    <td>{item.name}</td>
                    <td>{item.job}</td>
                    <td>{item.role}</td> */}
                </tr>)}
        </tbody>
    );
}

export default TableBody;