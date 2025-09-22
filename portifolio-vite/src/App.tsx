import './App.css'
import face1 from './assets/images/face1.png'
import face2 from './assets/images/face2.png'
import { QuemSou, Gostos } from './components/intro'

function App() {

   return (
    // Desenvolver Menu
    <main className=''>
      {/* Sessão do Banner */}
      <section>
        <div>

        </div>
      </section>
      {/* Sessão do resto da Page */}
      <section className='relative h-full w-full flex justify-start items-center flex-col bg-transparent overflow-visible before:absolute before:content-[""] before:inset-0 before:bg-[url(assets/images/background-img.jpg)] before:bg-repeat before:bg-cover before:opacity-[0.5] before:z-[-1] before:bg-center before:lg:bg-top'>
        
        {/* 1ª Imagem Separadora */}
        <div className='flex justify-center mt-50'>
          <img draggable={false} src={face1} alt="" className='static select-none top-[20] left-[20] w-40 pointer-none z-[9999px] invert'/>
        </div>

        {/* Introdução Conteiner */}
        <div>
          <QuemSou/>
          <img draggable={false} src={face2} alt="" className='static select-none top-[20] left-[20] w-40 pointer-none z-[9999px] invert'/>
          <Gostos/>
        </div>

        <div>
          <h3>Conhecimento</h3>
          {/* info3 */}
          <div>
            <img src="" alt="" />
          </div>

          <div>

          </div>
        </div>

        <div></div>

        <div></div>

      </section>
      
      {/* Sessão do Footer/Contatos */}
      <section></section>
    </main>
  )
}

export default App
