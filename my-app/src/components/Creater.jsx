import { createContext, useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { fetchData ,display} from "./getValue"
export let data=createContext()
export function Creater({children}){
    let [a,setVal]=useState({email:"",password:""})
    let [log,setLog]=useState(null)
    let [c,setCheck]=useState({})
    let [marks,setMarks]=useState("")
    let seleStore=useSelector(state=>state.valueStore)
    let seleb=useSelector(state=>state.b)
    let disp=useDispatch()

    function submit(){
        fetchData(a,setLog,setVal)
    }
    useEffect(()=>{
        display(disp)
    },[])
    function score(){
        let b=seleStore.data.map((v,i)=>{
            return {correctOptionIndex:v.correctOptionIndex,id:v.id}
        })
        console.log(b)
        let k=seleStore.data.filter((v)=>{
            return (v.correctOptionIndex==c[v.id])
        })
        console.log(k)
        let marks=k.length
        setMarks(marks)
    }
    console.log(c)
    return(

        <>
        
        <data.Provider value={{disp,seleStore,seleb,a,setVal,submit,log,c,setCheck,score,marks}}>
            {children}
        </data.Provider>
        </>
    )
}