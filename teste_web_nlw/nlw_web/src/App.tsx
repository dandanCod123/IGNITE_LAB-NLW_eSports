import { useEffect, useState } from 'react';
import './styles/global.css';
import logoImg from './assets/Logo.png';
import {GameController, MagnifyingGlass} from 'phosphor-react'
import { GamerBanner } from './components/GamerBanner';
import { CreatAdBanner } from './components/CreatAdBanner';

import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './components/Form/Input';

function App() {
const [games,setGames] = useState<Game[]>([]);

interface Game {
  id:string;
  title:string;
  bannerUrl: string;
  _count:{
    ads:number;
  }
}

useEffect(() => {
  fetch('http://localhost:3333/games')
  .then(response => response.json())
  .then(data => {
    setGames(data)
  })
},[])

  return (
   <div className='max-w-[1334px]
    mx-auto 
    flex flex-col 
    items-center
    my-20'>
     <img src={logoImg}></img>

     <h1 className='text-6xl text-white font-black'>
       SEU <span className='text-transparent bg-nlw-gradient bg-clip-text'> DUO</span> ESTA AQUI
     </h1>
   
   <div className='grid grid-cols-6 gap-6 mt-16'> 

    
    {/*GAMES*/ }

    {games.map(game => {
      return(
        <GamerBanner
        key={game.id} 
        title={game.title} 
        bannerUrl={game.bannerUrl} 
        asdCount={game._count.ads}
        />   
      )
    })}
    
 

</div>
<Dialog.Root>
<CreatAdBanner/>

<Dialog.Portal>
  <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
  
  <Dialog.Content className='fixed bg-[#2A2634] 
  py-8 px-10 
  text-white top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 
  rounded-lg w-[480px] 
  shadow-lg shadow-black/25'>

    <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
  



 <form className='mt-8 flex flex-col gap-4'>
   <div className='flex flex-col gap-2'>
     <label htmlFor='game' className='font-semibold'>Qual o Game</label>
     <Input id="game" 
     placeholder='Selecione o game que deseja jogar'/>
   </div>

   <div className='flex flex-col gap-2'>
     <label htmlFor='name'>Seu Nome(NickName)</label>
     <Input id='name' placeholder='Como se Chama dentro do game?'/>
   </div>

   <div className='grid grid-cols-2 gap-6'>
     <div className='flex flex-col gap-2'>
       <label htmlFor='YearsPlaying'>Joga a quantos anos ?</label>
       <Input id='yearsPlaying' type="number" placeholder='tudo bem ser ZERO'/>
     </div>

     <div className='flex flex-col gap-2'>
       <label htmlFor='discord'> Qual seu Discord ?</label>
       <Input id='discord' type='text' placeholder='Usuario#0000'/>
   </div>
   </div>

   <div className='flex gap-6'>
     <div className='flex flex-col gap-2'>
       <label htmlFor='weekDays'>Quando costuma jogar ?</label>
     
       <div className='grid grid-cols-4 gap-2'>
       <button title='Domingo' className='w-8 h-8 rounded bg-zinc-900'>D </button>
       
       <button title='Segunda' className='w-8 h-8 rounded bg-zinc-900'>S</button>
       
       <button title='Terça'  className='w-8 h-8 rounded bg-zinc-900'>T</button>
       
       <button title='Quarta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
       
       <button title='Quinta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
       
       <button title='Sexta' className='w-8 h-8 rounded bg-zinc-900'>S</button>
       
       <button title='Sábado' className='w-8 h-8 rounded bg-zinc-900'>S</button>
     </div>
     </div>
     
     <div className='flex flex-col gap-2 flex-1'>
       <label htmlFor='hoursStart'>Qual seu horario do dia </label>
       <div className='grid grid-cols-2 gap-2'>
         <Input id='hourStart' type='time' placeholder='De'/>
         <Input id='hoursEnd' type='time' placeholder='Até'/>
       </div>
     </div>
   </div>

   <div className='mt-2 flex gap-2 text-sm'>
   <Input type={'checkbox'}/>
   Costumo me conectar ao chat de voz
   </div>

   <footer className='mt-4 flex justify-end gap-4'>
     < Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 font-semibold'>Cancelar</Dialog.Close>
     <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 houver:bg-violet-900'>
       <GameController className='w-6 h-6'/>
       Encontrar DUO
     </button>
   </footer>
   
 </form>

</Dialog.Content>

</Dialog.Portal>

</Dialog.Root>

</div>

  )
}

export default App
