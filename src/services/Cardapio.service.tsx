import axios from "axios";
export async function CardapioService(){
    const url = "http://localhost:8080"

    await axios.get(`${url}/cardapio`)
    .then(response=>{
        console.log(response);
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    })

}
