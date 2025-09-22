import pfp from "../assets/images/Calendula-1.png";

export const QuemSou = () => {
    return(
    <section className="flex items-center justify-center flex-col g-50 gap-20 lg:flex-row lg:gap-50">
        <div className="relative w-full max-w-100 m-auto">
            <img src={pfp} alt="Foto de perfil" className="w-full h-auto rounded-full duration-1000 ease-in-out hover:scale-[1.03]"/>
        </div>
        <div className="w-full max-w-100 mr-0 box-border">
            <p className="text-white font-normal tracking-[2px] text-[14pt] text-center justify-center font-mono pt-10">Prazer, meu nome é Fábio, também conhecido como <u className="font-bold underline">Evalacuner</u>, 
            20 anos de experiência de vida, nascido e criado em Curitiba, Paraná.</p>

            <p className="text-white font-normal tracking-[2px] text-[14pt] text-center justify-center font-mono pt-10">Atualmente formado no Ensino Técnico de Desenvolvimento de Sistemas pelo <b className="font-bold font-sans">SENAI</b>. 
            Aspirante a Engenheiro Eletrônico, às vezes produtor músical, às vezes programador, 
            às vezes desenhista, às vezes editor de vídeo e fotos.</p>
        </div>
    </section>
    )
}

export const Gostos = () => {
    return(
        <section>
            <div>
                <p></p><br/>
                <p></p><br/>
            </div>
        </section>
    )
}