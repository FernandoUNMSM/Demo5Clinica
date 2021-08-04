import React from 'react'
import createCita from 'services/createCita'
import {servicioPrueba} from 'services/servicioPrueba'
import crearDoctor from 'services/crearDocotr'

export default function Comfirm ({especialidad, horario, turno, doctor}){
  const enviarForm = () => {
    const iduser = JSON.parse(sessionStorage.getItem('usuario')).id
    servicioPrueba({
      idPaciente: iduser,
      especialidad,
      fecha: horario.toString(),
      turno,
      idDoctor: 2055
    })
    // createCita({
    //   idPaciente: iduser,
    //   especialidad,
    //   fecha: horario.toString(),
    //   turno,
    //   idDoctor: 2055
    // })
    // .then()
  }

  const obtener = () => {
    crearDoctor()
  }

  return (<>
    <p>{especialidad}</p>
    <p>{horario.toString()}</p>
    <p>{turno}</p>
    <p>{doctor}</p>
    <button onClick={enviarForm}>enviar</button>
    <button onClick={obtener}>crearDoctor</button>
  </>)
}