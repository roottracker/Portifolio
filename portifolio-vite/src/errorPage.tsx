import errorImg from './assets/images/erro404.jpg'
import suns from './assets/videos/suns.mp4'
import soundFx from './assets/audios/soundFX LP.wav'

function ErrorPage(){
    return(
        <>
        <section>
            <img src={errorImg} alt="" className='absolute w-150 h-full z-[2] grayscale-[75%]'/>
            <video autoPlay loop muted playsInline width="1250" height="1000" className='fixed z-1 left-90 opacity-[60%]'><source src={suns} type='video/mp4'/></video>
            <audio autoPlay loop ><source src={soundFx} type="audio/wav" /></audio>
            <div>

            </div>
        </section>
        </>
    )
}

export default ErrorPage