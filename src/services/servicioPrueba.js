import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', // This is your Application ID
  '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT' // This is your Javascript key
);

export default async function servicioPrueba() {
  // async () => {
    const myNewObject = new Parse.Object('records');
    myNewObject.set('where', { foo: 'bar' });
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('records created', result);
    } catch (error) {
      console.error('Error while creating records: ', error);
    }
  // }
}