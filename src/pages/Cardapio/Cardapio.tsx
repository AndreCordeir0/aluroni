import React, { useState } from 'react';
import { Item } from './Item/Item';
import { ItemCardapio } from './ItemCardapio';
// import { Container } from './styles';

export default function Cardapio() {
  return (
    <>
      <ItemCardapio>
        <Item/>
      </ItemCardapio>      
    </>
  );
}

