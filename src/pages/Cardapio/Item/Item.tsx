import { CardapioService as cardapioService} from 'services/Cardapio.service';

export function Item(){
    async function funcao(){
        await cardapioService();
    }
    return(

        <div>
            <button onClick={()=>funcao()}>Clica aqui</button>
        </div>
    )
}