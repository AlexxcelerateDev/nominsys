import { Listbox } from '@headlessui/react'
import {useEffect, useState} from "react";
import { opciones, Iopcion } from '../utils'
import nomina from '../assets/nominsis-svg.svg'
import globo from '../assets/globo.svg'
import user from '../assets/user.svg'
import {Outlet, useNavigate} from 'react-router-dom'


export default function HomePage() {
    let i = 0
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/nominsys');
    };
    return (
        <>
            <div className='flex min-h-screen'>
                <div className="w-1/5 bg-[#121C24] ">
                    <Welcome/>
                    {opciones.map((opcion) => (
                        <MyListbox
                            key={i++}
                            opcion={opcion}/>
                    ))}
                </div>
                <div className="w-4/5">
                    <img src={nomina} onClick={goToLogin} alt="Nomina" className='h-[20dvh] w-[20dvh] absolute right-0 top-0'/>
                    <img src={globo}  alt="globo" className='h-[90dvh] w-[90dvh] absolute right-[20%] top-[5%] opacity-35 z-[-1]' />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

function Welcome(){
    return(
        <div className='justify-center flex mb-36'>
            <h1 className='text-white text-center text-4xl flex-row flex
                    font-bold font-[Segoe UI] mt-3'>Welcome!</h1>
            <img src={user} alt="User" className='h-[5dvh] w-[5dvh] ml-3'/>
        </div>
    )
}

function MyListbox({opcion}: {opcion: Iopcion}) {
    const [valueR, setValueR] = useState(null)
    const navigate = useNavigate();
    const goTo = (url: string) => {
        navigate(`${url}`);
    }
    useEffect(() => {
        if (valueR) {
            // @ts-ignore
            goTo(valueR.url)
            setValueR(null)
        }
    }, [valueR]);
    return (
        <Listbox
            value={valueR} onChange={setValueR} >
            <Listbox.Button className=' w-full text-white font-bold text-3xl py-6 bg-[#182530] flex-row flex justify-between'><Option name={opcion.tittle}/></Listbox.Button>
            <Listbox.Options>
                {opcion.items.map((opcion) => (
                    <Listbox.Option
                        key={opcion.id}
                        value={opcion}
                        disabled={opcion.unavailable}
                    >
                        <div className='text-white font-medium text-3xl py-5 bg-[#182530] cursor-pointer'>
                            <h1 className='ml-12'>{opcion.name}</h1>
                        </div>


                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

function Option({name}: {name: string}) {
    return (
        <>
            <h1 className='ml-5'>{name}</h1>
            <h1 className='mr-10'>≡</h1>
        </>
    )
}
