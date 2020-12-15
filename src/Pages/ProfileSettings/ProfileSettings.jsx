import React from 'react'
import {ProfileDiv} from './StyleProfile'
import {UserInformations} from '../../Context/ContextProvider'
import { DeleteAccount } from '../../Components/ModalDeleteAccount/DeleteAccount'
import {ReactComponent as ArrowBack} from '../../Assets/Arrow-Back.svg'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import TitleChanger from '../../Services/TitleChanger'

const ProfileSettings = () => {
    const {loadingAuthentication} = React.useContext(UserInformations)
    const {data} = React.useContext(UserInformations)
    const [modal,setModal] = React.useState(false)

    React.useEffect(()=>{
        if(!modal){
            TitleChanger('Settings')
        }
    },[modal])



    if(loadingAuthentication)return <Loading/>
    else{

        
        return (
            <>
            {modal && <DeleteAccount setvalue={{setModal}}/>}
            <ProfileDiv>

                <Link to="/home">
                    {<ArrowBack/>}
                </Link>
            



                
                    {data &&
                        <>
                        <section>
                            <h4>User:</h4>
                            <h3>{data[0].User}</h3>
                        </section>
                        
                        <section>
                            <h4>ID:</h4>
                            <h3>{data[0].id}</h3>
                        </section>
                        </>
                    }
            


                <section>
                    <button onClick={()=>{setModal(true)}}>
                        Delete Account
                    </button>
                </section>
            </ProfileDiv>
            </>
        )
    }
}

export default ProfileSettings
