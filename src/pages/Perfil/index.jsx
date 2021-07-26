import React from 'react'
import { Container, TablesContainer } from './styles'
import PerfilComponent from 'components/perfil'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
export default function Perfil({ }) {
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
                    <th>Sala</th>
                    <th>Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fecha1</td>
                    <td>Hora1</td>
                    <td>Especialidad1</td>
                    <td>Sala1</td>
                    <td>Doctor1</td>
                  </tr>
                  <tr>
                    <td>Fecha2</td>
                    <td>Hora2</td>
                    <td>Especialidad2</td>
                    <td>Sala2</td>
                    <td>Doctor2</td>
                  </tr>
                  <tr>
                    <td>Fecha3</td>
                    <td>Hora3</td>
                    <td>Especialidad3</td>
                    <td>Sala3</td>
                    <td>Doctor3</td>
                  </tr>
                  <tr>
                    <td>Fecha4</td>
                    <td>Hora4</td>
                    <td>Especialidad4</td>
                    <td>Sala4</td>
                    <td>Doctor4</td>
                  </tr>
                  <tr>
                    <td>Fecha5</td>
                    <td>Hora5</td>
                    <td>Especialidad5</td>
                    <td>Sala5</td>
                    <td>Doctor5</td>
                  </tr>
                  <tr>
                    <td>Fecha6</td>
                    <td>Hora6</td>
                    <td>Especialidad6</td>
                    <td>Sala6</td>
                    <td>Doctor6</td>
                  </tr>
                  <tr>
                    <td>Fecha7</td>
                    <td>Hora7</td>
                    <td>Especialidad7</td>
                    <td>Sala7</td>
                    <td>Doctor7</td>
                  </tr>
                  <tr>
                    <td>Fecha8</td>
                    <td>Hora8</td>
                    <td>Especialidad8</td>
                    <td>Sala8</td>
                    <td>Doctor8</td>
                  </tr>
                  <tr>
                    <td>Fecha9</td>
                    <td>Hora9</td>
                    <td>Especialidad9</td>
                    <td>Sala9</td>
                    <td>Doctor9</td>
                  </tr>
                  <tr>
                    <td>Fecha10</td>
                    <td>Hora10</td>
                    <td>Especialidad10</td>
                    <td>Sala10</td>
                    <td>Doctor10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div>

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
                  <tr>
                    <td>Fecha1</td>
                    <td>Hora1</td>
                    <td>Especialidad1</td>
                    <td>Sala1</td>
                    <td>Doctor1</td>
                  </tr>
                  <tr>
                    <td>Fecha2</td>
                    <td>Hora2</td>
                    <td>Especialidad2</td>
                    <td>Sala2</td>
                    <td>Doctor2</td>
                  </tr>
                  <tr>
                    <td>Fecha3</td>
                    <td>Hora3</td>
                    <td>Especialidad3</td>
                    <td>Sala3</td>
                    <td>Doctor3</td>
                  </tr>
                  <tr>
                    <td>Fecha4</td>
                    <td>Hora4</td>
                    <td>Especialidad4</td>
                    <td>Sala4</td>
                    <td>Doctor4</td>
                  </tr>
                  <tr>
                    <td>Fecha5</td>
                    <td>Hora5</td>
                    <td>Especialidad5</td>
                    <td>Sala5</td>
                    <td>Doctor5</td>
                  </tr>
                  <tr>
                    <td>Fecha6</td>
                    <td>Hora6</td>
                    <td>Especialidad6</td>
                    <td>Sala6</td>
                    <td>Doctor6</td>
                  </tr>
                  <tr>
                    <td>Fecha7</td>
                    <td>Hora7</td>
                    <td>Especialidad7</td>
                    <td>Sala7</td>
                    <td>Doctor7</td>
                  </tr>
                  <tr>
                    <td>Fecha8</td>
                    <td>Hora8</td>
                    <td>Especialidad8</td>
                    <td>Sala8</td>
                    <td>Doctor8</td>
                  </tr>
                  <tr>
                    <td>Fecha9</td>
                    <td>Hora9</td>
                    <td>Especialidad9</td>
                    <td>Sala9</td>
                    <td>Doctor9</td>
                  </tr>
                  <tr>
                    <td>Fecha10</td>
                    <td>Hora10</td>
                    <td>Especialidad10</td>
                    <td>Sala10</td>
                    <td>Doctor10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div>
      </TablesContainer>
    </Container>
  </>)
}