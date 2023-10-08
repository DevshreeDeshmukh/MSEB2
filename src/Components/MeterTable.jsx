import React from 'react';
import { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
export const MeterTable = () => {
  const defaultMaterialTheme = createTheme();

  const [tableData,setTableData]=useState([
    {zonename:"Zone 1",kWh:"98890",MD_kW:"",kVAH:"142602",kVA_MD:"45.7",RkVAH:"",pf:"",anamoly:""}
  ])

  const columns=[
    {title:"Zones",field:"zonename"},
    {title:"kWh",field:"kWh"},
    {title:"MD kW",field:"MD_kW"},
    {title:"kVAH",field:"kVAH"},
    {title:"kVA MD",field:"kVA_MD"},
    {title:"RkVAH",field:"RkVAH"},
    {title:"Pf",field:"pf"},
    {title:"Anamoly if any",field:"anamoly"},

    
    
  ]
  return (
    <div className='Table1'>
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
      options={{paging:false, actionsColumnIndex:-1}}/>
      </ThemeProvider>
    </div>
    // <div className="table-wrapper">
    // <table className="table">
    //   <thead>
    //           <tr>
    //               <th>Zones</th>
    //               <th>kWh</th>
    //               <th> MD kW</th>
    //               <th>kVAH</th>
    //               <th> kVA MD</th>
    //               <th>RkVAH</th>
            // <th>pf</th>
            // <th>anamoly</th>
    //               <th>Actions</th>
    //           </tr>
    //   </thead>
    //   <tbody>
    //       {
    //           rows.map((row,idx)=>{
    //               return <tr key={idx}>
    //                   <td className="expand">{row.zonename}</td>
    //                   <td>{row.kWh}</td>
    //                   <td>{row.MD_kW}</td>
    //                   <td >{row.kVAH}</td>
    //                   <td>{row.kVA_MD}</td>
    //                   <td>{row.RkVAH}</td>
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
