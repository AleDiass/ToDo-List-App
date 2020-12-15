import React from 'react'
import {ModalCreateDiv} from './StyleModalCreate'
import {ReactComponent as CloseIcon} from '../../Assets/close.svg' 
import TitleChanger from '../../Services/TitleChanger'

const ModalCreate = ({params,submit}) => {
    const {setModalVisibly,setTitle,setDesc} = params
   React.useEffect(()=>{
    TitleChanger('Create')
    document.documentElement.scrollTop = 0;
   },[])

    


    const ModalRef = React.useRef();

    React.useEffect(()=>{
        if(ModalRef.current){
            ModalRef.current.addEventListener('click',(event)=>{
                if(event.target === ModalRef.current){
                    setModalVisibly(false)
                    
                }
            })
        }

    },[setModalVisibly])





    return (
        <ModalCreateDiv ref={ModalRef}>
            <div>
                <form onSubmit={submit}>
                    <button onClick={()=>setModalVisibly(false)}>
                        <CloseIcon/>
                    </button>
                    <input type="text" placeholder='Title' onChange={event => setTitle(event.target.value)}/>

                    <textarea name="" id="" cols="30" rows="10" placeholder='Description' onChange={event => setDesc(event.target.value)}>

                    </textarea>

                    <button className='Create-btn' type="submit">Create</button>


                </form>
            </div>
        </ModalCreateDiv>
    )
}

export default ModalCreate
