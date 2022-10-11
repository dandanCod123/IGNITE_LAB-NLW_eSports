interface GameBannerProps {
    bannerUrl: string,
    title:string,
    asdCount:number,
}


export function GamerBanner(props:GameBannerProps){
    return(
        <a href='' className='relative'>
        <img src={props.bannerUrl}/>
 
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white'>{props.title}</strong>
     <span className='text-zinc-300 text-sm block'>{props.asdCount} anuncio(s)</span>
    </div>
      </a>
    );
}