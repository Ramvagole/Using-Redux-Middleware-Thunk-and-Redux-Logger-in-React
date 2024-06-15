
export function fetchData(a,setLog,setVal){
    fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(a)
      }).then((e)=>e.json()).then((e)=>{setLog(e)
        console.log(e)
        setVal({email:"",password:""})
      })
}

export function display(disp){
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz").
    then((res)=>res.json()).
    then((res)=>{
        disp({type:"All",payload:res.data})
    })
}