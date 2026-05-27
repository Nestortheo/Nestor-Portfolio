
export async function sendContact(payload:any){
    const res = await fetch("api/contact",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payload)
    })

    const data = await res.json()
    console.log("data ->",data)

    if(!res.ok){
        throw new Error(data.message)
    }
    return data;
}