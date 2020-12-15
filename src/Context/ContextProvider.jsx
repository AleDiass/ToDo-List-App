import React from 'react'
import { AutoAuth } from '../Services/Apis';
import {useHistory, useLocation} from 'react-router-dom'
import {getTodos} from '../Services/Apis'

const UserInformations = React.createContext();

const ContextProvider = ({children}) => {
    const location = useLocation();
    const history = useHistory();

    const [data,setData] = React.useState(null)
    const [todos,setTodos] = React.useState(null)
    const [loadingAuthentication,setLoadingAuthentication] = React.useState(true)



    React.useEffect(()=>{
       
        
        (async()=>{
            if(!data){
                setLoadingAuthentication(true);

                const Response = await AutoAuth()
                if(Response.status !== 200){
                    
                
                    history.push('/')
                
                    

                }else{
                    setData([Response.data])
                    history.push('/home')

                    const todoApi = await getTodos();
                    if(Array.isArray(todoApi)){
                        
                        setTodos(todoApi)
                    }

                    


                   
                    
                }
            }

            setLoadingAuthentication(false)
        })()

        

    },[history,location.pathname,data,])
    
    
  



    return (
        <UserInformations.Provider value={{loadingAuthentication,data,setData,todos,setTodos}} >
            {children}
        </UserInformations.Provider>
    )
}

export  {ContextProvider,UserInformations}
