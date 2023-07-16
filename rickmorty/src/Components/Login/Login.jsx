import React from "react";
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Divider } from '@mui/material';

const Login = () =>{

    const card = (
    
        <React.Fragment>
            <div style={{ display: "flex", flexDirection:"column", justifyContent:"center",alignItems: "center" }}>

            <Typography style={{ marginTop: "50px" }} color="DodgerBlue" variant="h4" component="h4">
                LOGIN PAGE
            </Typography>
    
            <Typography color="MediumSeaGreen" variant="string">
                Enter Your Credentials to Enter
            </Typography>

            <Divider style={{padding:"10px", marginBottom:"10px" }} variant="middle" />
            
            <TextField style={{width:"100%", marginBottom:"20px"}} id="outlined-basic" label="Email" variant="outlined" />
            
            <TextField style={{width:"100%"}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
            </div>
        </React.Fragment>
)

    return (
        <>
        {card}
        </>
    )
}

export default Login;