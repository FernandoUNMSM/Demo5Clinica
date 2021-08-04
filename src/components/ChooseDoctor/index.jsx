import React, {useEffect, useState} from 'react'
import { DoctoresContainer } from './styles'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tabla from 'components/Tabla'
import getDoctores from "services/getDoctores";

export default function ChooseDoctor ({updateDoctor, especialidad, turno}){
  const [doctores, setDoctores] = useState([])
  useEffect(()=> {
    getDoctores({especialidad, turno})
      .then(setDoctores)
  },[])

  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    borrarSeleccion()

    const row = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
    updateDoctor(row.id)
    const checkBoxes = document.getElementsByName('Checkbox')

    setCheck(!check)

    checkBoxes.forEach(checkbox => {
      if(check){
        checkbox.removeAttribute('disabled')
      }
      else {
        row.classList.add('on')
        checkbox.setAttribute('disabled', true)
      }
    })

    event.target.removeAttribute('disabled')
  };

  const borrarSeleccion = () => {
    const rows = document.querySelectorAll('.on')
    rows.forEach(row => row.classList.remove('on'))
  }

  return (<>
    <DoctoresContainer>
      <div className="nose">
        <Tabla>
          <div className="tablaDoctores">
            <table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Horario</th>
                  {/* <th>Perfil</th> */}
                  <th className="selecc">Seleccionar</th>
                </tr>
              </thead>
              <tbody>
                {
                  doctores.map((doctor, index) =>
                    <tr key={doctor.idDoc}>
                      <td>{doctor.nombre}</td>
                      <td>{doctor.turno}</td>
                      {/* <td>
                        <button>Ver Perfil</button>
                      </td> */}
                      <td>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChange}
                              name={`Checkbox`}
                              id={`Checkbox ${index}`}
                            />
                          }
                        />
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </Tabla>
      </div>
    </DoctoresContainer>
  </>)
}