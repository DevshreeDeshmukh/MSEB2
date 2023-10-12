import React, { useState } from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';

export const Table = () => {
  const defaultMaterialTheme = createTheme();

  const [tableData,setTableData]=useState([
    {eqname:"FAN",quantity:"9",capacity:"0.06",munit:"KW",totLoad:".54",loadKW:".54"}
  ])

  const columns=[
    {title:"Equipment Name",field:"eqname"},
    {title:"Quantity",field:"quantity"},
    {title:"Capacity",field:"capacity"},
    {title:"Measurment Unit",field:"munit"},
    {title:"Total Load",field:"totLoad"},
    {title:"Load in KW",field:"loadKW"}
  ]
  return (

    <div className="Table1">
       <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable columns={columns} data={tableData} 
      title={"Details of Connected Load"}
      editable={{
        onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
          newRow.totLoad=Number(newRow.quantity)*Number(newRow.capacity);
          newRow.loadKW=newRow.totLoad;
          setTableData([...tableData,newRow])
          resolve()
        }),
        onRowUpdate:(newRow,oldRow)=> new Promise((resolve,reject)=>{
          const updatedData=[...tableData];
          newRow.totLoad=Number(newRow.quantity)*Number(newRow.capacity);
          newRow.loadKW=newRow.totLoad;
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
      options={{paging:false, actionsColumnIndex:-1}}/>
      </ThemeProvider>
    </div>
    // <div className="table-wrapper">
    //   <table className="table">
    //     <thead>
    //             <tr>
    //                 <th>Equipment Name</th>
    //                 <th>Quantity</th>
    //                 <th>Capacity</th>
    //                 <th>Measurment Unit</th>
    //                 <th>Total Load</th>
    //                 <th>Load in KW</th>
    //                 <th>Actions</th>
    //             </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             rows.map((row,idx)=>{
    //                 return <tr key={idx}>
    //                     <td className="expand">{row.eqname}</td>
    //                     <td>{row.quantity}</td>
    //                     <td>{row.capacity}</td>
    //                     <td >{row.munit}</td>
    //                     <td>{row.totLoad}</td>
    //                     <td>{row.loadKW}</td>
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