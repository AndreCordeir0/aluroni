import './App.css';
import GlobalStyle from './GlobalStyle';
import Cardapio from './pages/Cardapio/Cardapio'; 
import { Header } from 'pages/Cardapio/Header/Header';
import { InputPesquisa } from 'pages/Cardapio/InputPesquisa/InputPesquisa';
import { useEffect, useState } from 'react';

function App() {
  const [valorInput,setValorInput] = useState('');
  useEffect(()=>{
    console.log('Algo mudou');
    
  },[valorInput])
  return (
    <>
    <Header />
    <InputPesquisa valorInput={valorInput} setValorInput={setValorInput}/>
  <div>
    <Cardapio/>
  </div>
    <GlobalStyle/>
    </>
  );
}

export default App;
