import { Button, Input } from "@mui/material";
import { useEffect, useState } from 'react';
import Table from "../Table/Table";

const Characters = () =>{

    const API = "https://rickandmortyapi.com/api/character/"

    useEffect( ()=> {
        getCharacters(API);
    },[])

    const [nextUrl,setNext] = useState("")
    const [prevUrl,setPrev] = useState("")
    
    const [characters, setCharacters] = useState([])

    const getCharacters = async (url)=>{
        const response = await fetch(url); 
        const data = await response.json();
        console.log("res",data);
        
        try{
            setCharacters(data.results)
        }
        catch(e)
        {
            console.error(e)
            setCharacters(null)
        }
        try{
        setNext(data.info.next)
        }
        catch(e)
        {
            console.error(e)
            setNext(null)
        }

        try{
        setPrev(data.info.prev)
        }
        catch(e)
        {
            console.error(e)
            setPrev(null)
        }
        console.log("Buttons",setNext,setPrev);
    }

    // const updateList = (search) =>{
    //     console.log("sss",characters);
    //     let temp = characters.filter(v => v.name.toLowerCase().includes(search.toLocaleLowerCase()))
    //     setList(temp)
    //     console.log("temp",temp);
    // }

    return (
        <>
        <div style={{ display: "flex", justifyContent:"center",alignItems: "center", margin:"30px"}}>
        <Input variant = 'standard' placeholder="Enter Search" onChange={(e) => {getCharacters(`${API}?name=${e.target.value}`)} }/>
        </div>
        { characters!=null ? <Table characters={characters}/>: <div> </div> }
        <div style={{ flexDirection:"row", display: "flex", justifyContent:"center",alignItems: "center", margin:"30px"}}>
        { prevUrl!=null? <Button onClick={ ()=>{getCharacters(prevUrl)}} style={{ marginRight:"20px" }} variant="outlined" >Previous</Button>: <Button style={{ marginRight:"20px" }} disabled={true} >Previous</Button>}
        { nextUrl!=null? <Button onClick={ ()=> {getCharacters(nextUrl)}} variant="contained">Next</Button>: <Button  disabled={true} >Next</Button> }
        </div>
        </>
    )
}


export default Characters