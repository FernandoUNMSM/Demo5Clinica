import { DirectionsCarTwoTone } from '@material-ui/icons';
import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', // This is your Application ID
  '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT' // This is your Javascript key
);


export async function obtenerDoctoresBack({ especialidad, turno }) {
  const query = new Parse.Query('doctores');

  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  const results = await query.find();
  let doctores = []

  try {
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const res = object.get('where');
      // console.log(res)
      doctores.push(res)
    }
    // console.log(doctores)
    let array = doctores.filter(doctor => doctor["especialidad"] == especialidad.label && doctor["turno"] == turno.label)
    console.log(array)
    return array;
  } catch (error) {
    console.error('Error while fetching MyCustomClassName', error);
  }
}