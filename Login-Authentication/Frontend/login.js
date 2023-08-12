import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Stack } from '@mui/material'
const Login = () => {
    const [name,setname]=useState([])
    const [pass,setpass]=useState([])
    const Navigate=useNavigate()
    const Submit=async()=>{
        try{
            const res=await axios.get("http://localhost:8000/check/"+name+"/"+pass)
            if(res.data){
              Navigate('/Login/success',{state:{name:name}})
            }
            else{
              alert("Incorrect Credentials")
            }
        }
        catch(e)
      {
         alert(e);
      }

    }
  return (
    <div>
       <div>
        <Card sx={{borderRadius:'16px',height:'400px',width:'450px',margin:'auto',marginTop:'10%'}}>
        <CardContent>
        <Stack spacing={2} direction='column' >
        <label style={{textAlign:'center',fontSize:'30px',color:'blue'}}><b>Log In</b></label>
        <input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)} style={{width:'400px',height:'50px',marginTop:'10px'}}/>
        <br/>
        <input type="password" placeholder="password" onChange={(e)=>setpass(e.target.value)} style={{width:'400px',height:'50px'}}/>
        <br/>
        <input type="submit" onClick={Submit} style={{width:'410px',height:'50px'}}/>
        </Stack>
        </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default Login