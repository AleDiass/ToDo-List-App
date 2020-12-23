import React from 'react'
import { UserInformations } from '../../Context/ContextProvider'
import Loading from '../Loading/Loading'
import { HomeDiv } from './StyleHome'
import {CreateTodos, DeleteTodo,getTodos} from '../../Services/Apis'
import ModalCreate from '../../Components/ModalCreateTodo/ModalCreate'
import {ReactComponent as CloseIco} from '../../Assets/close.svg'
import TitleChanger from '../../Services/TitleChanger'







const Home = () => {
    const {loadingAuthentication,todos,setTodos} = React.useContext(UserInformations)
    const [errors,setErrors] = React.useState(false);

    const [visiblyTodo,setVisiblyTodo] = React.useState([])
    const [title,setTitle] = React.useState('')
    const [description,setDesc] = React.useState('')
    const [modalvisibly,setModalVisibly] = React.useState(false)

    React.useEffect(()=>{
        setVisiblyTodo(todos)
    },[todos])


    
    async function CreateTodo(event){
        event.preventDefault()
        const body = {title,description}
        

        const Create = await CreateTodos(body)
         if(!Create){
            
        
            setErrors(true);
            setTimeout(()=>{
                setErrors(false)
            },4000)
    
            setModalVisibly(false)
        }else{
            setModalVisibly(false)
            const updateTodos =await  getTodos()


            setTodos(updateTodos) 
            
            

            document.documentElement.scrollTop = document.documentElement.scrollHeight 
        }
        
    }

    async function handleDeleteTodo(id){
        
        const deleteTodo = await DeleteTodo(id)
        
        if(deleteTodo){
            let todoFilter = todos.filter((todo)=>{
                return todo._id !== id
            })

            setTodos(todoFilter)

            
            
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
        
        document.documentElement.scrollTop = document.documentElement.scrollHeight
    },[])


    
    if(loadingAuthentication) return <Loading/>

    else{
        return (
            <>
            {modalvisibly && <ModalCreate submit={CreateTodo} params={{setModalVisibly,setTitle,setDesc}}/>}
             
            <HomeDiv className='home-divs'>

             <h1>{errors ? "Error or  Todo Limit Reached" : ''}</h1>
           
                {
                    visiblyTodo && visiblyTodo.map((todo)=>{
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
                   visiblyTodo && visiblyTodo.length === 0 ? 
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
