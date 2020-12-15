import React from 'react'
import {ModalMain} from './StyleDelete'
import {DeleteLocalStorage} from '../../Services/LocalStorageManager'
import {DeleteAccountApi} from '../../Services/Apis'
import {useHistory} from 'react-router-dom'
import { UserInformations } from '../../Context/ContextProvider'
import TitleChanger from '../../Services/TitleChanger'

export const DeleteAccount = ({setvalue}) => {

    React.useEffect(()=>{
        TitleChanger('Delete Account')
    },[])

    const history = useHistory();
    const {setData,setTodos} = React.useContext(UserInformations)

    const {setModal} = setvalue

    async function handleDeleteAccount(){
        const DeleteAcc = await DeleteAccountApi()
        if(DeleteAcc.status === 200){
            DeleteLocalStorage()
            setData(null)
            setTodos(null)
            history.push('/')


        }
    }

    function handleCancelModal(){
        setModal(false)
    }



    const ModalRef =React.useRef();
    React.useEffect(()=>{
        
        if(ModalRef){
            ModalRef.current.addEventListener('click',(event)=>{
                if(event.target === ModalRef.current){
                    setModal(false)
                }
            
            })
            
        }
        
        
    
    },[ModalRef])
    

    return (
        <ModalMain ref={ModalRef}>
          <div>
             <h3> You Are Sure ?</h3>

               <section>
                <button onClick={handleDeleteAccount}>Delete</button>  
                <button onClick={handleCancelModal}>Cancel</button>
               </section>
              
          </div>
        </ModalMain>
    )
}
