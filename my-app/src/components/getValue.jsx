
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

export let display=async(disp)=>{
    try{
      let a= await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")
      let b=await a.json()
      disp({type:"All",payload:b.data})
    }catch(er){
      console.log(console.log(er))
    }
}