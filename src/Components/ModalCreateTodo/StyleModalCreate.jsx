import styled from 'styled-components'


const ModalCreateDiv = styled.main`
    position:fixed;

    width:100%;
    height:100%;
    border:1px black solid;
    display:flex;
    background:rgba(0,0,0,0.7);
    z-index:999999;
    align-items:center;
    justify-content:center;
    
    
    

    form{
        display:flex;
        flex-direction:column;
        width:50rem;
        padding:4rem;
        background:#f3f3f3;
        position:Relative;
        

        animation: animUp 0.3s forwards ease;



    }

   .close-modal{
       background:#f3f3f3;
       border:none;
       outline:none;
       
   }

    svg{
        fill:#b9b9b9;
        position:absolute;
        width: 3rem;
        top:-4rem;
        right:1rem;

        transition: fill 0.2s ease;

        &:hover{
            fill:#888484
        }
    }


    input{
        padding:1rem;
        margin:1rem 0;
        font-size:1.7rem;
        font-weight:600;
    }

    textarea{
        padding:1rem;
        font-size:1.7rem;
        resize:none;
    }

    button.Create-btn{
        margin-top:2rem;
        padding:1rem;
        font-size:1.7rem;
        font-weight:600;
        background-color:#31c031;
        transition:background-color 0.2s;
        border:0;
        outline:0;
        border-radius:5px;
        color:white;

        &:hover{
            background-color:#239e23
        }
    }



    @media (max-width:550px){
        form{
            width: 40rem;
        }

    }

    @media (max-width:400px){
        form{
            width:35rem;
        }
    }


    @keyframes animUp{
        from{
            transform:translateY(-10rem);
            opacity:0;
        }
        to{
            transform:translateY(-0rem);
            opacity:1;
        }
    }


`

export {ModalCreateDiv}