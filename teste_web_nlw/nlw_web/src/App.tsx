import './styles/global.css';
import logoImg from './assets/Logo.png';
import {MagnifyingGlass} from 'phosphor-react'


function App() {

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

    
    {/*GAME 1*/ }
     <a href='' className='relative'>
       <img src='/game1.png'/>

       <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
       <strong className='font-bold text-white'>League of Legends</strong>
    <span className='text-zinc-300 text-sm block'>6 anuncios</span>
   </div>
     </a>

    
  {/*GAME 2*/ }
     <a href='' className='relative'>
       <img src='/game2.png'/>

       <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
       <strong className='font-bold text-white'>Counter Strike</strong>
    <span className='text-zinc-300 text-sm block'>12 anuncios</span>
   </div>
     </a>

     {/*GAME 3*/ }
     <a href='' className='relative'>
       <img src='/game3.png'/>

       <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
       <strong className='font-bold text-white'>Word of Craft</strong>
    <span className='text-zinc-300 text-sm block'>2 anuncios</span>
   </div>
     </a>

     {/*GAME 4*/ }
     <a href='' className='relative'>
       <img src='/game4.png'/>

       <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
       <strong className='font-bold text-white'>Dota 2</strong>
    <span className='text-zinc-300 text-sm block'>4 anuncios</span>
   </div>
     </a>

     {/*GAME 5*/ }
     <a href='' className='relative'>
       <img src='/game5.png'/>

       <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
       <strong className='font-bold text-white'>Fortnite</strong>
    <span className='text-zinc-300 text-sm block'>4 anuncios</span>
   </div>
     </a>

     {/*GAME 6*/ }
     <a href='' className='relative'>
       <img src='/game6.png'/>

       <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
       <strong className='font-bold text-white'>Apex Legends</strong>
    <span className='text-zinc-300 text-sm block'>4 anuncios</span>
   </div>
     </a>

    
</div>

<div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
  <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>

    <div>
      <strong className='text-2xl text-white font-black block'>Não encontrou seu DUO</strong>
       <span className='text-zinc-400 block'>Publique um anuncio para encontrar novos Players!!</span>
     </div>

   
     <button className='py-3 px-4 bg-violet-500 houver:bg-violet-700 text-white rounded flex items-center gap-3'>
     <MagnifyingGlass size={24}/>
     Publicar Anúncio
     ola gente
   </button>

  </div>
  </div>
</div>

  )
}

export default App
