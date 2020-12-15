import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from '../Components/Header/Header'
import { ContextProvider } from '../Context/ContextProvider'
import Home from '../Pages/Home/Home'
import Index from '../Pages/Index/Index'
import ProfileSettings from '../Pages/ProfileSettings/ProfileSettings'

const Router = () => {
    


    return (
        <BrowserRouter>
            <ContextProvider>
                <Header />
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/home' component={Home}/>    
                <Route path="/ProfileSettings" component={ProfileSettings} />
            </Switch> 
            </ContextProvider>
        </BrowserRouter>
    )
}

export default Router
