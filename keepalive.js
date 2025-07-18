
let applications = [
    "https://keepalive-69dr.onrender.com/keepalive",
    "https://quwad.onrender.com",
    "https://todo-backend-6cpu.onrender.com",
    "https://careerda-backend.onrender.com",
    "https://buyhomenest.onrender.com"
]

async function keepAlive(){
    setInterval(()=>{
        applications.map(async (url,index)=>{
            let response = await fetch(url,{
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            try {
                let data = await response.json();
                console.log(index, " ", url, data);
            } catch (error) {
                console.log(index, " ", url, "Error",error)
            }
        });
    },840000);
}

export default keepAlive