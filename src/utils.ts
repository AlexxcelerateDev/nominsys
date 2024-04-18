

export interface MenuItem {
    id: number;
    name: string;
    unavailable: boolean;
    url?: string;
}
export interface Iopcion {
    tittle: string;
    items: MenuItem[];
}
const verNomina: Iopcion = {
    tittle: 'Ver nomina',
    items:
        [
            { id: 1, name: 'Ver Nomina', unavailable: false,url: '/home/Nomina/VerNomina'},
            { id: 2, name: 'Buscas Nomina', unavailable: false, url: '/home/Nomina/BuscarNomina'},
        ]
};

const impuestos: Iopcion = {
    tittle: 'Impuestos',
    items:
        [
            { id: 1, name: 'Agregar ISR', unavailable: false, url: '/home/Impuestos/AgregarISR'},
            { id: 2, name: 'Modificar ISR', unavailable: false, url: '/home/Impuestos/ModificarISR'},
        ]
};

const empleados: Iopcion =
    {
        tittle: 'Empleados',
        items:
            [
            {id: 1, name: 'Configuraciones', unavailable: false, url: '/home/Empleados/Configuraciones'}
            ]
    };

const periodo: Iopcion =
    {
        tittle: 'Periodo',
        items:
            [
                {id: 1, name: 'Crear periodo', unavailable: false, url: '/home/Periodo/Crear'},
                {id: 2, name: 'Modificar', unavailable: false, url: '/home/Periodo/Modificar'},
            ]
    };

const inasistencia: Iopcion =
    {
    tittle: 'Inasistencia',
    items:
        [
            {id: 1, name: 'Agregar', unavailable: false, url: '/home/Inasistencia/Agregar'},
            {id: 2, name: 'Modificar', unavailable: false, url: '/home/Inasistencia/Modificar'},
            {id: 3, name: 'Eliminar', unavailable: false, url: '/home/Inasistencia/Eliminar'},
        ]
    };

const nomina: Iopcion = {
    tittle: 'Nomina',
    items:
        [
            { id: 1, name: 'CalcularISR', unavailable: false, url: '/home/Cnomina/CalcularISR'},
            { id: 2, name: 'Calcular deducción de faltas', unavailable: false, url: '/home/Cnomina/CalcularDeduccion'},
            { id: 3, name: 'Calcular sueldo neto', unavailable: false, url: '/home/Cnomina/CalcularSueldoNeto'}
        ],
    };

const sueldos: Iopcion = {
    tittle: 'Sueldos',
    items:
        [
            { id: 1, name: 'Agregar Puesto', unavailable: false, url: '/home/Sueldos/AgregarPuesto'},
            { id: 2, name: 'Modificar puesto', unavailable: false, url: '/home/Sueldos/ModificarPuesto'},
            { id: 3, name: 'Asignar sueldo por Puesto', unavailable: false, url: '/home/Sueldos/AsignarSPuesto'},
            { id: 4, name: 'Asignar sueldo por Empleado', unavailable: false, url: '/home/Sueldos/AsignarSEmpleado'},
        ]
};

const configuracion: Iopcion = {
    tittle: 'Configuracion',
    items: [{ id: 1, name: 'Inicio Sesion', unavailable: false, url: '/home/Configuracion/Sesion' },
        { id: 2, name: 'Roles', unavailable: false, url: '/home/Configuracion/Roles' },
        { id: 3, name: 'Editar Empresa', unavailable: false, url: '/home/Configuracion/Empresa' },]
};

const opciones: Iopcion[] = [
    verNomina,
    impuestos,
    empleados,
    periodo,
    inasistencia,
    nomina,
    sueldos,
    configuracion,
    // Agrega aquí los otros arreglos si los tienes
];

export { opciones };
