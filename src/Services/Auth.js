import { FirebaseAuth } from '../Config/firebase'
import { addUserData, getUserData } from './DB'


const errorMessages = {
    'auth/invalid-email': "El correo electrónico no es válido.",
    'auth/user-disabled': "El usuario se encuentra deshabilitado.",
    'auth/user-not-found': "No existe usuario con ese email.",
    'auth/wrong-password': "Contraseña incorrecta.",
    'auth/email-already-in-use': "El correo electrónico ya está en uso.",
    'auth/weak-password': "La contraseña no es válida."
}

/*
    Subscribe la función callback pasada a los cambios de sesión de firebase. Sirve sobre todo para chequear
    si está la sesión abierta al comenzar.
*/
export function subscribeToChanges(callback) {
    
    FirebaseAuth.onAuthStateChanged(callback)
}

/*
    Cuando la función subscrita en subscribeToChanges es llamada, firebase pasa a esta un objeto. Ese objeto es
    el que recibe esta función, extrayendo la información importante del mismo y obteniendo los datos de usuario
    de la base de datos. Devuelve el objeto 'user' que manejan los componentes. De esta manera ocultamos un poco
    firebase del resto de la aplicación
*/
export async function parseUser(firebaseUser) {

    const userData = await getUserData(firebaseUser.uid)
    return {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: userData.name,
        lastname: userData.lastname
    }

}

/*
    Sirve para cerrar sesión, es un encapsulamiento de la llamada a firebase.
*/
export async function endCurrentSession() {
    await FirebaseAuth.signOut()
}

/*
    Registra un nuevo usuario y crea una entrada en la base de datos para almacenar su nombre y apellido

    Devuelve un objeto con los siguientes campos:
        errors - booleano que indica si hubo o no errors
        errorMessage - Mensaje de error en el caso de que errors sea true
        user - información del usuario en el caso de que errors sea false
*/
export async function CreateUser(email, password, name, lastname) {

    const response = {
        errors: false, 
        errorMessage: "", 
        user: {uid: "", email: email, name: name, lastname: lastname}}

    try {
        const responseUser = await FirebaseAuth.createUserWithEmailAndPassword(email, password)
        if(responseUser.user.uid){

            await addUserData(responseUser.user.uid, name, lastname)
            response.user.uid = responseUser.user.uid
        }
        else {
            response.errors = true
            response.errorMessage = "El usuario no existe"
        }

        return response
    }
    catch (e) { 

        response.errors = true
        response.errorMessage = errorMessages[e.code] || e.message

        return response
    }
}

/*
    Inicia sesión con email y contraseña y trae de la base de datos los datos del usuario

    Devuelve un objeto con los siguientes campos:
        errors - booleano que indica si hubo o no errors
        errorMessage - Mensaje de error en el caso de que errors sea true
        user - información del usuario en el caso de que errors sea false
*/
export async function LogInAndGetUser(email, password) {
    

    const response = {
        errors:false, 
        errorMessage: "", 
        user: {}}

    try {
        
        const responseUser = await FirebaseAuth.signInWithEmailAndPassword(email,password)
        
        if(responseUser.user.uid){

            const {name, lastname} = await getUserData(responseUser.user.uid)

            response.user = {
                uid: responseUser.user.uid , 
                email: email, 
                password: password, 
                name: name,
                lastname: lastname}

        }else {
            response.errors = true
            response.errorMessage = "El usuario no existe"
        }

        return response
    } catch(e) {
        
        response.errors = true
        response.errorMessage = errorMessages[e.code] || e.message

        return response
    }

}
