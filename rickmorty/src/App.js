import './App.css';
import { Button} from "@mui/material";
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react';
import {Characters} from './Components';


function App() {

  const [bool, setLogin] = useState(true)
  

  // useEffect(()=>{
  //   getCharacters(API);
  // }, [bool]);

  // useEffect(()=>{
  //   updateSearch();
  // },[search]);

  // const updateSearch = () =>{
  //   let temp = characters.filter(v => v.name.toLowerCase().includes(search.toLocaleLowerCase()))
  //   console.log(temp);
  // }

  // const getCharacters = async (url)=>{
  //   const response = await fetch(url); 
  //   const data = await response.json();
    
  //   setCharacters(temp);
  
  // } 

  return (
  <div>
    {bool &&
    <>
    <div style={{display: "flex", flexDirection:"column", justifyContent:"center",alignItems: "center" }}>
    <Login/>
    <Button style={{margin:"20px"}} variant='contained' onClick={()=>{ setLogin(false) }} >Log In</Button>
    </div>
    </>
    }
    {!bool && <Characters/>}
  </div>
  
  );
}

export default App;
