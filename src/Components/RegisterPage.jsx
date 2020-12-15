import React from 'react'

const RegisterPage = ({error,submit,children,setvalues})=>{

    const {setPassword,setPassVerify,setUsername} = setvalues
    const {registerError} = error

    const SetUser = (event)=>{

        const value = event.target.value
        setUsername(value)

        
        

    }
    
    const SetPass = (event)=>{
        const value = event.target.value
        setPassword(value)

    }

    const SetPassVe = (event)=>{
        const value = event.target.value
        setPassVerify(value)
    }
   
    


    return (

        <form onSubmit={submit}>
            <input  className='user-input' placeholder='Username' type="text" onChange={SetUser}/>
            <input className='pass-input'  placeholder='Password'  type="password" onChange={SetPass}/>
            <input className='pass-input'  placeholder='Password'  type="password" onChange={SetPassVe}/>
            {children}
        </form>

    )
}

export default RegisterPage
