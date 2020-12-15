import React from 'react'

const LoginPage = ({error,submit,children,setvalues})=>{

    const {setPassword,setUsername} = setvalues
    const {loginError} = error
    
    const SetUser = (event)=>{

        const value = event.target.value
        setUsername(value)

        
        

    }
    
    const SetPass = (event)=>{
        const value = event.target.value
        setPassword(value)

    }
   
    


    return (

        <form onSubmit={submit}>
            <input className='user-input'  placeholder='Username' type="text" onChange={SetUser}/>
            <input className='pass-input'  placeholder='Password' type="password" onChange={SetPass}/>
            {children}
        </form>

    )
}

export default LoginPage
