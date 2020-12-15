import React from 'react'
import { HeaderStyle } from './StyleHeader'
import {ReactComponent as UserIcon} from '../../Assets/user.svg'
import { Link , useLocation} from 'react-router-dom'
import { DeleteLocalStorage } from '../../Services/LocalStorageManager'
import {UserInformations} from '../../Context/ContextProvider'

const Header = () => {

    const {setData,loadingAuthentication,setTodos} = React.useContext(UserInformations)
    
    const [icovisible,setIcoVisible] = React.useState(true);
    const location = useLocation();

    function Logout(){
        DeleteLocalStorage()
        setData(null)
        setTodos(null)
    }

    React.useEffect(()=>{
        if(location.pathname === "/"){
            setIcoVisible(false)
        }else{
            setIcoVisible(true)
        }
        
    },[location.pathname])

    



    return (
        <HeaderStyle>
            <div>
                ToDo - App
            </div>
           {
           icovisible && !loadingAuthentication ? 
                <section>
                    <UserIcon/>
                    <ul>
                        <li><Link to='/profileSettings'>Settings</Link></li>
                        <li><Link to='/' onClick={Logout} >Logout </Link></li>
                    </ul>
                </section>
                :
                ''
           }
        </HeaderStyle>
    )
}

export default Header
