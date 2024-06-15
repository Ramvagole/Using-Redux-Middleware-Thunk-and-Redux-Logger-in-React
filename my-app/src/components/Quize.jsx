import { useContext } from "react"
import { data } from "./Creater"
export function Quize(){
    let {seleStore,c,setCheck,score,marks}=useContext(data)
    return(
        <>

        <h1>quize</h1>
        {
            seleStore.data.map((v,i)=>{
               return(
                <div key={i} style={{border:"1px solid black",marginTop:"25px"}}>
                    <h1>{v.question}</h1>
                    {
                        v.options.map((f,p)=>{
                            return(
                                <>
                                <div key={p} style={{textAlign:"justify"}}>
                                    <input type="radio" value={p} name={v.id} onChange={(e)=>setCheck({...c,[e.target.name]:e.target.value})}/>
                                    <label>{f}</label>
                                </div>
                                
                                </>
                            )
                        })
                    }
                    {(marks)?<h2 style={{color:"green"}}>Answer:{v.options[v.correctOptionIndex]}</h2>:""}
                </div>
               )
            })
        }
        <button onClick={score}>Submit</button>
        <h1>Score:{marks}</h1>
        </>
    )
}