import React from 'react'
import { UserInformations } from '../../Context/ContextProvider'
import Loading from '../Loading/Loading'
import { HomeDiv } from './StyleHome'
import {CreateTodos, DeleteTodo} from '../../Services/Apis'
import ModalCreate from '../../Components/ModalCreateTodo/ModalCreate'
import {ReactComponent as CloseIco} from '../../Assets/close.svg'
import TitleChanger from '../../Services/TitleChanger'







const Home = () => {
    const {loadingAuthentication,todos,setTodoViewID} = React.useContext(UserInformations)
    const [errors,setErrors] = React.useState(false);


    const [title,setTitle] = React.useState('')
    const [description,setDesc] = React.useState('')
    const [modalvisibly,setModalVisibly] = React.useState(false)

    const todoDivs = React.useRef();


    
    async function CreateTodo(event){
        event.preventDefault()
        const body = {title,description}
        

        const Create = await CreateTodos(body)
         if(!Create){
            
        
            setErrors(true);
            setTimeout(()=>{
                setErrors(false)
            },4000)
    
        }else{
            window.location.reload();
        }
        
    }

    async function handleDeleteTodo(id){
        
        const deleteTodo = await DeleteTodo(id)
        console.log(id)
        if(deleteTodo){
            window.location.reload()
            
        }else{
            setErrors(true)
        }
        
    }

    React.useEffect(()=>{
        if(!modalvisibly){
            TitleChanger('Home')
        }
    },[modalvisibly])
   
    React.useEffect(()=>{
        
       document.documentElement.scrollTop = document.documentElement.scrollTop 
    },[])


    
    if(loadingAuthentication) return <Loading/>

    else{
        return (
            <>
            {modalvisibly && <ModalCreate submit={CreateTodo} params={{setModalVisibly,setTitle,setDesc}}/>}
             
            <HomeDiv ref={todoDivs} className='home-divs'>

             <h1>{errors ? "Error or  Todo Limit Reached" : ''}</h1>
           
                {
                    todos && todos.map((todo)=>{
                        return(
                            <div key={todo._id} id={todo._id}>
                               <button onClick={()=>{handleDeleteTodo(todo._id)}}> 
                                 <CloseIco title='Delete'/>
                               </button>
                               <h2> {todo.Title}</h2>
                              <p>{todo.Description}
                              </p>
                            </div>


                        )

                    })
                    
                   
                    
                }


                {
                   todos && todos.length === 0 ? 
                    <h3>
                        You Dont Have Anyone ToDo , This is Good!
                    </h3>
                    :
                    ''
                }
                
               
                
                
                <section className='modal-control'>
                    <button onClick={()=>{setModalVisibly(true)}}>Create new ToDo</button>
                </section>
            </HomeDiv>
            </>
        )
    }
}

export default Home
