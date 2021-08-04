import React, { useEffect, useState } from 'react'
import PerfilComponent from 'components/perfil'
import { Container, TablaContainer } from './styles'
import Tabla from 'components/Tabla'
import getCitas from 'services/getCitas.js'
import terminarCita from 'services/terminarCita'

export default function PerfilDoctor({ }) {
  const [citas, setCitas] = useState([])
  const concluirCita = (idCita) => {
    setCitas((prev) => prev.filter(el => el.idCita !== idCita))
    terminarCita({idCita})
  }

  useEffect(()=> {
    getCitas()
      .then(setCitas)
  },[])

  return (<>
    <Container>
      <PerfilComponent />
      <TablaContainer>
        <div className="ContainertablaPacientes">
          <Tabla>
            <div className="tablaDoctores">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Horario</th>
                    <th>Paciente</th>
                    {/* <th className="selecc">Perfil</th>
                    <th>Concluir</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    citas.map(cita =>
                      <tr key={cita.idCita}>
                        <td>{cita.fecha}</td>
                        <td>{cita.turno}</td>
                        <td>{cita.paciente}</td>
                        {/* <td>
                          <button>Ver Perfil</button>
                        </td>
                        <td>
                          <button onClick={() => concluirCita(cita.idCita)}>Concluir</button>
                        </td> */}
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </Tabla>
        </div>
      </TablaContainer>
    </Container>
  </>)
}