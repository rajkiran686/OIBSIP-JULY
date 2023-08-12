import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Stack } from "@mui/material";
const Signup=()=>{
    const[check,setcheck]=useState([]);
    const[name,setname]=useState([]);
    const[pass,setpassword]=useState([]);
    const Navigate=useNavigate()
    const Submit=async()=>{
        try{
        const res1=await axios.get("http://localhost:8000/valid/"+name);
            if(res1.data){
                alert(name+"  already exists please enter new user name")
            }
            else{
        const res=await axios.post("http://localhost:8000/input/"+name+"/"+pass);
        if(res)
        {
            alert("saved sucessfully!");
        }
        }
}
    catch(e)
    {
        alert(e);
    }
    }
    const click=()=>{
        Navigate('/login')
    }
    return(
        <div>
        <div>
        <Card sx={{borderRadius:'16px',height:'400px',width:'450px',margin:'auto',marginTop:'10%'}}>
        <CardContent>
        <Stack spacing={2} direction='column' >
        <label style={{textAlign:'center',fontSize:'30px',color:'blue'}}><b>Sign Up</b></label>
        <input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)} style={{width:'400px',height:'50px',marginTop:'10px'}}/>
        <br/>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} style={{width:'400px',height:'50px'}}/>
        <br/>
        <input type="submit" onClick={Submit} style={{width:'410px',height:'50px'}}/>
        </Stack>
        <label style={{marginLeft:'180px',fontSize:'30px',color:'blue'}}>(or)</label>
        <button onClick={click} style={{width:'410px',height:'50px'}}>Login</button>
        </CardContent>
        </Card>
        </div>

        
        </div>
    );
}
export default Signup;