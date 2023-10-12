import React from 'react';
import { useState } from "react";
// import { makeStyles } from '@mui/material';
import { Typography, Card, CardContent, Grid, Select,MenuItem,
  TextField,FormControl,InputLabel } from "@mui/material";
// import "./App.css";
import { Table } from "./Table";
import { MeterTable } from "./MeterTable";
import { CurrentVoltTable } from "./CurrentVoltTable";
import { Button } from '../styles/Button';
import Other from './Other';
import Inspection from './Inspection';
import Form_Phase1  from './Form_Phase1';
function Form(){

// Select Values
const [meterin, setMeterIn] = useState('');

const handleChangeYN = (event) => {
  
  setMeterIn(event.target.value);
  
};

const [externalct, setExternalct] = useState('');

const handleChangeYN1 = (event) => {
  setExternalct(event.target.value);
};



    return(
    
<React.Fragment>
<div>
      

      <Card style={{maxWidth:"500",padding:"40px 5px"}}>
        <CardContent>
        <form>
        {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
          <Grid container spacing={2}>
          <Grid xs={4} sm={3} item>
              <TextField label="Serial Number" placeholder=" " name="serialNumber"varient="outlined" fullWidth required />
            </Grid>
{/* theftDetectedBy */}
            <Grid xs={4} sm={3} item>
              <TextField label="Flying Squad Unit" placeholder="Enter Flying Squad Unit " name="flyingSquadUnit" varient="filled" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Theft Detected By" placeholder="Theft Detected By" name="theftDetectedBy" varient="filled" fullWidth required />
            </Grid>
            <Grid xs={3}  sm={2}  item>
              <TextField label="Place" placeholder="Enter place " name="place" varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item  >
              <TextField label="Consumer Number"  type="number"placeholder="Enter Consumer Number"  name="consumerNumber"varient="outlined" fullWidth required />
            </Grid>
           

            <Grid xs={12} sm={6} item  >
              <TextField label="BU Number"  type="number"placeholder="Enter BU Number"  name="buNumber"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="name"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField  type="text"label="Address" placeholder="Enter Consumer Address" name="address" varient="outlined" multiline rows={4} fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="nameOfOwner"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="contactNumber" varient="outlined" fullWidth  />
            </Grid>

           


            <Grid xs={4} sm={3} item>
              <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="category"varient="outlined" fullWidth required />
            </Grid>
            
            <Grid xs={4} sm={3}item>
              <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="typeOfInstallation"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariffDetails"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3}item>
              <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="sanctionedLoad"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="connectedLoad"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={4} sm={3}item>
              <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normalWorkingHours"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="nameOfBillingOffice"varient="outlined" fullWidth required />
            </Grid>

             </Grid>

            <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Details</Typography>
            <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
        <FormControl fullWidth>
          <InputLabel id="meter-installed-select-label">Whether meter installed in meter box or not</InputLabel>
          <Select labelId="meter-installed-select-label" 
          label="Whether meter installed in meter box or not"
          id="meter-installed"
          value={meterin}
          onChange={handleChangeYN}
          required>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        
          </Select>
          

        </FormControl>
        </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Serial No. As per Bill" placeholder="Enter Meter Serial No. As per Bill"  name="meterSerialNumber"variant="outlined" fullWidth required/>
          </Grid>
          
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Make" placeholder="Enter Meter Make" variant="outlined" name="make" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Capacity in Amp" placeholder="Enter Meter Capacity in Amp" name="capacity" variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="External CT ratio if any" placeholder="Enter External CT ratio" name="externalCtRatio"variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Lab No." placeholder="Enter Lab No." variant="outlined" name='labNo'fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Type" placeholder="Enter Type" variant="outlined" name='type' fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Rev, Imp/Wh" placeholder="Enter Rev, Imp/Wh" variant="outlined" name='revImpKwh'fullWidth required/>
          </Grid>
         

          <Grid xs={12} sm={6} item>
          <TextField label="meter CT ratio" placeholder="Enter Meter CT Ratio" variant="outlined" name='meterCTRatio'fullWidth required/>
          </Grid>
         
          <Grid xs={12} sm={6} item>
          <TextField label="MF as per bill" placeholder="Enter Meter Make" variant="outlined" fullWidth required/>
          </Grid>
  
          </Grid>
          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Reading</Typography>
          <Grid xs={12} sm={9} item style={{marginBottom:20}}>
              <MeterTable/>
          </Grid>
          <Grid container spacing={2}>
          
         
          <Grid xs={12} sm={6} item>
          <TextField label="Scale Factor" placeholder="Enter  Scale Factor" variant="outlined" name='scaleFactor' fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Over all MF for units" placeholder="Enter  Over all MF for units" name='overallMFForUnit' variant="outlined" fullWidth required/>
          </Grid>
          <Other/>
          </Grid>
          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Current and Volt Measurement</Typography>
          
          <Grid xs={12} sm={9} item>
            <CurrentVoltTable/>
          </Grid>

          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>XII General Observations</Typography>


<Grid container spacing={2}>
     <Grid xs={4} sm={3} item  >
           <TextField label="Meter Capacitor is Installed"  placeholder=""  name="capacitorInstalled"varient="outlined" fullWidth required />
     </Grid>

     <Grid  sm={4} item  >
           <TextField label="If Yes Whether capacity is adequate or not "  placeholder=""  name="adequateOrNot"varient="outlined" fullWidth required />
     </Grid>

     <Grid xs={3} sm={2} item  >
           <TextField label="Meter installed at"  placeholder=""  name="meterInstalledAt"varient="outlined" fullWidth required />
     </Grid>

     <Grid  xs={4} sm={3} item  >
           <TextField label="Meter installed at eye sight"  placeholder=""  name="meterInstalledAtEyesight"varient="outlined" fullWidth required />
     </Grid>
    
     <Grid xs={3} sm={2} item  >
           <TextField label="Other Observation if any"  placeholder=""  name="otherObservations"varient="outlined"  />
     </Grid>


</Grid>

          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Details of Connected Loads</Typography>
          

          
          <Grid xs={12} sm={9} item>
          
              <Table/>
              
          </Grid>
          
          <Grid container spacing={3} style={{marginTop:"20px"}}>
          <Grid xs={4} sm={3} item  >
           <TextField label="Whether Meter / Service kept under Observation?"  placeholder=""  name="whetherMeterServiceKeptUnderObservation"varient="outlined" fullWidth required />
          </Grid>

     <Grid  sm={4} item  >
           <TextField label="If Yes, Justify"  placeholder=""  name="cap_adequate"varient="outlined" fullWidth required />
     </Grid>
     </Grid>
            <Inspection/>

          <Grid xs={12} item style={{marginTop:"20px"}}>
              <Button type="submit" varient="contained" color="primary" fullWidth>Submit</Button>
          </Grid>
        
          </form>
        </CardContent>

      </Card>
      
      
    </div>


</React.Fragment>



    );
} 
export default Form;