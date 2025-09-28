import './App.css'
import face1 from './assets/images/face1.png'
import face2 from './assets/images/face2.png'
import pfp from "./assets/images/Calendula-1.png";
import symbol from './assets/images/symbol.png'
import truth from './assets/images/truth.png'
import { QuemSou} from './components/intro'
import { Info3, Info4, Info5 } from './components/conhecimentos'
import { useEffect, useState } from 'react'
import { Footer } from './components/footer';


function App() {

  const [showPfp, setShowPfp] = useState(false)

    useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPfp(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

   return (
    // Desenvolver Menu

    <main className=''>
      {/* Mostrar Foto Modal */}
        {showPfp && (
          <div  className={`fixed inset-0 flex items-center justify-center z-[9999] transition-opacity duration-500`}>
            <div className='max-w-150'>
              <button onClick={() => setShowPfp(prev => !prev)} className='absolute'>✖</button>
              <img src={pfp} alt="" className='w-150' />
            </div>
          </div>          
        )}
      
      {/* Sessão do Banner */}
      <section>
        <div>

        </div>
      </section>
      {/* Sessão do resto da Page */}
      <section className={`relative h-full w-full flex justify-start items-center flex-col bg-transparent overflow-visible before:absolute before:content-[""] before:inset-0 before:bg-[url(assets/images/background-img.jpg)] before:bg-repeat before:bg-cover before:opacity-[0.5] before:z-[-1] before:bg-center before:lg:bg-top ${showPfp ? "brightness-20" : "brightness-100"}`}>
        
        {/* 1ª Imagem Separadora */}
        <div className='flex justify-center mt-50'>
          <img draggable={false} src={face1} alt="" className='static select-none top-[20] left-[20] w-40 pointer-none z-[9999px] invert'/>
        </div>

        {/* Introdução Conteiner */}
        <div className='flex justify-center items-center flex-col gap-[7rem]'>
            <div className='flex flex-col gap-[5rem] mt-20 xl:flex-row xl:gap-[10rem]'>
              <div className="relative w-full max-w-100 m-auto">
                  <img onClick={() => setShowPfp(prev => !prev)} src={pfp} alt="Foto de perfil" className="w-full h-auto rounded-full duration-1000 ease-in-out cursor-pointer hover:scale-[1.03]"/>
              </div>
              <QuemSou/>
            </div>
          <img draggable={false} src={face2} alt="" className='static select-none top-[10] left-[20] w-40 pointer-none z-[9999px] invert'/>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <h3 className='mt-[50px] text-white font-[700] tracking-[9px] text-[18pt]'>Conhecimento</h3>
          <Info3/>
          <div className='mt-50 mb-55 invert'>
            <img draggable={false} src={symbol} alt="sas" width={'160px'}/>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <h3 className='mt-[50px] text-white font-[500] tracking-[10px] text-[18pt]'>Música</h3>
          <Info4/>
          <div className='mt-50 invert'>
            <img src={truth} alt="truth" />
          </div>
        </div>

        <div className='flex w-full justify-center items-center flex-col mt-50 mb-50'>
          <div className='mt-[50px] flex justify-center items-center flex-col mb-15'>
            <h3 className='text-white font-[500] tracking-[10px] text-[18pt]'>programação</h3>
            <h3 className='text-white font-[500] tracking-[10px]'>e</h3>
            <h3 className='text-white font-[500] tracking-[10px] text-[18pt]'>Tecnologia</h3>
          </div>
          <Info5/>
        </div>

      </section>
      <Footer/>
    </main>
  )
}

export default App
