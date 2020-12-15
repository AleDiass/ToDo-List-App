import styled from 'styled-components'


const ModalMain = styled.main`
    width:100vw;
    height:100vh;
    position:absolute;
    display:flex;
    justify-content:center;
    top:0;
    background:rgba(0,0,0,0.7);
    z-index:99999;
    
    div{
        margin-left:30px;
        margin-right:30px;
        margin-top:30vh;
        display:flex;
        flex-direction:column;
        height:20rem;
        width:50rem;
        padding:2rem;
        background:#f3f3f3;
        justify-content:center;
        align-items:center;
        border-radius:1rem;
        font-size:2rem;

        animation: delAnim 0.5s forwards;
    }

    section{
        margin:5rem;
    }

    section button{
        padding:1rem;
        flex:1;
        width:10rem;
        font-size:1.6rem;
        font-weight:600;
        align-self:flex-end;
        margin: 0 1rem;
        border:0;
        outline:0;
        border-radius:5px;
        color:white;
        
    }

    section  > button{
        background-color:#f74829;

        transition:background-color 0.2s;

        &:hover{
            background-color:#c23921;
        }
    }

    section  button + button  {
        background-color:#31c031;
        transition:background-color 0.2s;
        &:hover{
            background-color:#239e23
        }
    }


    @keyframes delAnim{
        from{
            transform:translateY(-5rem)
        }

        to{
            transform:translateY(0)
        }

    }

    

`

export {ModalMain}