import Parse from 'parse/dist/parse.min.js';
Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize(
    'qMenrB82bZixVEvX439wvAx5pRZHIDIg43LvlqQL',
    '09rHQT162eNw4fLLUjoT2e7lvpabM8r885YvinpT'
);

export default async function pruebaRegistro({ formData }) {
    const user = new Parse.User();

    user.set('usuario', formData.get("dni"));
    user.set('nombre', formData.get("name"));
    user.set('apellido', formData.get("apellido"));
    user.set('email', formData.get("email"));
    user.set('tipoUsuario', "paciente");
    user.set('password', formData.get("password"));
    user.set('username', formData.get("email"));

    return await user.signUp()
        .then(async (loggedInUser) => {
            const currentUser = await Parse.User.currentAsync();

            const nombre = currentUser.attributes.nombre;
            const apellido = currentUser.attributes.apellido;
            const usuario = currentUser.attributes.usuario;
            const email = currentUser.attributes.email;
            const tipoUsuario = currentUser.attributes.tipoUsuario;
            const id = loggedInUser.id;

            const user3 = {
                nombre,
                apellido,
                usuario,
                email,
                tipoUsuario,
                id
            }
            sessionStorage.setItem('usuario', JSON.stringify(user3))

            console.log(user3);
            return true
        })

}
