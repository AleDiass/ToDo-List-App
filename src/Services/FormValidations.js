



function ValidationRegister({username,password,passverify}){
    if(username.length < 4 || password.length < 4  || passverify.length < 4 ){
        return true
    }else{
        return false;
    }
}

function ValidationLogin({username,password}){
    if(username.length < 4 || password.length < 4){
        return true
    }else{
        return false
    }

}

export {ValidationRegister,ValidationLogin}

