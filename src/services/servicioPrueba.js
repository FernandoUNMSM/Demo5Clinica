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
  const query = new Parse.Query('citas');
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  const results = await query.find();
  const citas = []
  try {
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const res = object.get('where');
      citas.push(res)
    }
    return citas;
  } catch (error) {
    console.error('Error while fetching MyCustomClassName', error);
  }
}