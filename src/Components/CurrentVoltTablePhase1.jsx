import React from 'react';
import { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
export const CurrentVoltTablePhase1 = () => {
  const defaultMaterialTheme = createTheme();

  const [tableData,setTableData]=useState([
    {CVmeasure:"Zone 1",current:"98890",voltage:"",frequency:"142602"}
  ])

  const columns=[
    {title:"Current and Volt measurement",field:"CVmeasure"},
    {title:"Current",field:"current"},
    {title:"Voltage",field:"voltage"},
    {title:"Frequency",field:"frequency"},
  ]
  return (

    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable columns={columns} data={tableData} 
      editable={{
        onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
          
          setTableData([...tableData,newRow])
          resolve()
        }),
        onRowUpdate:(newRow,oldRow)=> new Promise((resolve,reject)=>{
          const updatedData=[...tableData];
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
    // <table className="table">
    //   <thead>
    //           <tr>
    //               <th>Current and Volt measurement</th>
    //               <th>Current</th>
    //               <th>Voltage</th>
    //               <th>Frequency</th>
    //               <th>Actions</th>
    //           </tr>
    //   </thead>
    //   <tbody>
    //       {
    //           rows.map((row,idx)=>{
    //               return <tr key={idx}>
    //                   <td className="expand">{row.CVmeasure}</td>
    //                   <td>{row.current}</td>
    //                   <td>{row.voltage}</td>
    //                   <td >{row.frequency}</td>
    //                   <td >
    //                   <span className='actions'>
          
    //                       <BsFillTrashFill className='delete-btn' onClick={()=>deleteRow(idx)}/>
                  
    //                       <BsFillPencilFill className='edit-btn' onClick={()=>editRow(idx)}/>
    //                   </span>
    //               </td>
    //               </tr>
    //           })
    //       }   
    //   </tbody>
    // </table></div>

  )
}
