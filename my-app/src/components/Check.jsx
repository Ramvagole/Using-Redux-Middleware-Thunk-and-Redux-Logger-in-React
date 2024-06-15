import { useContext } from "react";
import { data } from "./Creater";
import { Navigate } from "react-router-dom";
export function Check({children}){
    let {log}=useContext(data)
    console.log(log)
    return(
        <>
        {(log)?children:<Navigate to="/login"/>}
        </>
    )
}