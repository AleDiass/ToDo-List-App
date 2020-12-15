
function saveLocalStorage(token){

    window.localStorage.setItem("__Token__",token)

}


function getLocalStorage(){

    return window.localStorage.getItem("__Token__")
}

function DeleteLocalStorage(){
    window.localStorage.removeItem("__Token__")
}


export {
    saveLocalStorage,
    getLocalStorage,
    DeleteLocalStorage,
}