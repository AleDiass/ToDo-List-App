import styled from 'styled-components'


const ProfileDiv = styled.main`
    width: 70%;

    margin: 5rem auto 4rem auto;
    box-shadow: 1px 2px 10px  #c5c5c5 ;

    min-height: 30rem;
    font-size:1.8rem;


    display:flex;
    flex-direction:column;
    position:relative;
    
    & > section {
        margin-top:5rem;
    }

    a {
        width: 5rem;
        height:4rem;
        
        position:absolute;
        top:0;
        left:0;

        &:hover svg{
            fill:#3b3b3b;
        }

    
    }
    svg{
        transition:fill 0.2s ease;
        fill:#747373;
        transform:scaleX(-1);
        width:100%;
        height:100%;
    }



    section{
        display:flex;
        justify-content:center;
        align-items:center;
        word-wrap:break-word;
        text-align:center;

        & h4{
            margin-right:1rem;
            font-size:2rem;
            font-weight:600;
            color:#928787;
            
        }
        
      
        
    }


    button{
        background-color:#f74829;
        padding:1rem;
        border: 0;
        outline:0;
        border-radius:0.5rem;
        width:15rem;
        height:5rem;
        color:white;
        font-size:1.6rem;
        font-weight:600;
        margin-bottom:1rem;

        transition:background-color 0.2s ease;
        
        &:hover{
            background-color:#c23921;
        }
    }


    @media (max-width:800px){
        &{
            width: 90%;
        }

        section{
            flex-direction:column;
        }

    }

`


export {ProfileDiv}