import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    :root{
        font-size:62.5%;
    }

    #root{
        display:flex;
        flex-direction:column;
    }

    
    
    body{
        
    }


    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor:pointer;
        
    }

    ul{
        list-style:none;
        padding:0;
        margin:0;
    }

    
    @media (min-width:1400px){
     :root{
         font-size:75.5%;
     }   
    }
`;


export { GlobalStyle }