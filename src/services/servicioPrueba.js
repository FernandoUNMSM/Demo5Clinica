import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', // This is your Application ID
  '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT' // This is your Javascript key
);

export async function servicioPrueba(json) {
  console.log(json)
  const myNewObject = new Parse.Object('citas');
  myNewObject.set('where', json);
  try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log('records created', result);
  } catch (error) {
    console.error('Error while creating records: ', error);
  }
}

export async function obtenerCitas() {
  const id = JSON.parse(sessionStorage.getItem('usuario')).id
  const query = new Parse.Query('citas');
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  const results = await query.find();
  const query2 = new Parse.Query('doctores');
  let citas = []
  try {
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const res = object.get('where');

      let user = await query2.find();

      let uservalue = user.map(res => res.get('where'))
      let doc = uservalue.filter(userv => userv.idDoctor == res.idDoctor)

      citas.push({...res, doctor: doc[0].nombre})
    }

    let citasUsuario = citas.filter(cita => cita.idPaciente == id)
    return citasUsuario;
  } catch (error) {
    console.error('Error while fetching MyCustomClassName', error);
  }
}

export async function obtenerCitasPorDoctor() {
  const id = JSON.parse(sessionStorage.getItem('usuario')).id
  const query = new Parse.Query('citas');
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  const results = await query.find();
  const query2 = new Parse.Query('doctores');
  const User = new Parse.User();
  const query3 = new Parse.Query(User);

  let citas = []
  try {
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const res = object.get('where');

      let docs = await query2.find();
      let users = await query3.find();

      let docsvalue = docs.map(res => res.get('where'))
      let doc = docsvalue.filter(doc => doc.idDoctor == res.idDoctor)

      let uservalue = users.map(res => {
        const id = res.id;
        const nombre = res.get('nombre');
        const apellido = res.get('apellido');
        return {id, nombre, apellido}
      })
      let user = uservalue.filter(user => user.id == res.idPaciente)
      console.log(user)

      citas.push({...res, idUsuario: doc[0].idUsuario, paciente: `${user[0].nombre + ' ' + user[0].apellido}`})
    }
    let citasUsuario = citas.filter(cita => cita.idUsuario == id)
    // console.log(citasUsuario)
    return citasUsuario;
  } catch (error) {
    console.error('Error while fetching MyCustomClassName', error);
  }
}
