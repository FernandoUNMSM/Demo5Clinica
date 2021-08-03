import React, { useEffect } from 'react'
import { Container, TablesContainer } from './styles'
import PerfilComponent from 'components/perfil'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useState } from 'react';
import listCitas from 'services/listCitas';
import { obtenerCitas } from 'services/servicioPrueba';

export default function Perfil({ }) {
  const [citasPro, setCitasPro] = useState([])
  const [citasTer, setCitasTer] = useState([])

  useEffect(async () => {
    const citas = await obtenerCitas();
    // console.log(citas)
    setCitasPro(citas)

    // listCitas({ estado: 'programada' })
    //   .then(setCitasPro)
    // listCitas({ estado: 'terminada' })
    //   .then(setCitasTer)
  }, [])

  return (<>
    <Container>
      <PerfilComponent />
      <TablesContainer>
        <div className="programadas">
          <h1>Citas Programadas</h1>
          <PerfectScrollbar>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Especialidad</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    citasPro.map((cita, index) =>
                      <tr key={index}>
                        <td>{cita.fecha}</td>
                        <td>{cita.turno}</td>
                        <td>{cita.especialidad}</td>
                        <td>{cita.doctor}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div>
{/* 
        <div className="recientes">
          <h1>Citas Reciente</h1>
          <PerfectScrollbar>
            <div className="tabla">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Especialidad</th>
                    <th>Sala</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    citasTer.map((cita) =>
                      <tr key={cita.idCita}>
                        <td>{cita.fecha}</td>
                        <td>{cita.turno}</td>
                        <td>{cita.especialidad}</td>
                        <td>Sala</td>
                        <td>{cita.doctor}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div> */}
      </TablesContainer>
    </Container>
  </>)
}