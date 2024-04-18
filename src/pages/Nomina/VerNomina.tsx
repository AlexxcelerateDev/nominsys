export default function VerNomina(){
    return(
        <TextoNomina />
    )

}

function TextoNomina(){
    return(
        <div className='mt-40 ml-60'>
            <Text>Nombre del empleado: María López hernandez</Text>
            <Text>Fecha de la nómina: 15 de marzo de 2024</Text>
            <Text>Sueldo bruto: $3,000 </Text>
            <Text>Deducciones:</Text>
            <Text>ISR: $250</Text>
            <Text>Faltas: $150</Text>
            <Text>Sueldo neto:</Text>
            <Text>Total de ingresos - Total de deducciones = $3,000 - $400 = $2,600</Text>
        </div>
    )
}

function Text({children}: { children: string }) {
    return (
        <h1 className='text-3xl text-white py-6 font-bold'>{children}</h1>
    )
}
