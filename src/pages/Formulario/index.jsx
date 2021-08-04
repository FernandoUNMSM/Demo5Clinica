import 'date-fns';
import React, {useState} from 'react'
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { FormularioContainer, Derecha, Izquierda, Centro } from './styles'

export default function Formulario ({ especialidad, updateEspecialidad, horario, updateHHorario,turno, updateTurno, updateExtra}){

  const handleDateChange = (date) => {
    updateHHorario(date)
  };

  const Especialidad = [
    { value: 'cardiologia', label: 'Cardiologia' },
    { value: 'traumatologia', label: 'Traumatologia' },
    { value: 'oncologia', label: 'Oncologia' }
  ]
  const turnos = [
    {value: 'mañana', label: 'Mañana'},
    {value: 'tarde', label: 'Tarde'},
    {value: 'noche', label: 'Noche'}
  ]

  return (<>
    <FormularioContainer>
      <Derecha>
        <div className="inputInfo">
          <h2>Especialidad</h2>
          <div className="select">
            <Select
              options={Especialidad}
              name="especialidad"
              value={especialidad}
              placeholder='Elige una especialidad'
              onChange={ (evt) => updateEspecialidad(evt)}
              styles={{
                menuList: styles => ({ ...styles, maxheight: '200px'}),
              }}
            />
          </div>
        </div>
        <div className="inputInfo">
          <h2>Fecha</h2>
          <div className="select">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  name="fecha"
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd/MM/yyyy"
                  value={horario}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  style={{width: '100%'}}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <div className="inputInfo">
          <h2>Turno</h2>
          <div className="select">
            <Select
              options={turnos}
              name="turno"
              value={turno}
              placeholder='Elige un turno'
              onChange={(evt) => updateTurno(evt)}
              styles={{
                menu: styles => ({ ...styles, position: 'absolute' }),
              }}
              />
          </div>
        </div>
      </Derecha>
      <Centro>
        <span></span>
      </Centro>
      <Izquierda>
        <div className="extraInfo">
          <h2>Informacion extra</h2>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </Izquierda>
    </FormularioContainer>
  </>)
}