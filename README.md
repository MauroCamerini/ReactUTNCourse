# MisProductos

Este proyecto corresponde a la entrega final del curso Desarrollo en React JS del centro de E-Learning de la Universidad Tecnológica Nacional.

## Para qué sirve

MisProductos permite al usuario crear una cuenta con su e-mail, hacer una búsqueda de productos en Mercado Libre y almacenar su selección personal de productos.

## Tecnologías utilizadas

Es un front-end creado con React JS. Se usaron ademas las librerías react-router-dom y react-hook-form.

La autenticación de usuarios y la base de datos se realizó utilizando el servicio Firebase.

Para obtener los productos y su información se utilizó la API de Mercado Libre.

Los estilos fueron aplicados usando Bootsrap y react-boostrap.

## Puntos a resaltar

La sesión iniciada persiste en el navegador.
Se mantienen cargadas las ofertas del día y el listado de productos del usuario mediante el uso de Context,  agilizando el renderizado de los componentes.

## Qué falta

Desde la funcionalidad faltan medios para el recupero de contraseña y validación de e-mail. Desde un punto de vista más general, habría que agregar que puede hacer el usuario con su lista de productos más allá de solo almacenarla.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.