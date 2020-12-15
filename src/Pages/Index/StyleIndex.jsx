import styled from 'styled-components';


const IndexMain = styled.main`
    margin-top:5rem;
    display:flex;
    align-items:center;
    justify-content:center;

    div{
        display:flex;
        flex-direction:column;
        width:35rem;
       
        box-shadow: 0 0 2rem 0.5rem #d3d3d3;
        animation: AnimUp 0.4s forwards ease;
        

    }

    div section {
        width:100%;
        height:5rem;
        display:flex;
        border-bottom:1px #ccc solid;
    }

    div section button{
        flex:1;
        border:0;
        outline:0;
        background:transparent;
        font-weight:600;
        letter-spacing:1.4px;
        font-size:1.4rem;
    }

    div span{
        position:relative;
        display:flex;
        height:5rem;
        margin:0 auto;
        top: 2rem;
        width: 80%;
        font-weight:300;
        letter-spacing:1.5px;
        color:red;
    }

   
   


    form{
        display:flex;
        flex-direction:column;
        padding: 0 2rem 2rem 2rem;
    }

    form input{
        margin: 2rem 0;
        padding:1rem;
        position:relative;
        
        border: 0;
        border-bottom: 2px #979797 solid;
        transition: transform 0.3s ease;
        font-size:1.8rem;

        &:hover, 
        &:focus{
            border-bottom:2px #5c5a5a solid;
            outline:none;
            
        }

        &:focus{
            transform:scale(1.02)
        }

        &::placeholder{
            color:#cec9c9;
        }
    }

    form > button {
        margin-top:2rem;
        padding: 2rem;
        font-size:1.7rem;
        border-radius:0;
        background:transparent;
        border:1px #ccc solid;
        transition: transform 0.3s ease;
        font-weight:600;

        &:hover{
            border:1px #333 solid;
            transform:scale(1.03);
        }
    }




    @keyframes AnimUp{
        from{
            transform:translateY(-5rem);
            opacity:0;
        }

        to{
            transform:translateY(0);
            opacity:1;
        }
    }






`;



export {IndexMain}