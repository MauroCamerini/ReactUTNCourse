import firebase from '../Config/firebase'

/* 
    USER PRODUCTS DATA
*/

export async function addProductToUserList(user, productId, title) {

    await firebase.db.collection("userproducts")
    .add({
        uid: user.uid,
        productId: productId,
        title: title
    })

}


export async function getUserProducts(uid) {

    const productArray = []

    const querySnapshot = await firebase.db.collection("userproducts")
    .where('uid', '==', uid).get()

    querySnapshot.docs.forEach(document => {
        productArray.push({
            id: document.id,
            ...document.data()
        })
    })

    return productArray
    
}

/*
    Borra de la base de datos el producto con el ID especificado

    Si la operación fue exitosa devuelve el true, sino false
*/
export async function deleteUserProduct(id) {
    await firebase.db.doc("userproducts/"+id).delete()
}


/*
    USER DATA
*/

export async function addUserData(uid, name, lastname) {
    
    try{
        await firebase.db.collection("users")
        .add({
            name: name,
            lastname: lastname,
            uid: uid
        })
        return true
    }
    catch (e) {
        
        return false
    }
}

export async function getUserData(uid) {

    try {
        const querySnapshot = await firebase.db.collection("users")
        .where('uid', '==', uid).get()

        // Debería haber una sola coincidcencia, si hay mas o menos la base de datos está corrupta
        if(querySnapshot.size === 1) {
            return {
                uid: uid,
                name: querySnapshot.docs[0].get("name"),
                lastname: querySnapshot.docs[0].get("lastname")}
        } else {
            return {
                uid: uid,
                name: "",
                lastname: ""
            }
        }
    }
    catch (e) {
        
        return {
            uid: uid,
            name: "",
            lastname: ""
        }
    }
    
}