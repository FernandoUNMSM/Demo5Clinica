import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com'; 
Parse.initialize(
    'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL', 
    '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT'
);

export default async function pruebaRegistro({formData}) {
    
    const user = new Parse.User();
    const query = new Parse.Query(user);
    
    user.set('usuario', formData.get("dni"));
    user.set('nombre', formData.get("name"));
    user.set('apellido', formData.get("apellido"));
    user.set('email', formData.get("email"));
    user.set('tipoUsuario', "paciente");
    user.set('password', formData.get("password"));
    user.set('username', formData.get("email"));

    try {
        let userResult = await user.signUp();
        console.log('User signed up', userResult);

        const currentUser = await Parse.User.currentAsync();
        console.log(currentUser)
        let path = ""
        
        const nombre = currentUser.attributes.nombre;
        const apellido = currentUser.attributes.apellido;
        const usuario = currentUser.attributes.usuario;
        const email = currentUser.attributes.email;
        const tipoUsuario = currentUser.attributes.tipoUsuario;
        const id = userResult.id;
       
        const user3 = {
            nombre,
            apellido,
            usuario,
            email,
            tipoUsuario,
            id}
        
        console.log(user3);
        sessionStorage.setItem('usuario', JSON.stringify(user))
        
        return true;
      } catch (error) {
        console.error('Error while signing up user', error);
      }
  }
