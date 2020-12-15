import styled from 'styled-components'


const  HomeDiv = styled.main`
    margin: 0 auto;
    width:calc(75% - 100px);
    margin-top:5rem;
    position:relative;
    min-height:70vh;
    
    h1{
        text-align:center;
        color:red;
        padding:1rem;
        margin-top:1rem;
        font-weight:600;
        letter-spacing:2.2px;

    }

    div{
        border:1px #ccc solid;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        padding: 2rem 0;        

        min-height:10rem;
        position:relative;

        border-radius: 5px;
        margin:10px 0px;


        animation: AnimUp 0.4s forwards ease;

      

            
        
    }

    div button {
        position:absolute;
        top: 0; 
        right:0;
        width: 4rem;
        height:4rem;
        background:transparent;
        border:0;
        outline:0;
        display:flex;
        align-items:center;
        justify-content:Center;

        &:hover svg{
            fill: #a8a7a7;
        }
    
    }

    svg{
        fill:#ccc;
        width:70%;
        height:70%;
        transition: fill 0.2s ease;
    }


    p{
        margin-top:1rem;
        padding:1rem;
        text-align:center;
        font-size:1.8rem;
        width: 80%;
    }

    section{
        display:flex;
        min-height:10rem;
        justify-content:Center;
    }

 

    section button {
       
        position:fixed;
        bottom:2rem;
        width:40%;
        height:5rem;
        color:white;
        font-weight:600;
        font-size:2rem;
        border-radius:5px;
        border:1px #ccc solid;
        box-shadow: 5px 5px 1rem  #bbb9b9;
        background-color:#31c031;
        transition:background-color 0.2s;
        
        &:hover{
            background-color:#239e23
        }

    }


    h2{
        font-size:2rem;
        letter-spacing: 2px;
        text-transform:capitalize;
    }

    h3{
        color: #7a7878;
        text-align:center;
        font-size:2rem;
        font-weight:400;
    }


    @media (max-width: 700px){
        &{
          width:calc( 95% - 1rem);
        }

        section button {
            width: 70%;
        }
    }


    @keyframes AnimUp{
        from{
            transform:translateY(-5rem);
            opacity:0;
        }
        to{
            transform:translateY(0rem);
            opacity:1;
        }
    }

`


export {HomeDiv}