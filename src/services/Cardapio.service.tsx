import axios from "axios";
export function CardapioService(){
    axios.get('https://api.github.com/users/AndreCordeir0', { params: { answer: 42 } }).then(response=>{
        console.log(response);
    })
}