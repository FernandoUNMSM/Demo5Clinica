import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', // This is your Application ID
  '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT' // This is your Javascript key
);



const loginBack = async function ({ formData }) {
  const usernameValue = formData.get("username");
  const passwordValue = formData.get("password");
  return await Parse.User.logIn(usernameValue, passwordValue)
    .then(async (loggedInUser) => {
      const currentUser = await Parse.User.currentAsync();
      let path = ""
      const nombre = currentUser.attributes.nombre;
      const apellido = currentUser.attributes.apellido;
      const usuario = currentUser.attributes.usuario;
      const email = currentUser.attributes.email;
      const tipoUsuario = currentUser.attributes.tipoUsuario;
      const user = {
        nombre,
        apellido,
        usuario,
        email,
        tipoUsuario,
        id: Object.keys(currentUser.attributes.ACL.permissionsById)[1]
      }

      sessionStorage.setItem('usuario', JSON.stringify(user))//nombre apellido ususario tipousuario

      if (tipoUsuario == 'doctor') {

        path = '/ClinicaDoctor'
      }
      else if (tipoUsuario == 'paciente') {
        path = '/ClinicaPaciente'
      }
      else if (tipoUsuario == 'administrador') {
        path = '/ClinicaAdministrador'
      }

      return { valid: true, path };
    })
    .catch((error) => {
      // Error can be caused by wrong parameters or lack of Internet connection

      return false;
    });
};

export default loginBack

