import React from 'react';
import { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';

export const ConnectedLoadPhase1 = () => {
  const defaultMaterialTheme = createTheme();

  const [tableData,setTableData]=useState([
    {eqname:"Zone 1",nos:"98890",watt:"",totwatt:"142602"}
  ])

  const columns=[
    {title:"Equipment Name",field:"eqname"},
    {title:"Nos.",field:"nos"},
    {title:"Watt",field:"watt"},
    {title:"Total Watt",field:"totwatt"},
  ]
  return (

    <div>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable columns={columns} data={tableData} 
      editable={{
        onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
          newRow.totwatt=Number(newRow.nos)*Number(newRow.watt);
          setTableData([...tableData,newRow])
          resolve()
        }),
        onRowUpdate:(newRow,oldRow)=> new Promise((resolve,reject)=>{
          const updatedData=[...tableData];
          newRow.totwatt=Number(newRow.nos)*Number(newRow.watt);
          updatedData[oldRow.tableData.id]=newRow
          
          setTableData(updatedData)
          resolve()
        }),
        onRowDelete:(selectedRow)=> new Promise((resolve,reject)=>{
          const updatedData=[...tableData];
          updatedData.splice(selectedRow.tableData.id,1)
          setTableData(updatedData);
          resolve()
        })
      }}
      options={{paging:false, actionsColumnIndex:-1,showTitle:false}}/>
      </ThemeProvider>
    </div>
    // <div className="table-wrapper">
    //   <table className="table">
    //     <thead>
    //             <tr>
    //                 <th>Equipment Name</th>
    //                 <th>Nos.</th>
    //                 <th>Watt</th>
    //                 <th>Total Watt</th>
    //                 <th>Actions</th>
    //             </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             rows.map((row,idx)=>{
    //                 return <tr key={idx}>
    //                     <td className="expand">{row.eqname}</td>
    //                     <td>{row.nos}</td>
    //                     <td>{row.watt}</td>
    //                     <td >{row.totwatt}</td>
                        
    //                     <td >
    //                     <span className='actions'>
            
    //                         <BsFillTrashFill className='delete-btn' onClick={()=>deleteRow(idx)}/>
                    
    //                         <BsFillPencilFill className='edit-btn' onClick={()=>editRow(idx)}/>
    //                     </span>
    //                 </td>
    //                 </tr>
    //             })
    //         }   
    //     </tbody>
    //   </table>
    // </div>
  );
};