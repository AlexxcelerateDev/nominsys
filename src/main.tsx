import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import VerNomina from "./pages/Nomina/VerNomina.tsx";
import BuscarNomina from "./pages/Nomina/BuscarNomina.tsx";
import Configuraciones from "./pages/Empleados/Configuraciones.tsx";
import AgregarISR from "./pages/Impuestos/AgregarISR.tsx";
import ModificarISR from "./pages/Impuestos/ModificarISR.tsx";
import Agregar from "./pages/Inasistencia/Agregar.tsx";
import Eliminar from "./pages/Inasistencia/Eliminar.tsx";
import Modificar from "./pages/Inasistencia/Modificar.tsx";
import Crear from "./pages/Periodo/Crear.tsx";
import AgregarPuesto from "./pages/Sueldos/AgregarPuesto.tsx";
import AsignarSEmpleado from "./pages/Sueldos/AsignarSEmpleado.tsx";
import AsignarSPuesto from "./pages/Sueldos/AsignarSPuesto.tsx";
import ModificarPuesto from "./pages/Sueldos/ModificarPuesto.tsx";
import ModificarP from "./pages/Periodo/Modificar.tsx";
import Sesion from "./pages/Configuracion/Sesion.tsx";
import CalcularISR from "./pages/Cnomina/CalcularISR.tsx";
import CalcularDeduccion from "./pages/Cnomina/CalcularDeduccion.tsx";
import CalcularSueldoNeto from "./pages/Cnomina/CalcularSueldoNeto.tsx";
import Roles from "./pages/Configuracion/Roles.tsx";
import Empresa from "./pages/Configuracion/Empresa.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
        children: [
            {
                path: "Nomina",
                children: [
                    {
                        path: "VerNomina",
                        element: <VerNomina />,
                    },
                    {
                        path: "BuscarNomina",
                        element: <BuscarNomina />,
                    },
                ],
            },
            {
                path: "Impuestos",
                children: [
                    {
                        path: "AgregarISR",
                        element: <AgregarISR />,
                    },
                    {
                        path: "ModificarISR",
                        element: <ModificarISR />,
                    },
                ],
            },
            {
                path: "Empleados",
                children: [
                    {
                        path: "Configuraciones",
                        element: <Configuraciones />,
                    },
                ],
            },
            {
                path: "Periodo",
                children: [
                    {
                        path: "Crear",
                        element: <Crear />,
                    },
                    {
                        path: "Modificar",
                        element: <ModificarP />,
                    },
                ],
            },
            {
                path: "Inasistencia",
                children: [
                    {
                        path: "Agregar",
                        element: <Agregar />,
                    },
                    {
                        path: "Eliminar",
                        element: <Eliminar />,
                    },
                    {
                        path: "Modificar",
                        element: <Modificar />,
                    },
                ],
            },
            {
                path: "Sueldos",
                children: [
                    {
                        path: "AgregarPuesto",
                        element: <AgregarPuesto />,
                    },
                    {
                        path: "AsignarSEmpleado",
                        element: <AsignarSEmpleado />,
                    },
                    {
                        path: "AsignarSPuesto",
                        element: <AsignarSPuesto />,
                    },
                    {
                        path: "ModificarPuesto",
                        element: <ModificarPuesto />,
                    },
                ],
            },
            {
                path: "Configuracion",
                children: [
                    {
                        path: "Sesion",
                        element: <Sesion />,
                    },
                    {
                        path: "Roles",
                        element: <Roles />,
                    },
                    {
                        path: "Empresa",
                        element: <Empresa />,
                    },
                ],
            },
            {
                path: "Cnomina",
                children: [
                    {
                        path: "CalcularISR",
                        element: <CalcularISR />,
                    },
                    {
                        path: "CalcularDeduccion",
                        element: <CalcularDeduccion />,
                    },
                    {
                        path: "CalcularSueldoNeto",
                        element: <CalcularSueldoNeto />,
                    },
                ],
            },
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
