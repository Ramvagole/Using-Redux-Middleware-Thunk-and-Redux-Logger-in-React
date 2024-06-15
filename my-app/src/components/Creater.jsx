import { createContext, useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { fetchData ,display} from "./getValue"
export let data=createContext()
export function Creater({children}){
    let [a,setVal]=useState({email:"",password:""})
    let [log,setLog]=useState(null)
    
    let [marks,setMarks]=useState("")
    let seleStore=useSelector(state=>state.valueStore)
    let seleb=useSelector(state=>state.b)
    let disp=useDispatch()

    function submit(){
        fetchData(a,setLog,setVal)
    }
    useEffect(()=>{
        disp(display)
    },[])
    function score(){
        let k=seleStore.data.filter((v)=>{
            return (v.correctOptionIndex===Number(seleb[v.id]))
        })
        let marks=k.length
        setMarks(marks)
        let a=document.getElementsByClassName("right")
        let b=Array.from(a)
        b.forEach((v)=>{
            v.disabled=true
        })
    }
    function reset(){
        disp({type:"no"})
        let a=document.getElementsByClassName("right")
        let b=Array.from(a)
        b.forEach((v)=>{
            v.checked=false
        })
        let c=document.getElementsByClassName("right")
        let d=Array.from(c)
        d.forEach((v)=>{
            v.disabled=false
        })
        setMarks("")
        disp({type:"nothing"})
    }
    console.log(seleb)
    return(

        <>
        
        <data.Provider value={{disp,seleStore,seleb,a,setVal,submit,log,marks,score,reset}}>
            {children}
        </data.Provider>
        </>
    )
}