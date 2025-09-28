export const Footer = () => {
    return(
        <section className="relative h-[50vh] w-full flex justify-center items-center flex-col bg-transparent overflow-visible z-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/src/assets/images/ParedePodre.jpg')] before:bg-repeat before:bg-cover before:opacity-100 before:z-[-1]">
            <h3 className="text-white font-[500] tracking-[9px] text-[18pt]">Contato</h3>
            <div className="flex justify-center max-w-[400px] w-full h-auto">
                <button onClick={() => (window.location.href = "/Contact")} className="bg-black text-white opacity-[0.6] border border-[2px] mt-[11%] w-80 h-20 z-1 font-mono relative cursor-pointer duration-250 hover:opacity-[1]">
                Fale comigo!
                </button>
            </div>
            
        </section>
    )
}