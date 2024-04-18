
import barraBuscadora from "../../assets/barraBuscadora.png"
import TextoNomina from "./VerNomina.tsx";
export default function BuscarNomina(){
    return(
        <>
            <div className='static z-0'>
                <img src={barraBuscadora} alt="Barra Buscadora" className='mt-10 ml-56 mb-[-10dvh] h-12'/>
                <TextoNomina/>
            </div>
        </>
    )

}