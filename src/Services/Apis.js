
import axios from 'axios'
import { saveLocalStorage , DeleteLocalStorage, getLocalStorage} from './LocalStorageManager'

const URL_BASE = 'https://todo-server-api-2020.herokuapp.com/api'




async function RegisterAPI(body){

    
    
    
    
    try{
        const register = await axios.post(URL_BASE + '/register',{...body},{
            headers:{
                "Content-Type":"application/json",
            }
        })
    
        const {Auth,Token} = register.data   
     
        if(Auth && Token){
            saveLocalStorage(Token)
        }

        return {Auth}

    }catch(e){
        return {Auth:false}
    }


 




    
  
}


async function AutoAuth(){

    const token = getLocalStorage()

    if(!token) return {status:404}


    try{

        const Auth = await axios.get(URL_BASE+"/verifyAuth",{
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer" + token
            }
        })

        return Auth
        
    }catch(e){
        DeleteLocalStorage()
        return {status:401}
    }
    
}






async function Login(body){
    let LogIn;


    try{
        LogIn = await axios.post(URL_BASE + '/login',{...body},{
            headers:{
                "Content-Type":"application/json"
            }
        })
    
    }catch(e){
        
        LogIn = {status:404}
    }finally{
        return LogIn
    }

  

    
}




async function DeleteAccountApi(){
    const token = getLocalStorage();
    
    try{
        if(token){
            const Delete = await axios.get(URL_BASE+"/deleteAccount",{
                headers:{
                    "Content-Type":"application/json",
                    "authorization":"Bearer" + token
                }
            })
            
            if(Delete.status === 200){
                return Delete
            }else{
                return {status:500}
            }
        }

    }catch(e){
        return null
    }
}

async function getTodos(){

  const token = getLocalStorage();
    try{
        const getAllTodos = await axios.get(URL_BASE + '/todo/get',{
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer" + token
            }
           })

           if(getAllTodos.data){
            return getAllTodos.data
           }else{
               return null
           }
        
          
        
    }catch(e){
        return null
    }

}


async function CreateTodos(body){
    const token = getLocalStorage();

  try{
        const CreateTodosApi = await axios.post(URL_BASE + '/todo/create',{...body},{
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer" + token
            }
            
        })

        if(CreateTodosApi.status === 201){
            return true
        }else{
            return false
        }
        
  }catch(e){
      return false
  }

}

async function DeleteTodo(id) {


    try{
        const Del = await axios.get(URL_BASE + '/todo/delete',{
            headers:{
                "Content-Type":"application/json",
                "todoID":id
            }
        })
        
        if(Del.status === 200){
            return true
        }else{
           return false
        }

    }catch(e){
        return false
    }
    
}



export {RegisterAPI,AutoAuth,Login,DeleteAccountApi,getTodos,CreateTodos,DeleteTodo}