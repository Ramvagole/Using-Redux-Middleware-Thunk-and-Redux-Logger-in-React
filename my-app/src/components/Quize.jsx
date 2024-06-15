import { useContext } from "react"
import { data } from "./Creater"
export function Quize(){
    let {disp,seleStore,score,marks,reset}=useContext(data)
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
                                    <input className="right" type="radio" value={p} name={v.id} onChange={(e)=>disp({type:"Submit",id:e.target.name,payload:e.target.value})}/>
                                    <label>{f}</label>
                                </div>
                                
                                </>
                            )
                        })
                    }
                    {(marks)?<h1 style={{color:"green"}}>Answer:{v.options[v.correctOptionIndex]}</h1>:""}
                </div>
               )
            })
        }
        <button onClick={score}>Submit</button>
        <h1>Score:{marks}</h1>
        {(marks)?<button onClick={reset}>Reset</button>:""}
        </>
    )
}