import { useContext } from "react"
import { data } from "./Creater"
export function Login(){
    let {a,setVal,submit}=useContext(data)
    return(
        <>
        <div style={{display:"flex",flexDirection:"column",marginTop:"30px",width:"350px",height:"250px"}}>
            <input style={{minWidth:"50px",height:"30px",marginTop:"25px"}} type="text" placeholder="Enter Email.." value={a.email} onChange={(e)=>setVal({...a,email:e.target.value})}/>
            <input style={{minWidth:"50px",height:"30px",marginTop:"25px"}} type="password" placeholder="Enter Password" value={a.password} onChange={(e)=>setVal({...a,password:e.target.value})}/>
            <button style={{minWidth:"50px",height:"30px",marginTop:"20px",backgroundColor:"orange",minHeight:"50px"}} onClick={submit}>Submit</button>

        </div>
        </>
    )
}