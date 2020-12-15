import { Login, RegisterAPI } from "./Apis"
import { ValidationLogin, ValidationRegister } from "./FormValidations"
import { saveLocalStorage } from "./LocalStorageManager"

async function StartLogin({setLoginError,body}){
    
    

    if(ValidationLogin(body)){
        setLoginError(true)
        setTimeout(()=>{setLoginError(false)},2000)
        return false
    }else{

    
        const LoginResponse = await Login(body)
        if(LoginResponse.status === 200){
        saveLocalStorage(LoginResponse.data.Token)
            return true
        }else{
            setLoginError(true)
            setTimeout(()=>{
                setLoginError(false)
            },3000)

            return false;
        }
    }

}


async function StartRegister({setRegisterError,body}){
    const {username,password,passverify} = body

    if(ValidationRegister({username,password,passverify})){
        setRegisterError(true)
        setTimeout(()=>{setRegisterError(false)},2000)
        return false
    
    }else{

   

        const register = await RegisterAPI(body)

        if(register.Auth){
            return true
        }else{
            setRegisterError(true)
            setTimeout(()=>{
                setRegisterError(false)
            },3000)

            return false

        }
        
    }

}


export {
    StartLogin,
    StartRegister,
}