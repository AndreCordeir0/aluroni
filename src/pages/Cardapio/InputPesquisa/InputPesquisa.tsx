import { ChangeEvent, FormEvent } from "react";

export function InputPesquisa({valorInput,setValorInput}:Props){
    function inputSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(valorInput);
        
    }
    function inputChangedHandler(event:ChangeEvent<HTMLInputElement>){
        setValorInput(event.target.value);

    }
    return(
        <form action="" onSubmit={(e)=>inputSubmit(e)}>
            <input value={valorInput} onChange={(event)=>inputChangedHandler(event)} type="text" name="input" id="input" />
            <button type="submit">Pesquisar</button>
        </form>
    )
}

type Props ={
    setValorInput:React.Dispatch<React.SetStateAction<string>>;
    valorInput:string;
}