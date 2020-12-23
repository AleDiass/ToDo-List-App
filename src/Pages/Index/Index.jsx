import React from 'react'
import { IndexMain } from './StyleIndex'
import LoginPage from '../../Components/LoginPage';
import RegisterPage from '../../Components/RegisterPage'
import {useHistory} from 'react-router-dom'
import { UserInformations } from '../../Context/ContextProvider';
import Loading from '../Loading/Loading'
import { StartLogin, StartRegister } from '../../Services/LoginAndRegister';
import TitleChanger from '../../Services/TitleChanger'

const Index = () => {



    React.useEffect(()=>{
        TitleChanger('Login - Register')
    },[])
   


    const {loadingAuthentication} = React.useContext(UserInformations)

    const history = useHistory();

   
    // True = Login  / False = Register
    const [screen,setScreen] = React.useState(true);

   

    
    
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [passverify,setPassVerify] = React.useState('');
   
    const [registerError,setRegisterError] = React.useState(false)
    const [loginError,setLoginError] = React.useState(false);

    const [loadingAPI,setloadingAPI] = React.useState(false)


   

    async function SubmitLogin(event){
        setloadingAPI(true)

        event.preventDefault()
        const body = {username,password}

       const Login =  await StartLogin({setLoginError,body})
       if(Login){
           
           history.push('/home')
       }

        

        setloadingAPI(false)
    }

    async function SubmitRegister(event){
        setloadingAPI(true)
        const body = {username,password,passverify}
        
        event.preventDefault()
         
        const Register = await StartRegister({setRegisterError,body})
        if(Register){
            history.push('/home')
        }
        
        setloadingAPI(false)

    }

    


    
    if(loadingAuthentication){
        return <Loading/>
    }else{

        

        return(
            <IndexMain>

                <div>
                    <section>
                        <button style={{background: screen ? "transparent" : "#f1f1f1" }} className='Login-btn-page' onClick={()=>{setScreen(true)}}>Login Page</button>
                        <button style={{background: screen ? "#f1f1f1" : "transparent" }}  className='Register-btn-page' onClick={()=>{setScreen(false)}}>Register Page</button>
                    </section>
                    
                    <span>
                        {registerError && <h2>User Already Exists or Invalid Username/Password</h2>}
                        {loginError && <h2>Username / Password Invalid or User Not Found In DataBase  </h2>}    
                    </span>
                {
                    screen ?
                    <LoginPage error={{loginError}} submit={SubmitLogin} setvalues={{setPassword,setUsername}}>
                        {
                        loadingAPI ? 
                            <button type='submit' disabled>Sign Up</button>
                            :
                            <button type='submit'>Sign Up</button>
                        }
                    </LoginPage>
                    :
                    <RegisterPage error={{registerError}} submit={SubmitRegister} setvalues={{setPassword,setUsername,setPassVerify}}>
                        {
                        loadingAPI ? 
                            <button type='submit' disabled>Register</button>
                            :
                            <button type='submit'>Register</button>
                        }
                    </RegisterPage>
                }
                

                </div>

            </IndexMain>
        )
            }
}






 export default Index