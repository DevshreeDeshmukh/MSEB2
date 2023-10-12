import React from 'react';
import { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import MaterialTable,{MTableBody} from "material-table";
import { TableCell, TableFooter, TableRow } from "@material-ui/core";

import { ThemeProvider, createTheme } from '@mui/material';
let totArr=[0,0,0,0,0,0];
  const totalCalc = (totkWh,totMD_kW,totkVAH,totkVA_MD,totRkVAH,totpf)=>{
    totArr[0]=totArr[0]+totkWh;
    totArr[1]=totArr[1]+totMD_kW;
    totArr[2]=totArr[2]+totkVAH;
    totArr[3]=totArr[3]+totkVA_MD;
    totArr[4]=totArr[4]+totRkVAH;
    totArr[5]=totArr[5]+totpf;

  }

  const del=(totkWh,totMD_kW,totkVAH,totkVA_MD,totRkVAH,totpf)=>{
    totArr[0]=totArr[0]+totkWh;
    totArr[1]=totArr[1]+totMD_kW;
    totArr[2]=totArr[2]+totkVAH;
    totArr[3]=totArr[3]+totkVA_MD;
    totArr[4]=totArr[4]+totRkVAH;
    totArr[5]=totArr[5]+totpf;
  }
export const MeterTable = () => {
  const defaultMaterialTheme = createTheme();

  const [tableData,setTableData]=useState([
    {zonename:"Zone 1",kWh:"0",MD_kW:"0",kVAH:"0",kVA_MD:"0",RkVAH:"0",pf:"0",anamoly:"No"}
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
  

  var totkWh=0;
  var totMD_kW=0;
  var totkVAH=0;
  var totkVA_MD=0;
  var totRkVAH=0;
  var totpf=0;

  return (
    <div className='Table1'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable columns={columns} data={tableData} 
      editable={{
        onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
          setTableData([...tableData,newRow])
          totkWh=totkWh+Number(newRow.kWh);
          totMD_kW=totMD_kW+Number(newRow.MD_kW);
          totkVAH=totkVAH+Number(newRow.kVAH);
          totkVA_MD=totkVA_MD+Number(newRow.kVA_MD);
          totRkVAH=totRkVAH+Number(newRow.RkVAH);
          totpf=totpf+Number(newRow.pf);
          totalCalc(totkWh,totMD_kW,totkVAH,totkVA_MD,totRkVAH,totpf);
          resolve()
        }),
        onRowUpdate:(newRow,oldRow)=> new Promise((resolve,reject)=>{
          totkWh=totkWh-Number(oldRow.kWh);
          totMD_kW=totMD_kW-Number(oldRow.MD_kW);
          totkVAH=totkVAH-Number(oldRow.kVAH);
          totkVA_MD=totkVA_MD-Number(oldRow.kVA_MD);
          totRkVAH=totRkVAH-Number(oldRow.RkVAH);
          totpf=totpf-Number(oldRow.pf);
          del(totkWh,totMD_kW,totkVAH,totkVA_MD,totRkVAH,totpf);
          const updatedData=[...tableData];
          updatedData[oldRow.tableData.id]=newRow
          // totkWh=totkWh+Number(newRow.kWh);
          // totMD_kW=totMD_kW+Number(newRow.MD_kW);
          // totkVAH=totkVAH+Number(newRow.kVAH);
          // totkVA_MD=totkVA_MD+Number(newRow.kVA_MD);
          // totRkVAH=totRkVAH+Number(newRow.RkVAH);
          // totpf=totpf+Number(newRow.pf);
          console.log(Number(newRow.kWh),Number(newRow.MD_kW),Number(newRow.kVAH),Number(newRow.kVA_MD),Number(newRow.RkVAH),Number(newRow.pf));

          totalCalc(Number(newRow.kWh),Number(newRow.MD_kW),Number(newRow.kVAH),Number(newRow.kVA_MD),Number(newRow.RkVAH),Number(newRow.pf));
          setTableData(updatedData)
          resolve()
        }),
        onRowDelete:(selectedRow)=> new Promise((resolve,reject)=>{
          totkWh=totkWh-Number(selectedRow.kWh);
          totMD_kW=totMD_kW-Number(selectedRow.MD_kW);
          totkVAH=totkVAH-Number(selectedRow.kVAH);
          totkVA_MD=totkVA_MD-Number(selectedRow.kVA_MD);
          totRkVAH=totRkVAH-Number(selectedRow.RkVAH);
          totpf=totpf-Number(selectedRow.pf);
          const updatedData=[...tableData];
          del(totkWh,totMD_kW,totkVAH,totkVA_MD,totRkVAH,totpf);

          updatedData.splice(selectedRow.tableData.id,1)
          setTableData(updatedData);
          resolve()
        })
      }}
      options={{paging:false, actionsColumnIndex:-1,showTitle:false}}
      components={{
        Body: (props)=>(
          <>
            <MTableBody {...props}/>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={1}>Total</TableCell>
                <TableCell colSpan={1}>{totArr[0]}</TableCell>
                <TableCell colSpan={1}>{totArr[1]}</TableCell>
                <TableCell colSpan={1}>{totArr[2]}</TableCell>
                <TableCell colSpan={1}>{totArr[3]}</TableCell>
                <TableCell colSpan={1}>{totArr[4]}</TableCell>
                <TableCell colSpan={1}>{totArr[5]}</TableCell>
              </TableRow>
            </TableFooter>
          </>
        )
      }}
      />
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
