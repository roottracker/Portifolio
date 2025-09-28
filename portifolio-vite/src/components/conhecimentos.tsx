import gitLogo from '../assets/images/github-logo.png'

export const Info3 = () => {
    return(
        <section className="flex w-full items-center justify-center mt-20 gap-20 flex-col xl:flex-row">
            <div className="flex max-w-130 w-full h-auto border border-white flex-col px-8">
                <p className="mt-4 text-white font-medium tracking-[5px] text-[14pt] text-center font-mono">Como artista, eu gosto de me aventurar pela profundidade dos sentimentos e sensações humanas, 
            principalmente a melancolia, o pânico, a solidão e o vazio, tentando expor os diferentes “subgêneros” 
            desses sentimentos, amo textura e procuro sempre utilizá-la em todos os meus trabalhos artísticos.</p>
                <br />
                <p className="mt-5 text-white font-medium tracking-[5px] text-[14pt] text-center font-mono">Como programador iniciante, gosto muito de back-end e linguagens de baixo nível, como C, e de alto nível como Java. 
            Gosto de desafios, procuro estar me habituando e sempre atento ao complexo e imparável mundo da tecnologia.</p>
                <br />
            </div>
            <div className="block max-w-130 max-h-200 w-full">
                <h4 className="text-white font-bold font-mono text-center w-full max-w-200 mb-[2rem] font-[14pt]">Produção musical e mixagem de áudio</h4>
                <p className="text-white font-mono text-center w-full max-w-200 mb-[3rem] font-[14pt]">[██████████████-----] 75%</p>
                <br />
                <h4 className="text-white font-bold font-mono text-center w-full max-w-200 mb-[1rem] font-[14pt]">Edição de imagem e vídeo</h4>
                <p className="text-white font-mono text-center w-full max-w-200 mb-[3rem] font-[14pt]">[██████--------------] 40%</p>
                <br />
                <h4 className="text-white font-bold font-mono text-center w-full max-w-200 mb-[1rem] font-[14pt]">Desenho</h4>
                <p className="text-white font-mono text-center w-full max-w-200 mb-[3rem] font-[14pt]">[████----------------] 30%</p>
                <br />
                <h4 className="text-white font-bold font-mono text-center w-full max-w-200 mb-[1rem] font-[14pt]">Eletrônica</h4>
                <p className="text-white font-mono text-center w-full max-w-200 mb-[3rem] font-[14pt]">[██------------------] 10%</p>
                <br />
                <h4 className="text-white font-bold font-mono text-center w-full max-w-200 mb-[1rem] font-[14pt]">Back-end</h4>
                <p className="text-white font-mono text-center w-full max-w-200 mb-[3rem] font-[14pt]">[███-----------------] 15%</p>
                <br />
                <h4 className="text-white font-bold font-mono text-center w-full max-w-200 mb-[1rem] font-[14pt]">Front-end</h4>
                <p className="text-white font-mono text-center w-full max-w-200 mb-[3rem] font-[14pt]">[█-------------------] 7%</p><br />
            </div>
        </section>
    )
}

export const Info4 = () => {
    return(
        <div className="flex w-full max-w-100 items-center justify-center flex-col">
            <p className="mt-5 text-white font-medium tracking-[5px] text-[14pt] text-center font-mono">
                Conhecido pelo pseudonimo <u className="font-bold underline">Evalacuner</u>, sou produtor musical desde os 13 anos, me formei acadêmicamente pela escola Yellow DJ Academy em produção musical. 
                Atualmente faço músicas solos, geralmente música eletrônica e instrumentais, e também trabalho com Sound Design.
            </p>

            <button className="mt-15 text-black font-medium tracking-[5px] text-[12pt] text-center font-mono border bg-white p-5 cursor-pointer duration-200 hover:bg-black hover:text-white">
                Projetos <br /> de <br /> Produção Musical
            </button>
        </div>
    )
}

export const Info5 = () => {
    return(
        <div className="flex w-full max-w-180 items-center justify-center flex-col">
            <p className="mt-5 text-white font-medium tracking-[5px] text-[14pt] text-center font-mono">Sempre gostei de programação e desenvolvimento em geral, mas comecei a estudar mais sobre em 2024, 
            quando ingressei no curso de TDS pelo SENAI, você pode ver alguns dos meus trabalhos no meu github.</p>
            <div className="flex w-full items-center justify-center mt-30">
                <button className='fixed'><img src={gitLogo} alt="" width={'200px'} className='invert mt-25 cursor-pointer duration-500 hover:w-[220px]'/></button>
            </div>
            
        </div>
    )
}

