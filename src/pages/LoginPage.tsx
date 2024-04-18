import Campo from '../components/Campo'
import nomina from '../assets/nominsis-svg.svg'
import user from '../assets/user.svg'
import borde from '../assets/borde.svg'
import bordeInf from '../assets/bordeInf.svg'

 export default function LoginPage() {

     return (
        <>
            <div className='flex min-h-full'>
                <img src={borde} alt="Borde" className='h-52 absolute '/>
                <div className="w-2/5 justify-end flex">

                    <div>
                        <img src={nomina} alt="Nomina" className='h-[50dvh] w-[50dvh] mx-auto mt-36'/>
                        <h1 className='font-[spinwerad] text-white text-[5rem] font-bold text-center mt-[-5dvh]'>Nomin$ys</h1>
                    </div>
                    <img src={bordeInf} alt="Borde" className='h-52 position: absolute bottom-0 left-0'/>
                </div>
                <div className="w-3/5">
                    <img src={user} alt="User" className='h-[30dvh] w-[40dvh] mx-auto mb-20'/>
                    <Campo/>
                </div>
            </div>
        </>
    )
 }