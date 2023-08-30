
export const logInForm = {
    title: "Iniciar sesión",
    fields: [
        {
            label: "Correo electrónico",
            type: "email",
            name: "email",
            placeholder: "Ingrese su email",
            required: true  
        },
        {
            label: "Contraseña",
            type: "password",
            name: "password",
            placeholder: "Ingrese su contraseña",
            required: true
      
          }
      ],
    button: "Iniciar sesión"
} 

export const singUpForm = {
    title: "Crear cuenta",
    fields: [
        {
            label: "Nombre",
            type: "text",
            name: "name",
            placeholder: "Nombre",
            required: true
      
          },
          {
            label: "Apellido",
            type: "text",
            name: "lastname",
            placeholder: "Apellido",
            required: true
      
          },
        {
            label: "Correo electrónico",
            type: "email",
            name: "email",
            placeholder: "Ingrese su email",
            required: true  
        },
        {
            label: "Contraseña",
            type: "password",
            name: "password",
            placeholder: "Ingrese su contraseña",
            required: true
      
          },
      ],
    button: "Registrarse"
} 
