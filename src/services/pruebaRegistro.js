import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; 
Parse.initialize(
    'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', 
    '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT'
);

export default async function pruebaRegistro({formData}) {
    const user = new Parse.User();
    user.set('usuario', formData.get("usuario"));
    //user.set('email', 'A string');
    user.set('nombre', formData.get("name"));
    user.set('apellido', formData.get("apellido"));
    user.set('email', formData.get("email"));
    user.set('tipoUsuario', "paciente");
    user.set('password', formData.get("password"));

    try {
        let userResult = await user.signUp();
        console.log('User signed up', userResult);
      } catch (error) {
        console.error('Error while signing up user', error);
      }
  }
