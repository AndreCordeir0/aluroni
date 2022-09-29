import React, { useState } from 'react';
import { ItemCardapio } from './ItemCardapio';
// import { Container } from './styles';

export default function Cardapio() {
  const [valor,setValor] = useState(0);
  return (
    <>
      <ItemCardapio>
        {valor}
        <button onClick={()=>setValor(valor + 1)}>Click me</button>
      </ItemCardapio>
      <div />
    </>
  );
}

