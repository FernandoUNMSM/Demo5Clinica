import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', // This is your Application ID
  '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT' // This is your Javascript key
);



const loginBack = async function ({formData}) {
    // Note that this values come from state variables that we've declared before

    const usernameValue = formData.get("username");
    const passwordValue = formData.get("password");
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        // logIn returns the corresponding ParseUser object
        // To verify that this is in fact the current user, currentAsync can be used
        //const currentUser = await Parse.User.currentAsync();
        //console.log(loggedInUser === currentUser);
        // Navigation.navigate takes the user to the screen named after the one
        // passed as parameter
        const currentUser = await Parse.User.currentAsync();
        console.log(currentUser)
        let path = ""
        const nombre = currentUser.attributes.Nombre;
        const apellido = currentUser.attributes.Apellido;
        const usuario = currentUser.attributes.usuario;
        const email = currentUser.attributes.email;
        const tipoUsuario = currentUser.attributes.tipoUsuario;
        const user = {
            nombre,
            apellido,
            usuario,
            email,
            tipoUsuario
        }
        
        sessionStorage.setItem('usuario', JSON.stringify(user))//nombre apellido ususario tipousuario
        
        if(tipoUsuario == 'doctor') {
            
            path = '/ClinicaDoctor'
          }
          else if (tipoUsuario == 'paciente') {
            console.log(tipoUsuario)
            path = '/ClinicaPaciente'
          }
          else if (tipoUsuario == 'administrador') {
            path = '/ClinicaAdministrador'
          }
          console.log("shbsahdbsajdjasd")

        return {valid: true , path};
      })
      .catch((error) => {
        // Error can be caused by wrong parameters or lack of Internet connection
       
        return false;
      });
  };

  export default loginBack

